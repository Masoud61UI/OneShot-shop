"use client";

import { useShoppingCartContext } from "@/app/ShoppingCartProvider";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ProductBtnRemove({ product }: any) {
  const { handleRemoveProduct } = useShoppingCartContext();

  const handleRemoveProductCard = () => {
    handleRemoveProduct(product.id);
  };

  return (
    <>
      <RiDeleteBin5Line
        onClick={handleRemoveProductCard}
        className="text-xl fill-red-500 inline cursor-pointer"
      />
    </>
  );
}
