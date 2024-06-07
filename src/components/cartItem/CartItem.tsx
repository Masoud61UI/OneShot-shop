"use client";

import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/services/api";
import { Allproduct, CardItem } from "@/app/lib/definitions";
import ProductBtnRemove from "@/components/productQtyBtns/ProductBtnRemove";
import ProductQtyBtnIncrease from "@/components/productQtyBtns/ProductQtyBtnIncrease";
import ProductQtyBtnDecrease from "@/components/productQtyBtns/ProductQtyBtnDecrease";
import { useEffect, useState } from "react";

export default function CartItem({ id, qty }: CardItem) {
  const [product, setProduct] = useState<Allproduct>();

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data));
  }, []);

  return (
    <div className="flex items-start justify-between py-8">
      <div className="flex gap-4 sm:gap-6">
        <Link
          href={`/products/${id}`}
          className="flex items-center justify-center border border-indigo-300 p-2.5 rounded-md"
        >
          <Image
            src={product?.image ?? ""}
            width={170}
            height={110}
            alt="CCTV Photo"
            className="rounded-md w-[140px] h-[90px] object-contain"
          />
        </Link>

        <div>
          <Link href={`/products/${id}`}>
            <h3 className="text-sm sm:text-lg font-bold text-gray-800">
              {product?.title}
            </h3>
          </Link>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">CCTV</p>
          <h3 className="text-sm font-bold text-gray-800 mt-4">
            {" "}
            {product?.price}$
          </h3>

          <div className="flex items-center gap-3 mt-4">
            <h4 className="text-sm text-gray-800">Qty:</h4>
            <ProductQtyBtnDecrease product={product} />
            <span className="font-bold text-sm leading-[16px]">{qty}</span>
            <ProductQtyBtnIncrease product={product} />
          </div>
        </div>
      </div>

      <ProductBtnRemove product={product} />
    </div>
  );
}
