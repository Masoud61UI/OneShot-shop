import Image from "next/image";

export default function ProductItem() {
  return (
    <div className="group cursor-pointer shadow-[0_8px_12px_-6px_rgba(0,0,0,0.1)] p-2 overflow-hidden border rounded-lg duration-200">
      <Image
        src="https://www.techcube.co.uk/wp-content/uploads/2017/09/cctv-camera.jpg"
        width={500}
        height={200}
        alt="CCTV Photo"
        className="rounded-lg"
      />
      <div className="px-2 my-4">
        <div className="flex justify-between">
          <h3 className="text-base text-gray-800 font-semibold">Heading</h3>
          <span className="text-base text-gray-800 font-semibold">55$</span>
        </div>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          auctor arcu, at fermentum dui. Maecenas
        </p>
        <button
          type="button"
          className="px-6 py-3 w-full mt-4 rounded-md text-gray-50 text-sm tracking-wider font-semibold border-none outline-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700"
        >
          View more
        </button>
      </div>
    </div>
  );
}
