"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppDownloadModal from "./AppDownloadModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appModalOpen, setAppModalOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/homeowners" },
    { label: "How It Works", href: "/homeowners#how-it-works" },
    { label: "Features", href: "/homeowners#features" },
    { label: "About Us", href: "/homeowners/#about" },
  ];

  const ExpertLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "About Us", href: "/#about" },
    { label: "How It Works", href: "/#how-it-works" },
  ];

  const handleOpenModal = () => {
    setMenuOpen(false);
    setAppModalOpen(true);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link
              href={pathname === "/homeowners" ? "/homeowners" : "/"}
              className="flex items-center gap-2 group transition-opacity hover:opacity-95"
            >
              <img src="/logo.png" alt="NexaHome" className="w-36 h-auto" />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {pathname === "/homeowners"
                ? links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-black hover:text-[#005864] font-semibold text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))
                : ExpertLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-black hover:text-[#005864] font-semibold text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {pathname === "/" ? (
                <a
                  href="https://expert.nexahomeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary font-medium text-[16px] py-2 px-5 inline-flex items-center gap-2 shadow-sm hover:shadow transition-all"
                >
                  Go to the Web App
                </a>
              ) : (
                <button
                  type="button"
                  onClick={handleOpenModal}
                  className="btn-primary font-medium text-[16px] py-2 px-5 inline-flex items-center gap-2 shadow-sm hover:shadow transition-all"
                >
                  <span>Get the App</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}

              {pathname !== "/homeowners" ? (
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
              aria-label="Toggle menu"
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
              {(pathname === "/homeowners" ? links : ExpertLinks).map((item) => (
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
                  href={pathname !== "/homeowners" ? "/homeowners" : "/"}
                  className="btn-outline text-sm py-2 px-4 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  {pathname !== "/homeowners" ? "For Homeowners" : "For Experts"}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Pop-up Modal with 3 Options: Apple, Google, Web App */}
      <AppDownloadModal
        isOpen={appModalOpen}
        onClose={() => setAppModalOpen(false)}
      />
    </>
  );
}
