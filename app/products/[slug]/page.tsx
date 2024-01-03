import ProductCard from "@/app/components/ProductCard";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export const generateMetadata = ({params}: Props): Metadata => {
  return {
    title: `${params.slug}`
  }
}

async function getProductBySlug(slug: string) {
  const query = `
  *[_type == 'product' && slug.current == "${slug}"][0]{
    _id,
      name,
      description,
      color, price,
      stockQuantity,
      'slug':slug.current,
      'images': images[]{
        'altText': altText, 
        'url': image.asset->url
      },
    }
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage({ params }: Props) {
  if (!params.slug) return;

  const product = await getProductBySlug(params.slug);

  return (
    <section className="flex flex-col justify-center gap-8 max-w-[1400px] w-[90vw] mx-auto my-32">
      <Link href="/products" className="flex items-center gap-2 text-light"><HiArrowLeft className="text-[#B76E79]"/>Back</Link>
      <ProductCard product={product} />
    </section>
  );
}
