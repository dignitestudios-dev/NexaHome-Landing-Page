"use client";

import { useState } from "react";
import { User, Mail, Building2, Phone, Check, Loader2, X } from "lucide-react";

const benefits = [
  "Visibility as a trusted expert on the platform",
  "Real job requests — not cold leads",
  "Access to exclusive launch incentives",
];

function formatUSPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function Waitlist() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const openSuccessModal = () => {
    setShowSuccessModal(true);
    requestAnimationFrame(() => setIsSuccessModalOpen(true));
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setTimeout(() => setShowSuccessModal(false), 220);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm({ ...form, phone: formatUSPhone(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userType: "expert" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setForm({ name: "", email: "", company: "", phone: "" });
      openSuccessModal();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div className="rounded-2xl p-8" data-aos="fade-up">
            <h2 className="section-title font-[500] mb-2">
              Join The <span className="text-black font-[900]">Waitlist</span>
            </h2>

            <p className="text-[#242424] font-semibold text-sm mb-6">
              Be Among The First To Experience The Future Of Home Improvement
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  {error}
                </div>
              )}

              {[
                {
                  name: "name",
                  label: "Full Name",
                  placeholder: "John Doe",
                  type: "text",
                  icon: User,
                },
                {
                  name: "email",
                  label: "Email Address",
                  placeholder: "john@example.com",
                  type: "email",
                  icon: Mail,
                },
                {
                  name: "company",
                  label: "Company / Business Name",
                  placeholder: "Company Name",
                  type: "text",
                  icon: Building2,
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  placeholder: "(555) 000-0000",
                  type: "tel",
                  icon: Phone,
                },
              ].map((field) => {
                const Icon = field.icon;

                return (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>

                    <div className="relative">
                      {/* Icon */}
                      <Icon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />

                      {/* Input */}
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        disabled={loading}
                        required={field.name === "name" || field.name === "email"}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#005864] rounded-lg text-white py-4 text-base mt-2 hover:bg-[#004a54] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Join Waitlist →"
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By joining, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
          {/* Benefits */}
          <div className="pt-4  bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">
              What You'll Get
            </h3>

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  {/* Dot */}
                  <div className="bg-[#0058641A] p-2 rounded-full">
                    <div className="w-2 h-2  bg-[#005864] rounded-full flex-shrink-0 " />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-200 ${
            isSuccessModalOpen ? "bg-black/45 opacity-100" : "bg-black/0 opacity-0"
          }`}
          onClick={closeSuccessModal}
        >
          <div
            className={`relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl transition-all duration-200 ${
              isSuccessModalOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeSuccessModal}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0058641A]">
                <Check className="h-8 w-8 text-[#005864]" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">You're on the list!</h3>
              <p className="text-gray-500">We'll be in touch soon with your early access details.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
