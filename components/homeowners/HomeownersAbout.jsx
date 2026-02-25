export default function HomeownersAbout() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="section-title mb-4">
              About <span className="font-bold">NexaHome</span>
            </h2>
            <p className="text-[#242424] text-sm font-medium mb-4 leading-relaxed">
              NexaHome is redefining how people care for their property. We've
              built a simplified platform that takes the complexity out of
              finding, hiring, and managing home projects — making the process
              more transparent, efficient, and dependable.
            </p>
            <p className="text-[#242424] text-sm font-medium mb-4 leading-relaxed">
              Our mission is to empower homeowners with the confidence to make
              their house a home. By providing access to a network of trusted,
              carefully vetted experts, NexaHome helps connect you with skilled
              providers committed to delivering quality workmanship and reliable
              service for every job.
            </p>
            <p className="text-[#242424] text-sm font-medium leading-relaxed">
              From pool cleaning to urgent repairs, NexaHome is your partner in
              bringing your vision to life — simply and seamlessly.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/about-nexa.png"
              alt="Pool cleaning expert"
              className="w-full h-[380px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
