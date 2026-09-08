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
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.69 1 .08 2.02-.51 2.59-1.18z" />
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
                      <path d="M3.18 23.5L13.5 12L3.18 0.5Z" fill="#4285F4" />
                      <path d="M17.5 15.97L5.5 23L13.5 12Z" fill="#34A853" />
                      <path
                        d="M20.5 10.5L17.5 15.97L13.5 12L17.5 8.03Z"
                        fill="#FBBC05"
                      />
                      <path d="M5.5 1L17.5 8.03L13.5 12Z" fill="#EA4335" />
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
