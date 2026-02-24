"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold font-heading text-gray-900">
              Nexa<span className="text-primary">Home</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Features", "How It Works", "About Us", "Contact Us"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-black hover:text-primary font-semibold text-sm transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#waitlist" className="btn-primary text-sm py-2 px-4">
              Join The Waitlist
            </Link>
            <Link href="/homeowners" className="btn-outline text-sm py-2 px-4">
              For Homeowners
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3 flex flex-col gap-3">
            {["Home", "Features", "How It Works", "About Us", "Contact Us"].map((item) => (
              <Link key={item} href="#" className="text-gray-600 hover:text-primary font-medium text-sm px-2">
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link href="#waitlist" className="btn-primary text-sm py-2 px-4 text-center">
                Join The Waitlist
              </Link>
              <Link href="/homeowners" className="btn-outline text-sm py-2 px-4 text-center">
                For Homeowners
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
