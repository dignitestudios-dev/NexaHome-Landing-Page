const benefits = [
  {
    image: "/one-image.png",
    title: "Reach homeowners ready to book",
  },
  {
    image: "/two-image.png",
    title: "Spend less time marketing, more time working",
  },
  {
    image: "/three-image.png",
    title: "Showcase your skills on a trusted platform",
  },
  {
    image: "/fourth-image.png",
    title: "Receive opportunities tailored to your services and area",
  },
];

export default function WhyPartner() {
  return (
    <section id="features" className="bg-gray-50 py-16 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-12">
          Why Partner With <span className="font-bold">NexaHome</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl overflow-hidden shadow-md group"
            >
              <div className="relative h-[375px] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold text-sm leading-snug">
                    {b.title}
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
