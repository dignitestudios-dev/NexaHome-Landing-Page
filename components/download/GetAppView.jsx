"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Configurable store URLs with fallbacks
const APPLE_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/us/app/nexahome-app/id6769668269";

const GOOGLE_PLAY_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ||
  "https://play.google.com/store/apps/details?id=com.dignitestudios.nexahome&pli=1";

export default function GetAppView() {
  const [device, setDevice] = useState(null); // 'ios' | 'android' | 'desktop'
  const [currentUrl, setCurrentUrl] = useState("https://nexahomeapp.com/get");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        setDevice("ios");
      } else if (/android/i.test(ua)) {
        setDevice("android");
      } else {
        setDevice("desktop");
      }
    }
  }, []);

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    currentUrl
  )}&bgcolor=FFFFFF&color=005864&margin=2`;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAFBFB] text-[#1D2939] antialiased">
      {/* Top Navigation Bar */}
      <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link href="/homeowners" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
            <Image
              src="/logo.png"
              alt="NexaHome"
              width={160}
              height={44}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <Link
            href="/homeowners"
            className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-50 flex items-center gap-1.5"
          >
            <span>Visit Website</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </header>

      {/* Main Download Section - Above the fold */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-14">
        <div className="max-w-4xl w-full">
          {/* Main Card */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_50px_rgba(0,88,100,0.07)] p-6 sm:p-12 relative overflow-hidden">
            {/* Subtle decorative background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#005864]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#F5A623]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid gap-8 lg:gap-12 items-center">
              {/* Left/Main Column: Badges, Title & Instant Download Buttons */}
              <div className="md:col-span-12 flex flex-col items-center  text-center md:text-left">
                {/* Pill Tag */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#005864]/10 text-primary font-semibold text-xs uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  NexaHome for Homeowners
                </div>

                {/* Direct Title - No sales copy */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-2">
                  Download the App
                </h1>

                <p className="text-sm sm:text-base text-gray-500 mb-6">
                  Available for iPhone and Android. Tap below to install.
                </p>

                {/* The Two Download Buttons - Immediately visible */}
                <div className="w-full flex flex-col sm:flex-row gap-3.5 sm:gap-4 items-stretch sm:items-center justify-center t">
                  {/* Apple App Store */}
                  <a
                    href={APPLE_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="apple-app-store-button"
                    className={`relative group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] ${
                      device === "ios"
                        ? "bg-[#111827] text-white ring-2 ring-primary ring-offset-2"
                        : "bg-[#111827] text-white hover:bg-black"
                    }`}
                  >
                    {device === "ios" && (
                      <span className="absolute -top-2.5 right-3 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                        Your Device
                      </span>
                    )}
                    {/* Apple Logo SVG */}
                    <svg
                      className="w-7 h-7 flex-shrink-0 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase tracking-wider text-gray-300 font-medium leading-none mb-1">
                        Download on the
                      </span>
                      <span className="text-base font-bold text-white tracking-tight leading-none">
                        App Store
                      </span>
                    </div>
                  </a>

                  {/* Google Play Store */}
                  <a
                    href={GOOGLE_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="google-play-store-button"
                    className={`relative group flex items-center gap-3.5 px-6 py-3.5 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] ${
                      device === "android"
                        ? "bg-[#111827] text-white ring-2 ring-primary ring-offset-2"
                        : "bg-[#111827] text-white hover:bg-black"
                    }`}
                  >
                    {device === "android" && (
                      <span className="absolute -top-2.5 right-3 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                        Your Device
                      </span>
                    )}
                    {/* Official Google Play Triangle SVG */}
                    <svg
                      className="w-6 h-6 flex-shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.338-.61-.84-.61-1.472V3.286c0-.632.258-1.134.61-1.472z"
                        fill="#4285F4"
                      />
                      <path
                        d="M17.186 8.608L13.793 12l3.393 3.392 3.844-2.183c1.037-.589 1.037-1.83 0-2.418l-3.844-2.183z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M13.793 12L3.61 1.814c.264-.253.647-.414 1.11-.414.479 0 .973.178 1.48.466l10.986 6.242L13.793 12z"
                        fill="#EA4335"
                      />
                      <path
                        d="M13.793 12l3.393 3.392-10.986 6.242c-.507.288-1.001.466-1.48.466-.463 0-.846-.161-1.11-.414L13.793 12z"
                        fill="#34A853"
                      />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] uppercase tracking-wider text-gray-300 font-medium leading-none mb-1">
                        GET IT ON
                      </span>
                      <span className="text-base font-bold text-white tracking-tight leading-none">
                        Google Play
                      </span>
                    </div>
                  </a>
                </div>

                {/* Subtle reassurance chips */}
                {/* <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-500 font-medium">
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#005864]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    100% Free Download
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#005864]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Verified Local Experts
                  </span>
                </div> */}
              </div>

              {/* Right Column: Desktop QR Code or App Visual */}
           
            </div>
          </div>
        </div>
      </main>

      {/* Minimal, clean footer */}
      <footer className="w-full border-t border-gray-200/80 bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} NexaHome. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link
              href="/home-owner/terms-and-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link
              href="/home-owner/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <a
              href="mailto:info@nexahomeapp.com"
              className="hover:text-primary transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
