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
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
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
