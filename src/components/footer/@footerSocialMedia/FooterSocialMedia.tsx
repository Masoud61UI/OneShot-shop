import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const iconItems = [
  { icon: FaFacebookSquare, href: "#" },
  { icon: FaLinkedin, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaTwitter, href: "#" },
];

export default function FooterSocialMedia() {
  return (
    <>
      {iconItems.map((items: any) => {
        const ItemsIcon = items.icon;
        return (
          <Link
            key={items.icon}
            href={items.href}
            className="text-gray-300 hover:text-white text-sm"
          >
            <ItemsIcon className="list-none mb-3 text-lg">
              {items.icon}
            </ItemsIcon>
          </Link>
        );
      })}
    </>
  );
}
