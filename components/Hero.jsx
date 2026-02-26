import Link from "next/link";

const services = [
  { icon: "/handyman.png", label: "Handyman" },
  { icon: "/painting.png", label: "Painters" },
  { icon: "/plumbing.png", label: "Plumbing" },
  { icon: "/electrical.png", label: "Electrical" },
  { icon: "/landscaping.png", label: "Landscaping" },
  { icon: "/audio-visual.png", label: "Audio & Visual" },
  { icon: "/cleaning.png", label: "Cleaning" },
  { icon: "", label: "View All" },
];

export default function Hero() {
  return (
    <section id="home" className="bg-white py-16 md:py-20">
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
              NexaHome is not a lead-submission platform, it's a trusted network
              designed for high-quality experts and work opportunities — not
              noise. We match you with homeowners actively looking for services
              in your area and expertise.
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
                  {s.icon ? (
                    <img src={s.icon} alt={s.label} className="w-4 h-4" />
                  ) : null}
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden ">
            <img
              src="/hero-container.png"
              alt="Home improvement experts"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
