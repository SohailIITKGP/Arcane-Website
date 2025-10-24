export default function Impact() {
  const achievements = [
    {
      text: "Drove Brand, Web, & Activation for Predbase, Leading to $100M Acquisition by Rubrik"
    },
    {
      text: "Supported Galileo's Growth, Resulting in $63M Funding"
    },
    {
      text: "Built Halcyon's Product, Driving $90M in Funding Success"
    },
    {
      text: "Transformed ArchyMeltano, Leading to $12.4M Funding"
    }
  ];

  return (
      // Increased mobile vertical padding for better spacing (py-10)
      <section className="relative w-full min-h-screen bg-[#080808] overflow-hidden py-10 lg:py-20">
        {/* Content */}
        {/* Reduced mobile horizontal padding slightly (px-4) */}
        <div className="relative z-10 px-4 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="mb-2">
            {/* Default mobile gap is now smaller (gap-4) */}
            <div className="flex items-start gap-4 md:gap-16">
              {/* Reduced number size for mobile (text-4xl) */}
              <span className="text-red-500 text-4xl md:text-6xl lg:text-7xl font-pp-mondwest">
              06
            </span>
              {/* Reduced heading size for mobile (text-4xl) */}
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-grotesk-inktrap tracking-wider pt-2 uppercase">
                IMPACT CREATED
              </h2>
            </div>
          </div>

          <div className="border-t border-[#313030] mt-10 lg:mt-20"></div>

          {/* Achievements List */}
          {/* Adjusted spacing for better mobile density */}
          <div className="space-y-0 mt-4 lg:mt-6">
            {achievements.map((achievement, index) => (
                <div key={index}>
                  {/* Achievement Row */}
                  {/* Reduced vertical padding for mobile (py-6) */}
                  <div className="py-6 md:py-10">
                    {/* Reduced text size for mobile (text-base) */}
                    <p className="text-white text-base lg:text-xl leading-relaxed font-grotesk-inktrap">
                      {achievement.text}
                    </p>
                  </div>

                  <div className="border-b border-[#313030]"></div>
                </div>
            ))}
          </div>

          {/* Marquee Section */}
          <div className="relative z-10 overflow-hidden bg-[#B7373914] py-4 mt-8 lg:mt-12 mb-8 lg:mb-10">
            <div className="flex animate-marquee">
              {/* Reduced Marquee text size for mobile (text-4xl) */}
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#B73739] uppercase tracking-tight leading-none whitespace-nowrap font-grotesk-inktrap pr-8">
                COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
              </h3>
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#B73739] uppercase tracking-tight leading-none whitespace-nowrap font-grotesk-inktrap pr-8">
                COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
              </h3>
            </div>
          </div>

          {/* Contact/Form Section */}
          {/* Removed min-h-screen to avoid excessive empty space on short mobile views */}
          <div className="mt-5 text-white flex flex-col justify-between p-4 sm:p-8">
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full mx-auto">
                <div className="text-left mb-8 sm:mb-16">
                  {/* Major Change: Scaled Heading Down for Mobile */}
                  <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl text-gray-400 leading-normal lg:leading-relaxed mt-10 lg:mt-[100px] mb-5 font-thin">
                    We love working alongside ambitious brands
                    {/* Hides this break on mobile, allowing text to wrap naturally */}
                    <br className="hidden lg:inline-block"/>
                    and people. <span><b>Drop us a line</b></span> if you&apos;d like us to
                    {/* Hides this break on mobile, allowing text to wrap naturally */}
                    <br className="hidden lg:inline-block"/>
                    build something great together.
                  </h1>
                </div>

                {/* Form Section - already quite mobile-friendly (w-full inputs) */}
                <form className="w-full pt-5 mt-5">
                  <div className="mb-6">
                    <label htmlFor="first-name" className="text-sm text-gray-500 font-geist-mono">First Name</label>
                    <input type="text" id="first-name"
                           className="w-full bg-transparent py-2 focus:outline-none text-white border-b-0 input-underscore"/>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="last-name" className="text-sm text-gray-500 font-geist-mono">Last Name</label>
                    <input type="text" id="last-name"
                           className="w-full bg-transparent py-2 focus:outline-none text-white border-b-0 input-underscore"/>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone-number" className="text-sm text-gray-500 font-geist-mono">Phone Number</label>
                    <input type="text" id="phone-number"
                           className="w-full bg-transparent py-2 focus:outline-none text-white border-b-0 input-underscore"/>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="text-sm text-gray-500 font-geist-mono">Email</label>
                    <input type="email" id="email"
                           className="w-full bg-transparent py-2 focus:outline-none text-white border-b-0 input-underscore"/>
                  </div>
                  <div className="mb-10">
                    <label htmlFor="message" className="text-sm text-gray-500 font-geist-mono">Message</label>
                    <input type="text" id="message"
                           className="w-full bg-transparent py-2 focus:outline-none text-white border-b-0 input-underscore"/>
                  </div>
                  <div className="text-center mt-8">
                    <button type="submit"
                            className="
                            bg-[url('../../public/websubmitbutton.svg')]
                            bg-no-repeat bg-center
                            /* Added custom utility for button size, ensure this is defined in your tailwind.config.js or use standard sizing */
                            bg-size-[159.15px_52px]
                            hover:bg-none
                            hover:bg-[#b73739]
                            relative px-10 py-3 text-lg font-semibold tracking-widest text-white
                          "
                    >
                      <span></span>
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Logo Section */}
            <div className="w-full text-center mt-10 lg:mt-20">
              <img
                  src="/ARCANE%20LABS.svg"
                  alt="ARCANE LABS"
                  className="mx-auto h-auto max-w-full lg:max-w-full inline-block"
              />
            </div>
          </div>


        </div>
      </section>
  );
}