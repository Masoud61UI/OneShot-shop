import Container from "@/components/container/Container";
import ProductItem from "@/components/productItem/ProductItem";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Container>
        <h1 className="text-xl text-gray-800 font-semibold">All Products</h1>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-5">
          <Link href={`/productDetails/${1}`}>
            <ProductItem />
          </Link>
          <Link href={`/productDetails/${1}`}>
            <ProductItem />
          </Link>
          <Link href={`/productDetails/${1}`}>
            <ProductItem />
          </Link>
          <Link href={`/productDetails/${1}`}>
            <ProductItem />
          </Link>
          <Link href={`/productDetails/${1}`}>
            <ProductItem />
          </Link>
          <Link href={`/productDetails/${1}`}>
            <ProductItem />
          </Link>
        </div>
      </Container>
    </div>
  );
}
