import Link from "next/link";

const services = [
  { icon: "🔌", label: "Electrician" },
  { icon: "🎨", label: "Painters" },
  { icon: "🔧", label: "Plumbing" },
  { icon: "❄️", label: "HVAC" },
  { icon: "🌿", label: "Landscaping" },
  { icon: "🏗️", label: "Build & Reno" },
  { icon: "🧹", label: "Cleaning" },
  { icon: "➕", label: "View All" },
];

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="section-title text-4xl md:text-5xl leading-tight mb-4">
              Welcome to <span className="font-bold">NexaHome</span>
            </h1>
            <p className="text-lg font-semibold text-gray-700 mb-3">
              Connect with Homeowners Who Are Ready to Hire
            </p>
            <p className="text-[#242424] text-[14px] mb-8 leading-relaxed">
              NexaHome is not a lead-submission platform, it's a trusted network designed for
              high-quality experts and work opportunities — not noise. We match you with
              homeowners actively looking for services in your area and expertise.
            </p>

            <p className="text-sm font-semibold text-gray-500  tracking-wider mb-4">
              Popular Services:
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((s) => (
                <button
                  key={s.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary hover:bg-primary-light transition-all"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80"
              alt="Home improvement experts"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
