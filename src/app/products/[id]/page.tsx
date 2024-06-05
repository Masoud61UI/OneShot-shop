import Container from "@/components/container/Container";
import Image from "next/image";
import { IoPricetagOutline } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import { Allproduct } from "@/app/lib/definitions";
import { getProduct } from "@/services/api";
import AddToCartBtn from "@/components/addToCartBtn/AddToCartBtn";

export default async function page({ params }: any) {
  const productId = params.id;
  const resultProduct: Allproduct = await getProduct(productId);

  return (
    <div className="w-full mt-16">
      <Container>
        <div className="flex flex-col md:flex-row content-center mx-auto md:space-x-8 2xl:space-x-14">
          <div className="border border-gray-200 basis-2/6 rounded-xl flex items-center justify-center">
            <Image
              src={resultProduct.image}
              width={560}
              height={400}
              alt="CCTV Photo"
              className="w-[350px] h-[240px] object-contain"
            />
          </div>
          <div className="p-3 basis-4/6 w-full 2xl:pt-6">
            <h2 className="text-3xl mb-5 font-bold">{resultProduct.title}</h2>
            <p className="text-lg mb-8 text-gray-600">
              {resultProduct.description}
            </p>
            <div className="mb-10 flex items-center">
              <div className="flex items-center">
                <LuStar className="h-5 mr-2 text-lg text-indigo-500" />
                <span className="mr-2 text-gray-600">Rate:</span>
              </div>
              <p className="text-lg font-semibold">
                {resultProduct.rating.rate}
              </p>
              <p className="text-sm ml-1 font-medium text-gray-600">
                ({resultProduct.rating.count})
              </p>
            </div>
            <div className="mb-10 flex items-center">
              <div className="flex items-center">
                <IoPricetagOutline className="h-5 mr-2 text-lg text-indigo-500" />
                <span className="mr-2 text-gray-600">Price:</span>
              </div>
              <p className="text-lg font-semibold">{resultProduct.price}$</p>
            </div>
            <AddToCartBtn product={resultProduct} />
          </div>
        </div>
      </Container>
    </div>
  );
}
