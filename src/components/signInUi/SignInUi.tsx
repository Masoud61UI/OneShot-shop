"use client";

import { useShoppingCartContext } from "@/app/ShoppingCartProvider";
import Container from "@/components/container/Container";
import { redirect } from "next/navigation";
import { useState } from "react";

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
        <div className="bg-gray-100 p-12">
          <input
            onChange={handleChangeInputs}
            type="text"
            placeholder="Enter username"
            name="username"
            value={user.username}
          />
          <input
            onChange={handleChangeInputs}
            type="password"
            placeholder="Enter password"
            name="password"
            value={user.password}
          />
          <button onClick={() => handleLogIn(user.username, user.password)}>
            Log in
          </button>
        </div>
      </Container>
    </>
  );
}
