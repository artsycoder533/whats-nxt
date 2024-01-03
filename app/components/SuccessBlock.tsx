"use client";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { BsCheck2Circle } from "react-icons/bs";

const SuccessBlock = () => {
  const { resetCart } = useCart();

  useEffect(() => {
    console.log("resetting cart!");
    resetCart();
    localStorage.clear();
  }, []);
  return (
    <div className="flex flex-col items-center mt-48 font-extralight gap-4">
      <BsCheck2Circle className="text-6xl text-green-700" />
      <p>Thank you for your order! We appreciate your business!</p>
      <Link
        href="/"
        className="underline underline-offset-4 text-[#B76E79] flex items-center gap-2 font-medium"
      >
        Back To Home <HiArrowRight className="hover:text-[#8a525a]" />
      </Link>
    </div>
  );
};

export default SuccessBlock;
