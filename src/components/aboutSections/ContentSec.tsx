import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function ContentSec() {
  return (
    <div className="text-gray-800 px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl mx-auto">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold mb-6">Why choose us?</h2>
          <p className="mb-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
            mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in
            bibendum tincidunt.
          </p>
          <p className="mb-4 text-sm">
            Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel
            tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel
            sodales elit. Suspendisse potenti. Sed eget consequat nisi.
          </p>

          <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-8 mt-12">
            <div className="flex items-center">
              <FaCheck className="fill-orange-500 shrink-0 text-xl" />
              <h6 className="text-base text-indigo-500 font-semibold ml-4">Customization</h6>
            </div>
            <div className="flex items-center">
              <FaCheck className="fill-orange-500 shrink-0 text-xl" />
              <h6 className="text-base text-indigo-500 font-semibold ml-4">Security</h6>
            </div>
            <div className="flex items-center">
              <FaCheck className="fill-orange-500 shrink-0 text-xl" />
              <h6 className="text-base text-indigo-500 font-semibold ml-4">Support</h6>
            </div>
            <div className="flex items-center">
              <FaCheck className="fill-orange-500 shrink-0 text-xl" />
              <h6 className="text-base text-indigo-500 font-semibold ml-4">Performance</h6>
            </div>
            <div className="flex items-center">
              <FaCheck className="fill-orange-500 shrink-0 text-xl" />
              <h6 className="text-base text-indigo-500 font-semibold ml-4">Global Reach</h6>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={"https://readymadeui.com/management-img.webp"}
            width={800}
            height={800}
            alt="Placeholder Image"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
