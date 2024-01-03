import Title from "../components/Title";
import { Metadata } from "next";
import ShoppingCart from "../components/ShoppingCart";

export const metadata: Metadata = {
  title: "Cart",
};

const Cart = () => {
  return (
    <section className="flex flex-col justify-center gap-8 max-w-[1400px] w-[90vw] mx-auto my-32">
      <Title text="Cart" />
     <ShoppingCart />
    </section>
  );
};

export default Cart;
