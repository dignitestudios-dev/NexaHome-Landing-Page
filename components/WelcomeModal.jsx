"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Home, Wrench, ArrowRight } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    setIsOpen(true);
    try {
      localStorage.removeItem("nexahome_role");
      sessionStorage.removeItem("nexahome_role");
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const handleSelectRole = (role) => {
    setIsOpen(false);
    if (role === "homeowner") {
      router.push("/homeowners");
    } else if (role === "expert") {
      router.push("/");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-9 shadow-2xl border border-gray-100 text-center relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="NexaHome" className="h-10 w-auto object-contain" />
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-gray-900 mb-2">
          Welcome to NexaHome
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Please select how you would like to continue:
        </p>

        {/* Two Clean Option Cards */}
        <div className="flex flex-col gap-3.5">
          {/* Homeowner Option */}
          <button
            type="button"
            onClick={() => handleSelectRole("homeowner")}
            className="group w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#005864] hover:bg-[#005864]/[0.03] shadow-sm hover:shadow transition-all duration-200 text-left cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#005864]/10 text-[#005864] flex items-center justify-center group-hover:bg-[#005864] group-hover:text-white transition-colors flex-shrink-0">
                <Home className="w-6 h-6" />
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#005864] transition-colors">
                Continue as Homeowner
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#005864] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
          </button>

          {/* Expert Option */}
          <button
            type="button"
            onClick={() => handleSelectRole("expert")}
            className="group w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white hover:border-[#005864] hover:bg-[#005864]/[0.03] shadow-sm hover:shadow transition-all duration-200 text-left cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#005864]/10 text-[#005864] flex items-center justify-center group-hover:bg-[#005864] group-hover:text-white transition-colors flex-shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <p className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#005864] transition-colors">
                Continue as Expert
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#005864] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
