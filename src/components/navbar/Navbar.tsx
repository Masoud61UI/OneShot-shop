"use client";

import { MenuItem } from "@/app/lib/definitions";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "About us", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <ul className="flex justify-between">
        {menuItems.map((items) => {
          return (
            <Link
              key={items.title}
              href={items.href}
              className={`transition duration-180 ease-out text-gray-700 hover:ease-in hover:text-indigo-400  ${
                pathname === items.href ? "text-indigo-500" : "text-gray-700"
              }`}
            >
              <li className="list-none text-sm font-semibold md:px-4 md:py-2">
                {items.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
