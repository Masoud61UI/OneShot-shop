import Container from "@/components/container/Container";
import ProductItem from "@/components/productItem/ProductItem";
import { Allproduct } from "@/app/lib/definitions";
import Link from "next/link";
import { getProducts } from "@/services/api";

export default async function page() {
  const resultProducts: Allproduct[] = await getProducts();

  return (
    <div>
      <Container>
        <h1 className="text-xl text-gray-800 font-semibold">All Products</h1>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-5">
          {resultProducts.map((item) => {
            return (
              <Link key={item.id} href={`/products/${item.id}`}>
                <ProductItem {...item} />
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
