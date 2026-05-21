"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto  py-10">
        {/* Top Row */}
        <div className="flex items-center justify-between">
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
            <p>Copyright © {currentYear} NexaHome.</p>
            <p>All rights reserved.</p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:items-end text-sm gap-2">
            <div className="flex gap-2">
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
              <span>/</span>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
            <Link href="mailto:info@nexahomeapp.com" className="text-black/70">info@nexahomeapp.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
