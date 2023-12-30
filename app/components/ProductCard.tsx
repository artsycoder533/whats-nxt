"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart, cart } = useCart();
  const { name, description, color, price, stockQuantity, images, videos, quantity } =
    product;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [featuredMedia, setFeaturedMedia] = useState<string>(images[0].url);
  const [currentProduct, setCurrentProduct] = useState<Product | undefined>(() => {
    return cart.find((item) => item._id === product._id);
  });

  const paragraphs = description.split("\n\n");

  const displayText = showFullDescription ? description : paragraphs[0];

  const media = [...images, ...videos];

  return (
    <div className="flex flex-col lg:flex-row gap-16">
      <div className="flex flex-col gap-4 basis-1/2">
        <div className="flex max-w-[500px] h-[500px] justify-start mx-auto lg:mx-0 rounded-lg bg-black">
          <Image
            width={500}
            height={500}
            src={featuredMedia}
            alt={images[0].altText}
            // fill
            className="rounded-lg object-cover object-center"
          />
        </div>
        <div className="flex flex-row gap-3 h-28 max-w-[500px] mx-auto lg:m-0 w-[90vw] overflow-x-auto pb-2 pr-2">
          {media.map((media, index) => {
            if (media.url.includes("images")) {
              return (
                <Image
                  src={media.url}
                  alt={media.altText}
                  key={`${media.url}{index}`}
                  width={250}
                  height={250}
                  className="rounded-lg object-contain object-center cursor-pointer"
                  onClick={() => setFeaturedMedia(media.url)}
                />
              );
            } else if (media.url.includes("files")) {
              return (
                <video width="250" height="250" muted key={`${media.url}{index}`} className="cursor-pointer" onClick={() => setFeaturedMedia(media.url)}>
                  <source src={media.url} type="video/mp4" />
                </video>
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 basis-1/2">
        <div className="">
          <h2 className="text-2xl font-semibold">{name}</h2>
          {stockQuantity > 0 ? (
            <p className="text-xl my-3">{`$${price}`}</p>
          ) : (
            <p className="text-xl my-3 text-red-500">Out of Stock</p>
          )}
          <p className="font-medium">Color: {color}</p>
          <div className="flex flex-wrap gap-3 items-center mb-3">
            <button
              className={`px-6 py-3 mt-4  rounded-lg ${currentProduct?.quantity === stockQuantity ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#B76E79] hover:bg-[#8a525a]'} text-white`}
              disabled={currentProduct?.quantity === stockQuantity}
              onClick={() => {
                addToCart(product);
              }}
            >
              {stockQuantity === 0 ? 'Out of Stock': 'Add To Cart'}
            </button>
            {stockQuantity <= 3 ? <p className="text-red-500 text-md w-full">Only 3 left!</p> : null}
          </div>

          <p className="whitespace-pre-line font-light">{displayText}</p>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-gray-700 my-3 underline underline-offset-4 hover:text-[#B76E79]"
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        </div>
        <div>
          <details className=" py-3 border-b cursor-pointer">
            <summary>Features</summary>

            <ul className="py-3 list-disc list-inside ml-6 font-light">
              <li>Spiral Bound</li>
              <li>Dimensions: 8.5 x 11</li>
            </ul>
          </details>
          <details className=" py-3 border-b cursor-pointer">
            <summary>Shipping</summary>

            <p className="py-3 font-light ml-6">All planners ship free!</p>
          </details>
          <details className=" py-3 border-b cursor-pointer">
            <summary>Returns</summary>

            <ul className="py-3 list-disc list-inside ml-6 font-light">
              <li>Spiral Bound</li>
              <li>Dimensions: 8.5&quot; x 11&quot; x 0.5&quot;</li>
              <li>207 pages</li>
              <li>1lb 6.1 oz.</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
