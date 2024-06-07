import ShoppingCart from "@/components/shoppingCart/ShoppingCart";

export default function page() {
  return (
    <div className="max-w-6xl mx-auto mt-14">
      <h1 className="text-lg lg:text-3xl font-bold text-center text-gray-800 pb-8 border-b border-gray-200">
        Shopping Cart
      </h1>
      <ShoppingCart />
    </div>
  );
}
