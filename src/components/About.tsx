export default function About() {
  return (
      <section
          // Ensure vertical padding is generous for mobile (py-16)
          className="relative w-full min-h-screen bg-black overflow-hidden py-16 lg:py-0"
          style={{
            // The background image is set to cover the section, which works well for responsiveness.
            backgroundImage: 'url(/About.png)',
            backgroundSize: 'cover',
            // Pin the background image to the top for all screen sizes
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
      >

        <div className="relative z-10 py-10 md:py-20 lg:py-32">
          {/* Adjusted padding to use px-4 as mobile default */}
          <div className="px-4 md:px-8 lg:px-20">
            {/* Reduced gap for mobile (gap-4) and removed excessive negative top margin for mobile */}
            <div className="flex items-start gap-4 md:gap-40 mb-10 lg:mb-16 mt-0">
              {/* Reduced text size for mobile (text-4xl) */}
              <span className="text-red-500 text-4xl md:text-6xl lg:text-7xl font-pp-mondwest">
              01
            </span>
              {/* Reduced text size for mobile (text-4xl) */}
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-grotesk-inktrap tracking-wider pt-2 uppercase">
                ABOUT
              </h2>
            </div>
          </div>

          {/* Reduced massive top margin for mobile (mt-10) */}
          <div className="mt-10 lg:mt-48">
            {/* Key Change:
              1. Removed fixed width 'max-w-[75%]' which limited mobile flow.
              2. Used 'mx-auto' on desktop only (lg:mx-auto) or center the content differently.
              3. Added padding to the sides of this content block (px-4)
          */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-40 px-4 md:px-8 lg:px-20 lg:max-w-7xl lg:mx-auto">

              {/* Main Content Column */}
              <div className="flex-1 space-y-8 lg:space-y-10">
                {/* Added responsive sizing for text (text-sm default) */}
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed uppercase tracking-wide font-grotesk-inktrap">
                  ARCANE WAS BUILT FOR THE FRONTRUNNER. WE DESIGN WITH THE SAME AMBITION AS THE PROJECTS WE SERVE: GLOBAL, TRUSTLESS, AND PERMISSIONLESS. WE EMBRACE THE INTERSECTION OF CLARITY AND MYSTIQUE — WHERE COMPLEX MECHANISMS BECOME SIMPLE, USABLE, AND BEAUTIFUL.
                </p>
              </div>

              {/* Goal Sidebar Column */}
              <div className="flex-1 space-y-3">
                <p className="text-[#B73739] text-xs md:text-sm uppercase tracking-widest bg-[#B737391F] w-fit p-1 font-geist-mono">
                  GOAL
                </p>

                {/* Goal List Text: Increased text size for mobile (text-xs is very small) */}
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                    FROM DEFI EXCHANGES TO VALIDATOR
                  </p>
                  <p className="text-gray-500 text-sm md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                    NETWORKS, IMMUTABLE PRIMITIVES TO
                  </p>
                  <p className="text-gray-500 text-sm md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                    ENTERPRISE, ARCANE DESIGNS PROJECTS AND
                  </p>
                  <p className="text-gray-500 text-sm md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                    BRANDS THAT EVOLVE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="relative z-10 overflow-hidden bg-[#151515] py-4 mt-12 mb-0 lg:mb-10">
          <div className="flex animate-marquee">
            {/* Key Change: Reduced Marquee text size for mobile (text-4xl default) */}
            <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#4F4E4D] opacity-50 uppercase tracking-tight leading-none whitespace-nowrap pr-8">
              COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
            </h3>
            <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#4F4E4D] opacity-50 uppercase tracking-tight leading-none whitespace-nowrap pr-8">
              COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
            </h3>
          </div>
        </div>
      </section>
  );
}