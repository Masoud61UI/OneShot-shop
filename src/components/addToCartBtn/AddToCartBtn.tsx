"use client";

import { useShoppingCartContext } from "@/app/ShoppingCartProvider";

export default function AddToCartBtn({ product }: any) {
  const { handleIncreaseProductQty } = useShoppingCartContext();

  const handleAddToCart = () => {
    handleIncreaseProductQty(product.id);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleAddToCart}
        className="px-6 py-3 w-60 rounded-lg text-gray-50 text-base tracking-wider font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-indigo-700 to-indigo-300"
      >
        Add to cart
      </button>
    </>
  );
}
