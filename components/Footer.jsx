import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-[1240px] mx-auto px-6 py-10">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="NexaHome Logo"
              width={230}
              height={70}
              priority
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-[43px] h-[43px] flex items-center justify-center rounded-full">
              <img src="/fb.png" alt="facebook" className="w-full h-full" />
            </div>

            <div className="w-[43px] h-[43px] flex items-center justify-center ">
              <img src="/insta.png" alt="instagram" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#DCDCDC] my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Side */}
          <div className="text-sm text-black">
            <p>Copyright © 2025 NexaHome.</p>
            <p>All rights reserved.</p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:items-end text-sm gap-2">
            <div className="flex gap-2">
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
              <span>/</span>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
            <p className="text-black/70">Support@NexaHome.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
