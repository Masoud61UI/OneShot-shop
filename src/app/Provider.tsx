"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CardItem, IChildren } from "@/app/lib/definitions";
import { useLocalStorage } from "./lib/useLocalStorage";
import { logIn } from "@/services/api";
import { redirect } from "next/navigation";

interface ShoppingCartContexts {
  cartItems: CardItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handleLogIn: (username: string, password: string) => void;
  handleLogOut: () => void;
}

export const Providers = createContext({} as ShoppingCartContexts);

export const useShoppingCartContext = () => {
  return useContext(Providers);
};

export function Provider({ children }: IChildren) {
  const [cartItems, setCartItems] = useLocalStorage<CardItem[]>(
    "cartItems",
    []
  );

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

  const [isLogin, setIsLogin] = useState(false);

  const handleLogIn = (username: string, password: string) => {
    logIn(username, password).finally(() => {
      // "I used finally instead of then, because I didn't have an API."

      let token = "dfjkvlsnvvlkdfvldmfvvlfdnvldkfnvldfvfdhbgdughfuiehrifvuhs";
      localStorage.setItem("token", token);
      // And I know I have to save it in a cookie :)

      setIsLogin(true);
      redirect("/");
    });
  };

  const handleLogOut = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    redirect("/login");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <Providers.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        handleLogIn,
        handleLogOut,
      }}
    >
      {children}
    </Providers.Provider>
  );
}
