"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AppDownloadModal({ isOpen, onClose }) {
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const webAppUrl =
    pathname === "/homeowners"
      ? "https://homeowner.nexahomeapp.com"
      : "https://expert.nexahomeapp.com";

  const appleStoreUrl =
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    "https://apps.apple.com/us/app/nexahome-app/id6769668269";

  const googlePlayUrl =
    process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ||
    "https://play.google.com/store/apps/details?id=com.dignitestudios.nexahome&pli=1";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#005864]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close dialog"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#005864]/10 text-primary font-semibold text-xs uppercase tracking-wider mb-2">
            Choose Platform
          </div>
          <h3 className="text-2xl font-bold font-heading text-gray-900">
            Get the NexaHome App
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Select your preferred way to use NexaHome
          </p>
        </div>

        {/* 3 Options */}
        <div className="flex flex-col gap-3">
          {/* Option 1: Apple App Store */}
          <a
            href={appleStoreUrl}
            target={appleStoreUrl.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-gray-900 bg-white hover:bg-gray-50/80 transition-all duration-200 shadow-sm hover:shadow"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {/* Apple Icon */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.69 1 .08 2.02-.51 2.59-1.18z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Download on
                </p>
                <p className="text-base font-bold text-gray-900">
                  Apple App Store
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              Download
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
            </span>
          </a>

          {/* Option 2: Google Play */}
          <a
            href={googlePlayUrl}
            target={googlePlayUrl.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-gray-900 bg-white hover:bg-gray-50/80 transition-all duration-200 shadow-sm hover:shadow"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {/* Google Play Triangle */}
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M3.18 23.5L13.5 12L3.18 0.5Z" fill="#4285F4" />
                  <path d="M17.5 15.97L5.5 23L13.5 12Z" fill="#34A853" />
                  <path
                    d="M20.5 10.5L17.5 15.97L13.5 12L17.5 8.03Z"
                    fill="#FBBC05"
                  />
                  <path d="M5.5 1L17.5 8.03L13.5 12Z" fill="#EA4335" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                  Get it on
                </p>
                <p className="text-base font-bold text-gray-900">
                  Google Play
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              Download
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
            </span>
          </a>

          {/* Option 3: Web App */}
          <a
            href={webAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-2xl border border-primary/20 hover:border-primary bg-primary/[0.03] hover:bg-primary/[0.07] transition-all duration-200 shadow-sm hover:shadow"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {/* Browser / Globe Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                  Use in Browser
                </p>
                <p className="text-base font-bold text-gray-900">
                  NexaHome Web App
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              Open
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
