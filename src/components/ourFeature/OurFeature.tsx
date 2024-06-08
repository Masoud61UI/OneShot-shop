import { CgShoppingCart } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { featureItem } from "@/app/lib/definitions";

const featureItems: featureItem[] = [
  {
    title: "Easy Shopping",
    desc: "Find what you need quickly and easily.",
    icon: CgShoppingCart,
  },
  {
    title: "Support",
    desc: "24/7 customer support for all your inquiries.",
    icon: BiSupport,
  },
  {
    title: "Competitive Prices",
    desc: "Experience the best prices in town.",
    icon: RiMoneyDollarCircleLine,
  },
  {
    title: "Convenient Payment",
    desc: "A seamless and secure checkout experience.",
    icon: MdPayment,
  },
];

export default function OurFeature() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 px-4 my-16">
      {featureItems.map((items) => {
        const ItemsIcon = items.icon;
        return (
          <div key={items.title} className="bg-gray-100 p-6 rounded-md">
            <div className="w-12 h-12 flex items-center justify-center mb-4 text-orange-500 bg-white rounded-md">
              <ItemsIcon className="text-[26px]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#333]">
              {items.title}
            </h3>
            <p className="text-sm text-[#333]">{items.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
