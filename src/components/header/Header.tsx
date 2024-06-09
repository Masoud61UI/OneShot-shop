"use client";

import Link from "next/link";
import Navbar from "../navbar/Navbar";
import Container from "../container/Container";
import { TbShoppingBag } from "react-icons/tb";
import { useShoppingCartContext } from "@/app/Provider";

export default function Header() {
  const { cartQty, handleLogOut, isLogin } = useShoppingCartContext();

  const isLoggedIn = isLogin;

  return (
    <nav className="bg-white shadow w-full mb-8">
      <Container>
        <div className="md:h-20 h-28 flex items-center justify-between flex-wrap md:flex-nowrap">
          <Link
            href={"/"}
            className="flex items-center gap-1 text-indigo-500 md:order-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <h3 className="text-xl font-semibold hidden sm:block">
              <span className="text-orange-500">One</span>Shot
            </h3>
          </Link>
          <div className="order-3 w-full md:w-auto md:order-2">
            <Navbar />
          </div>
          <div className="order-2 md:order-3 flex items-center gap-6">
            <Link className="relative" href={"/cart"}>
              <TbShoppingBag className="text-[21px] text-gray-700 hover:text-indigo-500 transition duration-180 ease-out hover:ease-in" />
              <span className="absolute w-4 h-4 text-[11px] text-gray-50 bg-orange-600 flex justify-center items-center rounded-full top-[-7px] right-[-8px]">
                {cartQty}
              </span>
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogOut}
                type="button"
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-lg transition duration-180 ease-out hover:ease-in text-sm font-medium"
              >
                Log Out
              </button>
            ) : (
              <Link
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-lg transition duration-180 ease-out hover:ease-in text-sm font-medium flex items-center gap-2"
                href="/login"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
