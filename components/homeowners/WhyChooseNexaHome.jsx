const features = [
  {
    icon: <img src="choose1.png" alt="" srcset="" />,
    title: "Verified Experts",
    desc: "Every expert is thoroughly vetted with background checks and verification.",
  },
  {
    icon: <img src="choose2.png" alt="" srcset="" />,
    title: "Instant Matching",
    desc: "Get matched with qualified experts in minutes, not days.",
  },
  {
    icon: <img src="choose3.png" alt="" srcset="" />,
    title: "Top-Rated Service",
    desc: "Read verified reviews from real homeowners just like you.",
  },
  {
    icon: <img src="choose4.png" alt="" srcset="" />,
    title: "Save Time & Money",
    desc: "Compare multiple quotes and book services all in one place.",
  },
  {
    icon: <img src="choose5.png" alt="" srcset="" />,
    title: "Work You Can Rely On",
    desc: "Quality-focused experts delivering dependable results.",
  },
  {
    icon: <img src="choose6.png" alt="" srcset="" />,
    title: "Transparent Pricing",
    desc: "No platform fees — Use the platform at no cost.",
  },
];

export default function WhyChooseNexaHome() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Why Choose <span className="font-bold">NexaHome</span>
          </h2>
          <p className="text-gray-500 mt-3">
            The Simpler, Smarter Way to Connect with Home Improvement Experts
          </p>
        </div>

        <div className="grid relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative why-choose-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-primary mb-4">
                {f.icon}
              </div>
              <div className="absolute top-0 right-0 text-5xl font-bold text-gray-50 font-heading leading-none">
                <img
                  src={"/overlay-card.png"}
                  className="w-28"
                  alt=""
                  srcset=""
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
