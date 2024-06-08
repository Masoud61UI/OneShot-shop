import Link from "next/link";
import FooterNav from "./@footerNav/FooterNav";
import FooterSocialMedia from "./@footerSocialMedia/FooterSocialMedia";

export default function Footer() {
  return (
    <footer className="bg-indigo-500 tracking-wide mt-24">
      <div className="pt-14 pb-20 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link
              href={"/"}
              className="flex items-center gap-1 text-white md:order-1"
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
              <h3 className="text-xl font-semibold">
                <span className="text-orange-400">One</span>Shot
              </h3>
            </Link>
            <p className="text-gray-300 text-sm mt-4">
              An online store with a 10-year history, offering a wide range of
              32 product categories and 825 diverse products at affordable
              prices with acceptable quality. We provide return guarantee, 24/7
              customer support, making us the ideal choice for an easy, fast,
              and secure shopping experience.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-white">
              Navigation
            </h4>
            <ul className="space-y-4">
              <FooterNav />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-white">Follow Us</h4>

            <ul className="flex gap-4">
              <FooterSocialMedia />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-8 text-white">
              Contact Us
            </h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">123 Street, City Name</p>
              <p className="text-gray-300 text-sm">contact@example.com</p>
              <p className="text-gray-300 text-sm">+1 234 567 890</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-5 bg-[#08355e]">
        <p className="text-gray-300 text-sm">
          © 2023
          <Link className="mx-1" href={"/"}>
            OneShot
          </Link>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
