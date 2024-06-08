import ProductItem from "@/components/productItem/ProductItem";
import { Allproduct } from "@/app/lib/definitions";
import Link from "next/link";
import { getProducts } from "@/services/api";

export default async function LatestProducts() {
  const resultProducts: Allproduct[] = await getProducts();

  resultProducts.splice(4, 8);

  return (
    <div className="w-full my-24">
      <h1 className="text-xl text-gray-800 font-semibold">Latest Products</h1>

      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
        {resultProducts.map((item) => {
          return (
            <Link key={item.id} href={`/products/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
