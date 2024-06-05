import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CardItem } from "@/app/lib/definitions";

export default function CartItem({ id, qty }: CardItem) {
  return (
    <div className="flex items-start justify-between py-6">
      <div className="flex gap-4 sm:gap-6">
        <div className="bg-gray-100 p-2.5 rounded-md">
          <Image
            src="https://www.techcube.co.uk/wp-content/uploads/2017/09/cctv-camera.jpg"
            width={160}
            height={100}
            alt="CCTV Photo"
            className="rounded-md"
          />
        </div>

        <div>
          <h3 className="text-sm sm:text-lg font-bold text-gray-800">
            Product Title
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">CCTV</p>
          <h3 className="text-sm font-bold text-gray-800 mt-4">$18.5</h3>

          <div className="flex items-center gap-3 mt-4">
            <h4 className="text-sm text-gray-800">Qty:</h4>
            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 border border-indigo-500 outline-none rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 fill-indigo-500"
                viewBox="0 0 124 124"
              >
                <path
                  d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
            <span className="font-bold text-sm leading-[16px]">{qty}</span>
            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2 fill-white"
                viewBox="0 0 42 42"
              >
                <path
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <RiDeleteBin5Line className="text-xl fill-red-500 inline cursor-pointer" />
    </div>
  );
}
