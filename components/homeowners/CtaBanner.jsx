"use client"
import Link from "next/link";

export default function HomeOwnerCtaBanner() {
  return (
    <section className="relative mb-10 px-4">
      <div className="relative max-w-7xl h-[640px] mx-auto overflow-hidden rounded-[24px]">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url('/home-owner-banner.png')] bg-cover bg-center" />

        {/* Content Wrapper */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-16 py-16 lg:py-24 gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left max-w-xl text-white" data-aos="fade-up">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Get Started with NexaHome
            </h2>

            <p className="text-sm sm:text-base mb-10">
              Download our app and connect with local, verified
              home care experts in your neighborhood.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              {/* Google Play */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.dignitestudios.nexahome"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-gray-50 rounded-[14px] w-full sm:w-auto transition-all shadow-md hover:shadow-lg group"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path
                    d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.338-.61-.84-.61-1.472V3.286c0-.632.258-1.134.61-1.472z"
                    fill="#4285F4"
                  />
                  <path
                    d="M17.186 8.608L13.793 12l3.393 3.392 3.844-2.183c1.037-.589 1.037-1.83 0-2.418l-3.844-2.183z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M13.793 12L3.61 1.814c.264-.253.647-.414 1.11-.414.479 0 .973.178 1.48.466l10.986 6.242L13.793 12z"
                    fill="#EA4335"
                  />
                  <path
                    d="M13.793 12l3.393 3.392-10.986 6.242c-.507.288-1.001.466-1.48.466-.463 0-.846-.161-1.11-.414L13.793 12z"
                    fill="#34A853"
                  />
                </svg>

                <span className="text-base sm:text-lg font-bold text-[#302F2F] tracking-tight">
                  Google Play
                </span>
              </Link>

              {/* App Store */}
              <Link
                href="https://apps.apple.com/us/app/nexahome-app/id6769668269"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-gray-50 rounded-[14px] w-full sm:w-auto transition-all shadow-md hover:shadow-lg group"
              >
                <svg
                  className="w-6 h-6 flex-shrink-0 fill-[#302F2F]"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                </svg>

                <span className="text-base sm:text-lg font-bold text-[#302F2F] tracking-tight">
                  App Store
                </span>
              </Link>
            </div>
          </div>

          {/* Phone Mockup */}
          <div
            className="w-full relative top-0 max-w-xs sm:max-w-sm lg:max-w-md"
            data-aos="fade-up"
            data-aos-delay="150"
          >
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
