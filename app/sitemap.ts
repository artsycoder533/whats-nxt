import { MetadataRoute } from "next";
import { allProducts } from "./util/queries";
import { client } from "./lib/sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const products = await client.fetch(allProducts);

    const singleProduct: MetadataRoute.Sitemap = products.map((product: Product) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${product.slug}`
    }))

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/#contact`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/#mission`,
        },
        ...singleProduct,
    ]
}