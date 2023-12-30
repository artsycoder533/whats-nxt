import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  //filter out only active products
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  //get products from stripe
  const { products } = await request.json();
  const data = products;

  //filter out non active products
  let activeProducts = await getActiveProducts();

  //if product isnt already in stripe, add it
  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.id === product?._id
      );

      if (stripeProduct === undefined) {
        const prod = await stripe.products.create({
          name: product.name,
          id: product._id,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "usd",
            tax_behavior: "exclusive",
          },
          metadata: {
            color: product.color,
          },
          tax_code: "txcd_99999999",
          shippable: true,
          images: [product.images[0].url],
        });
      }
    }
  } catch (error) {
    console.error("error in creating a new product", error);
    throw error;
  }

  activeProducts = await getActiveProducts();

  //construst array of objects that we will pass to the stripe checkout session
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.id === product?._id
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
        adjustable_quantity: {
          enabled: true,
          maximum: product.stockQuantity,
        },
      });
    }
  }

    //create stripe session
    const session = await stripe.checkout.sessions.create({
      line_items: stripeItems,
      shipping_options: [
        {
          shipping_rate: "shr_1ONQLbKHr1d69CY5jEuVXBeT",
        },
        {
          shipping_rate: "shr_1ONQC1KHr1d69CY5NKniFzUL",
        },
      ],
      automatic_tax: {
        enabled: true,
      },
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      mode: "payment",
      success_url: "http://whats-nxt.vercel.app/success",
      cancel_url: "http://whats-nxt.vercel.app/cart",
    });

    return NextResponse.json({ url: session.url });
};
