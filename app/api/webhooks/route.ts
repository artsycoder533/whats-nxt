import { NextResponse } from "next/server";
import { updateStockInSanity } from "@/app/util/helpers";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const secret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");
    const event = stripe.webhooks.constructEvent(body, signature, secret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id
      );
      if (!lineItems) {
        throw new Error(`missing line items, ${event.id}`);
      }

      const formattedLineItems = lineItems.data.map(
        (item: { price: { product: any }; quantity: any }) => ({
          id: item.price.product,
          quantity: item.quantity,
        })
      );

      //update quantity in sanity
      formattedLineItems.forEach((lineItem: FormattedLineItem) =>
        updateStockInSanity(lineItem)
      );
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "something went wrong",
        ok: false,
      },
      { status: 500 }
    );
  }
}
