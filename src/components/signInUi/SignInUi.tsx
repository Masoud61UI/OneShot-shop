"use client";

import { useShoppingCartContext } from "@/app/Provider";
import Container from "@/components/container/Container";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import Input from "@/components/inputs/Input";
import Link from "next/link";

export default function SignInUi() {
  const { handleLogIn, isLogin } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const isLoggedIn = isLogin;

  return isLoggedIn ? (
    redirect("/")
  ) : (
    <>
      <Container>
        <div>
          <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
            <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
              <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                <form className="space-y-6">
                  <div className="mb-10">
                    <h3 className="text-3xl text-gray-800 font-extrabold">
                      Sign in
                    </h3>
                    <p className="text-sm mt-4 text-gray-500">
                      Sign in to your account and explore a world of
                      possibilities. Your journey begins here.
                    </p>
                  </div>

                  <Input
                    label="User name"
                    name="username"
                    changehandle={handleChangeInputs}
                    type="text"
                    placeholder="Enter user name"
                    value={user.username}
                  />

                  <Input
                    label="Password"
                    name="password"
                    changehandle={handleChangeInputs}
                    type="password"
                    placeholder="Enter password"
                    value={user.password}
                  />

                  <div className="!mt-10">
                    <button
                      onClick={() => handleLogIn(user.username, user.password)}
                      type="button"
                      className="w-full shadow-xl py-3 px-4 text-sm font-semibold rounded text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                    >
                      Log in
                    </button>
                  </div>
                  <p className="text-sm !mt-10 text-center">
                    Don't have an account{" "}
                    <Link
                      href={"/register"}
                      className="text-indigo-500 hover:underline ml-1 whitespace-nowrap"
                    >
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
              <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
                <Image
                  src={"https://readymadeui.com/login-image.webp"}
                  width={800}
                  height={800}
                  alt="SignIn Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
