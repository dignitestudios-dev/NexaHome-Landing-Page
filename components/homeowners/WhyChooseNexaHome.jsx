const features = [
  {
    icon: <img src="choose1.png" alt="" srcset="" />,
    title: "Identity-Verified Experts",
    desc: "Every expert completes identity verification before joining, so you're connecting with real, vetted individuals.",
  },
  {
    icon: <img src="choose2.png" alt="" srcset="" />,
    title: "Local Experts Near You",
    desc: "Connect with experts who serve your Baton Rouge neighborhood.",
  },
  {
    icon: <img src="choose3.png" alt="" srcset="" />,
    title: "Your Privacy Protected",
    desc: "Your contact details stay private until you choose to connect.",
  },
  {
    icon: <img src="choose4.png" alt="" srcset="" />,
    title: "One Request, Multiple Experts",
    desc: "Post once and reach several local experts at the same time — no calling around.",
  },
  {
    icon: <img src="choose5.png" alt="" srcset="" />,
    title: "You're in Control",
    desc: "You choose which experts to contact and who to hire. No pressure, no obligation.",
  },
  {
    icon: <img src="choose6.png" alt="" srcset="" />,
    title: "Always Free for Homeowners",
    desc: "No platform fees. NexaHome is completely free to use.",
  },
];

export default function WhyChooseNexaHome() {
  return (
    <section className="bg-gray-50 py-16 md:py-24" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="section-title">
            Why Choose <span className="font-bold">NexaHome</span>
          </h2>
          <p className="text-gray-500 mt-3">
            The Simpler, Smarter Way to Connect with Home Improvement Experts
          </p>
        </div>

        <div className="grid relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, index) => (
            <div
              key={f.title}
              className="relative why-choose-card p-6 hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
