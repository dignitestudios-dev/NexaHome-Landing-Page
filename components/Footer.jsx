"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Use homeowner policy links on /homeowners, expert links everywhere else
  const isHomeowner = pathname?.startsWith("/homeowners");

  const policyLinks = isHomeowner
    ? {
      terms: "/home-owner/terms-and-conditions",
      privacy: "/home-owner/privacy-policy",
      refund: "/home-owner/refund-policy",
    }
    : {
      terms: "/experts/terms-and-conditions",
      privacy: "/experts/privacy-policy",
      refund: "/experts/refund-policy",
    };

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
            <a href="https://www.facebook.com/profile.php?id=61572028496243" target="_blank" rel="noopener noreferrer" className="w-[43px] h-[43px] flex items-center justify-center rounded-full">
              <img src="/fb.png" alt="facebook" className="w-full h-full" />
            </a>

            <a href="https://www.instagram.com/nexahomeapp/" target="_blank" rel="noopener noreferrer" className="w-[43px] h-[43px] flex items-center justify-center ">
              <img src="/insta.png" alt="instagram" className="w-full h-full" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#DCDCDC] my-8"></div>

        {/* Bottom Row */}
        <div className="flex px-2 flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left Side */}
          <div className="text-sm text-black">
            <p>Copyright © {currentYear} NexaHome.</p>
            <p>All rights reserved.</p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:items-end text-sm gap-2">
            <div className="flex   flex-wrap gap-2">
              <Link href="/partner/terms-and-conditions" className="hover:underline">
                Partner Terms & Conditions
              </Link>
              <span> / </span>
              <Link href="/partner/privacy-policy" className="hover:underline">
                Partner Privacy Policy
              </Link>
              |
              <Link href={policyLinks.terms} className="hover:underline">
                Terms &amp; Conditions
              </Link>
              <span>/</span>
              <Link href={policyLinks.privacy} className="hover:underline">
                Privacy Policy
              </Link>
              <span>/</span>
              <Link href={policyLinks.refund} className="hover:underline">
                Refund Policy
              </Link>
            </div>
            <Link href="mailto:info@nexahomeapp.com" className="text-black/70">info@nexahomeapp.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
