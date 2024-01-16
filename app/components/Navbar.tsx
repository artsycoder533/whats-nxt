"use client";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import Hamburger from "./Hamburger";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const navItems = [
  { link: "Home", path: "/" },
  { link: "Mission", path: "/#mission" },
  { link: "Products", path: "/products" },
  { link: "Contact", path: "/#contact" },
];

type Props = {};

const Navbar = (props: Props) => {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  useEffect(() => {
    const cartQuantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)
    setTotalQuantity(cartQuantity);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };

    
  }, [open, cart]);

  return (
    <nav className="flex items-center justify-between max-w-[1400px]   md:flex-row md:w-full mx-auto">
      <div className="flex items-center  w-full md:w-auto">
        <div className="flex items-center gap-3 flex-row">
          <Image
            src={logo}
            alt="Omni Addiction & Mental Health Services"
            width={75}
            height={75}
            style={{
              objectFit: "contain",
              height: "auto"
            }}
          />
          <p className="text-3xl hidden xl:block text-[#B76E79] font-extralight uppercase">Whats Nxt</p>
        </div>
      </div>
      <ul
        className={
          "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[68px] left-0 right-0 h-[calc(100vh)] md:h-auto bg-white transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
        }
      >
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link
                className="text-2xl md:text-base hover:underline py-2 hover:text-[#B76E79] hover:underline-offset-8"
                href={path}
                // scroll={false}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/cart" onClick={() => setOpen(false)} className="relative flex items-center gap-2 p-3 flex-shrink-0 mr-6 md:mr-0 hover:opacity-90 hover:text-[#8a525a]">
        Cart {totalQuantity > 0 ? <span className="absolute top-0 right-0 -mt-1 bg-[#B76E79] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">{totalQuantity}</span> : null}
        <FaShoppingCart />
      </Link>
      <Hamburger open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
