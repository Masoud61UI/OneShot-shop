import CartItem from "@/components/cartItem/CartItem";
import Container from "@/components/container/Container";

export default function page() {
  return (
    <div className="mt-14 max-w-6xl mx-auto">
      <Container>
        <h1 className="text-lg lg:text-3xl font-bold text-center text-gray-800 pb-8 border-b border-gray-200">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10 items-start mt-4">
          <div className="lg:col-span-2 divide-y">
            <CartItem />
            <CartItem />
          </div>
          <div className="bg-gradient-to-tr from-indigo-400 via-indigo-200 to-indigo-50 rounded p-6 lg:sticky top-0">
            <h2 className="text-lg font-bold text-gray-800">Order summary</h2>
            <ul className="text-gray-800 mt-6 space-y-3">
              <li className="flex flex-wrap gap-4 text-sm">
                Subtotal <span className="ml-auto font-bold">$44.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Shipping <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm font-bold">
                Total <span className="ml-auto">$52.00</span>
              </li>
            </ul>
            <button
              type="button"
              className="mt-6 text-sm px-6 py-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded"
            >
              Make Payment
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
