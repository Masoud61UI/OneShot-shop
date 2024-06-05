"use client";

import { createContext, useState, useContext } from "react";
import { CardItem, IChildren } from "@/app/lib/definitions";

interface ShoppingCartContexts {
  cartItems: CardItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContexts);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: IChildren) {
  const [cartItems, setCartItems] = useState<CardItem[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id == id);

      if (selectedItem == null) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id == id);

      if (selectedItem?.qty === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItem) => currentItem.filter((item) => item.id != id));
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
