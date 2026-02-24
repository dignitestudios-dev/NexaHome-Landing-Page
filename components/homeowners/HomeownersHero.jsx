"use client";
import { useState } from "react";
import Link from "next/link";

const serviceCategories = [
  { icon: "🌿", label: "Landscaping", count: "678 pros" },
  { icon: "⚡", label: "Electrical", count: "445 pros" },
  { icon: "🎨", label: "Painters", count: "892 pros" },
  { icon: "🔧", label: "Handyman", count: "1,234 pros" },
  { icon: "📺", label: "Audio & Visual", count: "567 pros" },
  { icon: "🧹", label: "House Cleaning", count: "923 pros" },
];

export default function HomeownersHero() {
  const [query, setQuery] = useState("");
  const [zip, setZip] = useState("");

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span>⭐</span> Trusted by 500K+ homeowners
            </div>
            <h1 className="section-title text-4xl md:text-5xl leading-tight mb-3">
              Welcome to <span className="font-bold">NexaHome</span>
            </h1>
            <p className="text-lg font-semibold text-gray-700 mb-3">
              Find Trusted Help for Your Home — Without the Stress
            </p>
            <p className="text-[#242424] text-sm mb-8 leading-relaxed">
              You did the hard part — you found the house. Now, let NexaHome help you take care of it. Skip the stress of DIY gone wrong and the "who do I call?" panic. We provide a hand-picked list of vetted experts to support every project, repair, and routine maintenance — so your home's next chapter starts with confidence.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2 flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="text"
                placeholder="What service do you need?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="text"
                placeholder="ZIP code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full sm:w-28 px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-[#005864] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#004a54] transition-colors whitespace-nowrap">
                Search
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-lg font-bold text-gray-900">10K+</p>
                <p className="text-xs text-gray-500">Verified Pros</p>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div>
                <p className="text-lg font-bold text-gray-900">4.9/5</p>
                <p className="text-xs text-gray-500">(25K reviews)</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
                alt="Beautiful home"
                className="w-full h-[450px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-lg">🏡</div>
              <div>
                <p className="text-xs font-bold text-gray-900">Your Dream Home</p>
                <p className="text-xs text-gray-500">Experts ready to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="mt-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
            Popular Home Services
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {serviceCategories.map((s) => (
              <div key={s.label} className="bg-gray-50 hover:bg-primary-light hover:border-primary border border-gray-100 rounded-2xl p-4 text-center cursor-pointer transition-all group">
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="text-xs font-semibold text-gray-700 group-hover:text-primary">{s.label}</p>
                <p className="text-xs text-gray-400 mt-1">{s.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
