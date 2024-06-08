import Image from "next/image";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-y-6 bg-indigo-500 rounded-xl">
      <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
        <h2 className="lg:text-5xl text-3xl font-bold mb-4 lg:!leading-[56px]">
          <span className="text-orange-300">OneShot</span>, Quality Products, Unbeatable Prices
        </h2>
        <p className="mt-4 mb-9 text-base leading-relaxed">
          Step out of the ordinary and discover one-of-a-kind products that will
          set you apart. Our ever-growing collection of unique finds is sure to
          amaze and inspire. Explore the unexpected at OneShot.
        </p>
        <Link
          href={"/products"}
          className="bg-transparent hover:bg-white hover:text-indigo-500 border-2 border-white mt-10 font-bold text-sm rounded-md px-6 py-2.5 transition duration-180 ease-out hover:ease-in"
        >
          Our Products
        </Link>
      </div>
      <div className="lg:h-[440px] flex items-center p-1">
        <Image
          src={
            "https://img.freepik.com/premium-photo/background-shopping_931878-79659.jpg"
          }
          width={1000}
          height={1000}
          alt="Header Phoyo"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
