const steps = [
  {
    number: "1",
    title: "Share Your Need",
    desc: "Tell us what you need - a repair, project, upgrade, or general home help. Add photos or video for clarity.",
    image: "/card-1.png",
  },
  {
    number: "2",
    title: "Get Matched Instantly",
    desc: "We review your request and connect you with a curated list of qualified, vetted Home Experts who serve your area.",
    image: "/card-2.png",
  },
  {
    number: "3",
    title: "Start the Job With Confidence",
    desc: "Your chosen expert reaches out directly to confirm details and schedule the work.",
    image: "/card-3.png",
  },
];

export default function HomeownersHowItWorks() {
  return (
    <section className="bg-white py-16 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            How <span className="font-bold">NexaHome</span> Works
          </h2>
          <p className="text-gray-500 mt-3">
            Get Matched with Experts — Three Simple Steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl overflow-hidden shadow-md group"
            >
              <div className="relative h-[434px] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-sm mb-1">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-white/80 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
