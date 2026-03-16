export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title font-[500] mb-4">
              About <span className="font-bold">NexaHome</span>
            </h2>
            <p className="text-sm font-semibold text-[#242424] capitalize tracking-wider mb-4">
              Built On Trust. Designed For Simplicity.
            </p>
            <p className="text-[#242424] text-[14px] font-medium mb-4 leading-relaxed">
              Homeowners often struggle to find reliable experts for repairs,
              improvements, and ongoing home projects. At the same time, many
              service providers spend too much time chasing leads that go
              nowhere.
            </p>
            <p className="text-[#242424] text-[14px] font-medium leading-relaxed">
              NexaHome was created to make that connection simpler. Our platform
              connects qualified experts with homeowners who are actively
              looking to hire — helping you discover real projects, connect
              directly with customers, and focus on growing your business.
            </p>
          </div>

          {/* Right - Dashboard Mockup */}
          {/* Right - Laptop Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/Laptop.png"
                alt="Laptop"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Optional soft background glow */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
