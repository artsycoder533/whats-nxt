"use client";
import {useEffect } from "react";
import { useCart } from "../context/CartContext";


const Success = () => {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl">
      <h2>Thank you for your order!  We appreciate your business!</h2>
    </div>
  );
};

export default Success;
