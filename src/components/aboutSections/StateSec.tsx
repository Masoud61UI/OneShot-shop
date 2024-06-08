import { stateItem } from "@/app/lib/definitions";

const stateItems: stateItem[] = [
  { title: "Total Users", amount: "1.2", unit: "M+" },
  { title: "OneShot Awards", amount: "320", unit: "+" },
  { title: "Satisfied customer", amount: "1.1", unit: "M+" },
  { title: "Hot Discounts", amount: "20", unit: "K+" },
];

export default function StateSec() {
  return (
    <div className="p-8 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333]">
      <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
        {stateItems.map((items) => {
          return (
            <div className="text-center">
              <h3 className="text-4xl font-extrabold">
                {items.amount}
                <span className="text-indigo-600">{items.unit}</span>
              </h3>
              <p className="text-gray-500 font-semibold mt-3">{items.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
