export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80"
          alt="Home garden background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-right">
        <p className="text-white/80 text-sm uppercase tracking-widest mb-2">Launching Soon</p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
          Be The First To Know
        </h2>
        <p className="text-white/70 mb-8 max-w-md ml-auto">
          Join our waitlist to be the first to experience a simplified, trusted approach to home care in your neighborhood.
        </p>
        <div className="flex gap-3 justify-end flex-wrap">
          <a
            href="#"
            className="flex items-center gap-2 bg-black/80 hover:bg-black text-white px-5 py-3 rounded-xl border border-white/20 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.886l1.443.834a1 1 0 010 1.69l-1.442.834-2.582-2.582 2.581-2.776zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-black/80 hover:bg-black text-white px-5 py-3 rounded-xl border border-white/20 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-70">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
