"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "/homeowners#features" },
    { label: "How It Works", href: "/homeowners#how-it-works" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#waitlist" },
  ];
  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="w-34 h-14" srcset="" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black hover:text-[#005864] font-semibold text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#waitlist"
              className="btn-primary  font-normal text-[16px] py-2 px-4"
            >
              Join The Waitlist
            </Link>
            {pathname != "/homeowners" ? (
              <Link
                href="/homeowners"
                className="btn-outline font-normal text-[16px] py-2 px-4"
              >
                For Homeowners
              </Link>
            ) : (
              <Link
                href="/"
                className="btn-outline font-normal text-[16px] py-2 px-4"
              >
                For Experts
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3 flex flex-col gap-3">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary font-medium text-sm px-2"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="#waitlist"
                className="btn-primary text-sm py-2 px-4 text-center"
              >
                Join The Waitlist
              </Link>
              <Link
                href="/homeowners"
                className="btn-outline text-sm py-2 px-4 text-center"
              >
                For Homeowners
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
