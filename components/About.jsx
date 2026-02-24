export default function About() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-4">
              About <span className="font-bold">NexaHome</span>
            </h2>
            <p className="text-sm font-semibold text-[#242424] uppercase tracking-wider mb-4">
              Built On Trust. Designed For Simplicity.
            </p>
            <p className="text-[#242424] text-[14px] font-medium mb-4 leading-relaxed">
              Homeowners spend a lot of time trying to find help for repairs, improvements, seasonal
              work, and unexpected issues. Most professionals find it even more challenging trying to
              find the right customers. NexaHome was created to change that.
            </p>
            <p className="text-[#242424] text-[14px] font-medium leading-relaxed">
              We believe finding reliable home help shouldn't feel like a full-time job. Our mission
              is to remove barriers built on trust, efficiency, and simplicity — for both homeowners
              and service providers.
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
