const steps = [
  {
    number: "1",
    title: "Share Your Need",
    desc: "Tell us what you need - a repair, project, upgrade, or general home help. Add photos or video for clarity.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
  },
  {
    number: "2",
    title: "Get Matched Instantly",
    desc: "We review your request and connect you with a curated list of qualified, vetted Home Experts who serve your area.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    number: "3",
    title: "Start the Job With Confidence",
    desc: "Your chosen expert reaches out directly to confirm details and schedule the work.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
];

export default function HomeownersHowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            How <span className="font-bold">NexaHome</span> Works
          </h2>
          <p className="text-gray-500 mt-3">Get Matched with Experts — Three Simple Steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl overflow-hidden shadow-md group">
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Step number */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{step.number}</span>
                </div>
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-sm mb-1">{step.number}. {step.title}</h3>
                  <p className="text-white/80 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
