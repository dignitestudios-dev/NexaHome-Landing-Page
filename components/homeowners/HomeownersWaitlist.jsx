"use client";
import { useState } from "react";
import { User, Mail, Phone, Check } from "lucide-react";

const benefits = [
  "Early access to the NexaHome platform.",
  "Instant connections to experts who actually call you back.",
  "First pick of our highest-rated, trusted experts.",
  "Total confidence that every job is handled by an expert.",
];

export default function HomeownersWaitlist() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="waitlist" className="bg-[#F9FAFB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="rounded-2xl p-8">
            <h2 className="section-title mb-2">
              Join The <span className="font-bold">Waitlist</span>
            </h2>
            <p className="text-[#242424] font-semibold text-sm mb-6">
              Be Among The First To Experience The Future Of Home Improvement
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the list!</h3>
                <p className="text-gray-500">We'll be in touch soon with your early access details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Full Name", placeholder: "John Doe", type: "text", icon: User },
                  { name: "email", label: "Email Address", placeholder: "john@example.com", type: "email", icon: Mail },
                  { name: "phone", label: "Phone Number", placeholder: "+1 (555) 123-4567", type: "tel", icon: Phone },
                ].map((field) => {
                  const Icon = field.icon;
                  return (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                      <div className="relative">
                        <Icon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.name !== "phone"}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  );
                })}
                <button type="submit" className="w-full bg-[#005864] rounded-lg text-white py-4 text-base mt-2 hover:bg-[#004a54] transition-colors">
                  Join Waitlist →
                </button>
                <p className="text-xs text-gray-400 text-center">
                  By joining, you agree to our{" "}
                  <a href="#" className="underline">Terms of Service</a> and{" "}
                  <a href="#" className="underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>

          {/* Benefits */}
          <div className="pt-4 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">What You'll Get</h3>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="bg-[#0058641A] p-2 rounded-full flex-shrink-0">
                    <div className="w-2 h-2 bg-[#005864] rounded-full" />
                  </div>
                  <span className="text-gray-700 leading-relaxed text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
