import Link from "next/link";
import { MenuItem } from "@/app/lib/definitions";

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/products" },
  { title: "About us", href: "/about" },
];

export default function FooterNav() {
  return (
    <>
      {menuItems.map((items) => {
        return (
          <Link
            key={items.title}
            href={items.href}
            className="text-gray-300 hover:text-white text-sm"
          >
            <li className="list-none mb-3">{items.title}</li>
          </Link>
        );
      })}
    </>
  );
}
