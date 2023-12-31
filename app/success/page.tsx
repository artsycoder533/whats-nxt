"use client";
import {useEffect } from "react";
import { useCart } from "../context/CartContext";


const Success = () => {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, []);

  return (
    <div className="flex flex-col items-center mt-48 text-4xl font-extralight">
      <p>Thank you for your order!  We appreciate your business!</p>
    </div>
  );
};

export default Success;
