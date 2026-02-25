"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const serviceCategories = [
  { icon: "/painting.png", label: "Painters", count: "892 pros" },
  { icon: "/handyman.png", label: "Handyman", count: "1,234 pros" },
  { icon: "/plumbing.png", label: "Plumbing", count: "1,023 pros" },
  { icon: "/electrical.png", label: "Electrical", count: "445 pros" },
  { icon: "/landscaping.png", label: "Landscaping", count: "678 pros" },
  { icon: "/audio-visual.png", label: "Audio & Visual", count: "567 pros" },
  { icon: "/cleaning.png", label: "House Cleaning", count: "923 pros" },
];

export default function HomeownersHero() {
  const [query, setQuery] = useState("");
  const [zip, setZip] = useState("");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="section-title text-4xl md:text-5xl leading-tight mb-3">
              Welcome to <span className="font-bold">NexaHome</span>
            </h1>

            <p className="text-lg font-semibold text-gray-700 mb-3">
              Find Trusted Help for Your Home — Without the Stress
            </p>

            <p className="text-[#242424] text-sm mb-8 leading-relaxed">
              You did the hard part — you found the house. Now, let NexaHome
              help you take care of it. Skip the stress of DIY gone wrong and
              the "who do I call?" panic. We provide a hand-picked list of
              vetted experts to support every project, repair, and routine
              maintenance — so your home's next chapter starts with confidence.
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
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/home-owner.png"
              alt="Beautiful home"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Popular Services */}
        <div className="mt-12 relative">
          <p className="text-sm font-bold uppercase tracking-wider mb-6">
            Popular Home Services
          </p>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-14 top-2/4 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollRef}
            className="flex scrollbar-hide gap-6 overflow-x-auto scroll-smooth"
          >
            {serviceCategories.map((s) => (
              <div
                key={s.label}
                className="min-w-[240px] rounded-2xl p-6 border border-gray-200 hover:shadow-md transition cursor-pointer"
              >
                <img src={s.icon} alt={s.label} className="w-10 h-10 mb-4" />

                <p className="text-base font-semibold text-gray-800">
                  {s.label}
                </p>

                <p className="text-sm text-gray-500 mt-1">{s.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
