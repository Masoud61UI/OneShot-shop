"use client";

import { useShoppingCartContext } from "@/app/Provider";

export default function ProductQtyBtnDecrease({ product }: any) {
  const { handleDecreaseProductQty } = useShoppingCartContext();

  const handleDecreaseToCart = () => {
    handleDecreaseProductQty(product.id);
  };

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center w-5 h-5 border border-indigo-500 outline-none rounded-full"
        onClick={handleDecreaseToCart}
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
    </>
  );
}
