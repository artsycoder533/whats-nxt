import Product from "../components/Product";
import { client } from "../lib/sanity";
import { allProducts } from "../util/queries";
import Title from "../components/Title";

export const revalidate = 30;

export default async function Products() {
  const query = allProducts;
  const products = await client.fetch(query);

  return (
    <section className="flex grow flex-col py-24 max-w-[1400px] w-[90vw] mx-auto">
      <Title text="Products" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 border">
        {products?.map((product: Products) => <Product key={product.slug} product={product} />)}
      </div>
    </section>
  );
}
