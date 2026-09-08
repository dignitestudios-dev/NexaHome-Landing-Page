import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative mb-10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 ">
        <div className="absolute inset-0">
          <img
            src="/cta-banner.png"
            alt="Home garden background"
            className="w-full h-full rounded-[14px] object-cover"
          />
          <div className="absolute rounded-[14px] inset-0 bg-black/60"></div>
        </div>
        <div className="relative ml-auto max-w-md z-40" data-aos="fade-up">

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
            NOW LIVE
          </h2>
          <p className="text-white/70 mb-8  ">
            Grow Your Business With NexaHome. <br /> Join NexaHome as an Expert and connect with homeowners in Baton Rouge looking for trusted professionals for their next project.
          </p>
          <div className="flex gap-3  flex-wrap">
            <Link className="flex items-center gap-3 px-5 py-3 bg-[#F8F8F8] rounded-[10px] w-full sm:w-auto font-bold" href={"https://expert.nexahomeapp.com"} target="_blank">Go to the Web App</Link>

          </div>
        </div>
      </div>
    </section>
  );
}
