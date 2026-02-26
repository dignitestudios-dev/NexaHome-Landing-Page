export default function HomeOwnerCtaBanner() {
  return (
    <section className="relative mb-10 px-4">
      <div className="relative max-w-7xl h-[640px] mx-auto overflow-hidden rounded-[24px]">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url('/home-owner-banner.png')] bg-cover bg-center" />

        {/* Content Wrapper */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-16 py-16 lg:py-24 gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl text-white">
            <p className="font-semibold text-sm sm:text-base mb-3">
              Launching Soon
            </p>

            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Be The First to Know
            </h2>

            <p className="text-sm sm:text-base mb-10">
              Download our app and get instant access to thousands of trusted
              home care experts in your neighborhood.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              {/* Google Play */}
              <button className="flex items-center gap-3 px-5 py-3 bg-[#F8F8F8] rounded-[10px] w-full sm:w-auto">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3.18 23.5L13.5 12L3.18 0.5Z" fill="#4285F4" />
                  <path d="M17.5 15.97L5.5 23L13.5 12Z" fill="#34A853" />
                  <path
                    d="M20.5 10.5L17.5 15.97L13.5 12L17.5 8.03Z"
                    fill="#FBBC05"
                  />
                  <path d="M5.5 1L17.5 8.03L13.5 12Z" fill="#EA4335" />
                </svg>

                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase text-[#807F7F] font-semibold">
                    Coming soon on
                  </span>
                  <span className="text-base font-bold text-[#302F2F]">
                    Google Play
                  </span>
                </div>
              </button>

              {/* App Store */}
              <button className="flex items-center gap-3 px-5 py-3 bg-[#F8F8F8] rounded-[10px] w-full sm:w-auto">
                <svg width="22" height="26" viewBox="0 0 22 26">
                  <path
                    d="M18.09 13.74C18.07 11.1 20.24 9.82 20.34 9.76C19.12 7.97 17.23 7.72 16.57 7.7C14.96 7.53 13.4 8.65 12.58 8.65C11.74 8.65 10.47 7.72 9.1 7.75C7.35 7.78 5.72 8.77 4.82 10.33C2.97 13.5 4.35 18.17 6.12 20.74C7.01 22 8.07 23.43 9.47 23.38C10.84 23.32 11.35 22.52 12.97 22.52C14.57 22.52 15.05 23.38 16.48 23.35C17.95 23.32 18.87 22.06 19.73 20.78C20.76 19.32 21.18 17.89 21.2 17.82C21.17 17.81 18.11 16.62 18.09 13.74Z"
                    fill="#302F2F"
                  />
                </svg>

                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase text-[#807F7F] font-semibold">
                    Coming soon on
                  </span>
                  <span className="text-base font-bold text-[#302F2F]">
                    App Store
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="w-full relative top-0 max-w-xs sm:max-w-sm lg:max-w-md">
            <img
              src="/phone-mockup.png"
              alt="Phone Mockup"
              className="w-full h-auto drop-shadow-[40px_40px_80px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
