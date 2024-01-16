"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const ShoppingCart = () => {
  const {
    cart,
    removeFromCart,
    decrementQuantity,
    incrementQuantity,
    resetCart,
  } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce((acc, curr) => {
    const productTotal = curr.quantity * curr.price;
    return acc + productTotal;
  }, 0);

  const checkout = async () => {
    try {
      const response = await fetch("https://www.whatsnxt.org/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cart }),
      });

      if (response.ok) {
        // Reset the cart to an empty array upon successful checkout
      
        const responseData = await response.json();

        if (responseData.url) {
          router.push(responseData.url);
          // resetCart();
        }
      } else {
        console.error(`Checkout failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  return (
    <>
      {cart.length === 0 ? (
        <div className="flex flex-col gap-8 items-center">
          <p>Oh no! Your cart is empty! Let&apos;s fix that!</p>
          <Link
            href="/products"
            className="underline underline-offset-4 text-[#B76E79] flex items-center gap-2"
          >
            Continue Shopping <HiArrowRight className="hover:text-[#8a525a]" />
          </Link>
        </div>
      ) : null}
      {cart.length > 0
        ? cart.map((cartItem) => {
            return (
              <div key={cartItem._id} className="w-full border-b p-3">
                <div className="flex justify-between gap-8">
                  <Link href={`/products/${cartItem.slug}`}>
                    <Image
                      src={cartItem.images[0].url}
                      alt={cartItem.images[0].altText}
                      width={150}
                      height={150}
                      className="rounded-lg"
                      priority
                    />
                  </Link>
                  <div className="grid grid-cols-2 justify-between w-full">
                    <p>
                      {cartItem.name} -{" "}
                      <span className="font-extralight">{cartItem.color}</span>
                    </p>
                    <p className="place-self-end self-start">
                      ${cartItem.price * cartItem.quantity}
                    </p>
                    <div className="flex items-center gap-4 place-self-start self-end">
                      <button
                        onClick={() => decrementQuantity(cartItem._id)}
                        className="w-10 h-10 rounded-full flex justify-center items-center border border-[#B76E79] hover:text-2xl"
                      >
                        <HiOutlineMinus className="text-[#B76E79] font-semibold" />
                      </button>
                      <p>{cartItem.quantity}</p>
                      <button
                        onClick={() => incrementQuantity(cartItem._id)}
                        className="w-10 h-10 rounded-full flex items-center justify-center border border-[#B76E79] hover:text-2xl"
                      >
                        <HiOutlinePlus className="text-[#B76E79] font-semibold" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(cartItem._id)}
                      className="text-[#B76E79] font-medium place-self-end hover:underline hover:underline-offset-4 hover:text-[#8a525a]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      {cart.length > 0 ? (
        <div className="mt-12 md:self-end">
          <p className="flex items-center justify-between">
            <strong>Subtotal:</strong>
            <span>${subtotal}</span>
          </p>
          <p className="font-extralight">
            Shipping and taxes calculated at checkout.
          </p>
          <button
            className="px-6 py-3 mt-4 mb-6 rounded-lg bg-[#B76E79] text-white hover:bg-[#8a525a] w-full"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCart;
