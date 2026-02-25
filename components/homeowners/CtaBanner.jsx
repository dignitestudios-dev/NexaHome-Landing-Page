export default function HomeOwnerCtaBanner() {
  return (
    <section className="relative mb-10 overflow-hidden rounded-[24px]">
      <div className="relative max-w-7xl mx-auto h-[597px] overflow-hidden rounded-[24px] ">
        {/* Background image */}
        <div className="absolute inset-0 h-[810px] -top-[156px] rounded-[24px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_-2.8%,rgba(0,0,0,0.82)_100%),url('/home-owner-banner.png')] bg-cover bg-center " />

        {/* Left Content */}
        <div className="absolute left-16 top-0 bottom-0 w-[520px] flex flex-col justify-center">
          <p className="font-semibold text-[16px] leading-[28px] capitalize text-white mb-3 font-['Plus_Jakarta_Sans']">
            Launching Soon
          </p>

          <h2 className="font-bold text-[48px] leading-[48px] capitalize text-white mb-5 font-['Plus_Jakarta_Sans']">
            Be The First to Know
          </h2>

          <p className="font-semibold text-[16px] leading-[20px] capitalize text-white w-[464px] mb-12 font-['Plus_Jakarta_Sans']">
            Download our app and get instant access to thousands of trusted home
            care experts in your neighborhood.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-3">
            {/* Google Play */}
            <button className="flex items-center gap-3 w-[202px] h-[61px] px-4 bg-[#F8F8F8] rounded-[10px]">
              {/* SVG remains same */}
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M3.18 23.5C2.76 23.27 2.5 22.87 2.5 22.36V1.64C2.5 1.13 2.76 0.73 3.18 0.5L13.5 12L3.18 23.5Z"
                  fill="#4285F4"
                />
                <path
                  d="M17.5 15.97L5.5 23L13.5 12L17.5 15.97Z"
                  fill="#34A853"
                />
                <path
                  d="M20.5 10.5C21.2 10.9 21.5 11.42 21.5 12C21.5 12.58 21.2 13.1 20.5 13.5L17.5 15.97L13.5 12L17.5 8.03L20.5 10.5Z"
                  fill="#FBBC05"
                />
                <path d="M5.5 1L17.5 8.03L13.5 12L5.5 1Z" fill="#EA4335" />
              </svg>

              <div className="flex flex-col items-start gap-[2px]">
                <span className="text-[10px] leading-[12px] uppercase text-[#807F7F] font-semibold font-['Plus_Jakarta_Sans']">
                  Coming soon on
                </span>
                <span className="text-[16px] leading-[20px] font-bold text-[#302F2F] font-['Plus_Jakarta_Sans']">
                  Google Play
                </span>
              </div>
            </button>

            {/* App Store */}
            <button className="flex items-center gap-3 w-[189px] h-[61px] px-4 bg-[#F8F8F8] rounded-[10px]">
              <svg width="22" height="26" viewBox="0 0 22 26">
                <path
                  d="M18.09 13.74C18.07 11.1 20.24 9.82 20.34 9.76C19.12 7.97 17.23 7.72 16.57 7.7C14.96 7.53 13.4 8.65 12.58 8.65C11.74 8.65 10.47 7.72 9.1 7.75C7.35 7.78 5.72 8.77 4.82 10.33C2.97 13.5 4.35 18.17 6.12 20.74C7.01 22 8.07 23.43 9.47 23.38C10.84 23.32 11.35 22.52 12.97 22.52C14.57 22.52 15.05 23.38 16.48 23.35C17.95 23.32 18.87 22.06 19.73 20.78C20.76 19.32 21.18 17.89 21.2 17.82C21.17 17.81 18.11 16.62 18.09 13.74Z"
                  fill="#302F2F"
                />
                <path
                  d="M15.52 5.97C16.24 5.09 16.72 3.88 16.59 2.65C15.56 2.7 14.27 3.36 13.52 4.22C12.86 4.98 12.28 6.23 12.43 7.41C13.58 7.49 14.77 6.84 15.52 5.97Z"
                  fill="#302F2F"
                />
              </svg>

              <div className="flex flex-col items-start gap-[2px]">
                <span className="text-[10px] leading-[12px] uppercase text-[#807F7F] font-semibold font-['Plus_Jakarta_Sans']">
                  Coming soon on
                </span>
                <span className="text-[16px] leading-[20px] font-bold text-[#302F2F] font-['Plus_Jakarta_Sans']">
                  App Store
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="absolute right-20 top-[6.5rem]  h-full w-[408px] drop-shadow-[48px_48px_100px_rgba(0,0,0,0.2)]">
            <img src="/phone-mockup.png"  alt="Phone Mockup" srcset="" />
        </div>
      </div>
    </section>
  );
}
