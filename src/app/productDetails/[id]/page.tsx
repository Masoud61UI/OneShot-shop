import { MyParams } from "@/app/lib/definitions";
import Container from "@/components/container/Container";
import Image from "next/image";
import { IoPricetagOutline } from "react-icons/io5";

export default function page(params: MyParams) {
  const productId = params.id;

  return (
    <div className="w-full mt-16">
      <Container>
        <div className="flex flex-col md:flex-row content-center mx-auto md:space-x-6 2xl:space-x-12">
          <Image
            src="https://www.techcube.co.uk/wp-content/uploads/2017/09/cctv-camera.jpg"
            width={560}
            height={400}
            alt="CCTV Photo"
            className="rounded-lg w-full basis-2/5"
          />
          <div className="p-3 basis-3/5 w-full 2xl:pt-6">
            <h2 className="text-3xl mb-5 font-bold">Title</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              accusamus officia nam nobis unde voluptatem praesentium iure,
              quasi nemo, temporibus tempora non commodi maiores harum quaerat
              illo? In, a et.
            </p>
            <div className="mb-10 flex items-center">
              <div className="flex items-center">
                <IoPricetagOutline className="h-5 mr-2 text-lg text-indigo-500" />
                <span className="mr-2">Price:</span>
              </div>
              <p className="font-semibold">55$</p>
            </div>
            <button
              type="button"
              className="px-6 py-3 w-60 rounded-lg text-gray-50 text-base tracking-wider font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-indigo-700 to-indigo-300"
            >
              Add to cart
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
