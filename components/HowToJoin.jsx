import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: <img src="/step-1.png" alt="Create Account" />,
    title: "Create Your Account",
    desc: "Sign up in minutes with your email or social accounts.",
  },
  {
    number: "02",
    icon: <img src="/step-2.png" alt="Complete Profile" />,
    title: "Complete Your Profile",
    desc: "Add your details, services, and portfolio information.",
  },
  {
    number: "03",
    icon: <img src="/step-3.png" alt="Get Verified" />,
    title: "Get Verified",
    desc: "Complete our quick verification process for credibility.",
  },
  {
    number: "04",
    icon: <img src="/step-4.png" alt="Start Connecting" />,
    title: "Start Connecting",
    desc: "Begin receiving project requests from homeowners.",
  },
];

export default function HowToJoin() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            How To <span className="text-primary">Join</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Start Your Journey With NexaHome in Four Simple Steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="absolute top-0 right-0 text-5xl font-bold text-gray-50 font-heading leading-none">
                <img src={"/overlay-card.png"} className="w-28" alt="" srcset="" />
              </div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                  <img src="/join-card-dot.png" className="w-8 h-8" alt="" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#waitlist"
            className="bg-[#005864] text-white rounded-xl text-base px-8 py-4"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}
