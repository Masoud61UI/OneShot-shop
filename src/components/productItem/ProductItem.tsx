import { Allproduct } from "@/app/lib/definitions";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

export default function ProductItem({
  title,
  price,
  description,
  image,
}: Allproduct) {
  return (
    <div className="group cursor-pointer shadow-[0_8px_12px_-6px_rgba(0,0,0,0.1)] p-2 overflow-hidden border rounded-lg duration-200 mb-4">
      <Image
        src={image}
        width={500}
        height={200}
        alt="CCTV Photo"
        className="rounded-lg w-[480px] h-[190px] object-contain"
      />
      <div className="px-2 my-4">
        <div className="flex justify-between gap-2">
          <h3 className="text-base text-gray-800 font-semibold">{title}</h3>
          <span className="text-base text-orange-600 font-semibold">
            {price}$
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{description}</p>
        <button
          type="button"
          className="px-6 py-3 w-full mt-4 flex items-center justify-center gap-1 rounded-md border border-indigo-500 text-indigo-500 text-sm tracking-wider font-semibold outline-none bg-indigo-50 hover:bg-indigo-500 hover:text-gray-50 active:bg-indigo-600 transition duration-180 ease-out hover:ease-in"
        >
          View more
          <FaAngleRight/>
        </button>
      </div>
    </div>
  );
}
