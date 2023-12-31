import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {
  product: Products;
};


const Product = ({ product }: Props) => {
  const { images, name, price, color, slug } = product;

  return (
    <Link href={`/products/${slug}`} className=" max-w-96">
      <div className="h-[300px]">
        <Image
          src={images?.url}
          alt={images?.altText}
          className="rounded-xl h-full w-full object-cover object-center"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="font-light">{name}</p>
          <p className="font-medium">${price}</p>
        </div>
        <p className="text-gray-600 text-sm font-extralight">{color}</p>
      </div>
    </Link>
  );
};

export default Product;
