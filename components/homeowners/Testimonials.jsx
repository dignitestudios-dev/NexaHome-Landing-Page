const testimonials = [
  {
    text: "NexaHome connected me with an amazing contractor for my kitchen remodel. The entire process was seamless, and I saved 30% compared to traditional quotes. Highly recommend!",
    name: "Sarah Mitchell",
    role: "Homeowner, San Francisco",
    service: "Kitchen Remodel",
    rating: 5,
    avatar: "SM",
  },
  {
    text: "Finding a reliable electrician used to be a nightmare. With NexaHome, I found a licensed expert within minutes. The quality of work exceeded my expectations.",
    name: "Michael Chen",
    role: "Homeowner, Los Angeles",
    service: "Electrical Work",
    rating: 5,
    avatar: "MC",
  },
  {
    text: "The landscaping team I hired through NexaHome transformed my backyard into an oasis. The platform made it easy to compare pros and read real reviews.",
    name: "Emily Rodriguez",
    role: "Homeowner, Austin",
    service: "Landscaping",
    rating: 5,
    avatar: "ER",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Loved by <span className="font-bold">Homeowners</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Join thousands of satisfied homeowners who found their perfect experts on NexaHome
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow border border-gray-100">
              <StarRating count={t.rating} />
              <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
                <span className="ml-auto text-xs text-primary font-medium bg-primary-light px-2 py-1 rounded-full">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
