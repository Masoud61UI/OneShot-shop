import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-[#333] w-full rounded font-[sans-serif] overflow-hidden">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <div className="lg:col-span-2 py-10 px-6">
          <h2 className="text-3xl font-bold">
            Your Destination for Unique and Exclusive Products
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Established in 2024, OneShot caters to individuals seeking
            distinctive and one-of-a-kind items. We are passionate about
            providing high-quality products at affordable prices, ensuring a
            delightful shopping experience for our valued customers. The OneShot
            team comprises young and innovative minds who are constantly on the
            lookout for the latest and most unique products to add to our
            collection.
          </p>
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-lg transition duration-180 ease-out hover:ease-in text-sm font-medium mt-8">
            <Link href={"/about"}>About us</Link>
          </button>
        </div>
        <Image
          src={
            "https://www.shiyusecurity.com/wp-content/uploads/2022/04/001-1400X570.jpg"
          }
          width={800}
          height={800}
          alt="About Image"
          className="w-full h-full object-cover shrink-0"
        />
      </div>
    </div>
  );
}
