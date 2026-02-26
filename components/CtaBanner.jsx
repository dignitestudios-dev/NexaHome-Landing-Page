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
        <div className="relative ml-auto max-w-md z-40">
          <p className="text-white  text-sm uppercase tracking-widest mb-2">
            Launching Soon
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
            Be The First To Know
          </h2>
          <p className="text-white/70 mb-8  ">
            Join our waitlist to be the first to experience a simplified,
            trusted approach to home care in your neighborhood.
          </p>
          <div className="flex gap-3  flex-wrap">
            <button>
              <img
                src="/google-play-store.png"
                alt="App Store Badge"
                className="w-34 h-11"
              />
            </button>
            <button>
              <img
                src="/app-store.png"
                alt="App Store Badge"
                className="w-34 h-11"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
