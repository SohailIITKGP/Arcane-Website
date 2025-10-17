export default function About() {
  return (
    <section 
      className="relative w-full min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: 'url(/About.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
    >

      {/* Content */}
      <div className="relative px-8 z-10 py-20 md:py-32">
        <div className="w-full mx-auto">
          {/* Section Header - Positioned above the border line */}
          <div className="flex items-start gap-8 md:gap-40 mb-16 -mt-10">
            <span className="text-red-500 text-5xl md:text-6xl lg:text-7xl font-pp-mondwest">
              01
            </span>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-grotesk-inktrap tracking-wider pt-2">
              ABOUT
            </h2>
          </div>

          {/* Border line will be visible from background image */}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-2 mt-48">
            {/* Left Column - Main Description */} 
            <div className="space-y-10">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed uppercase tracking-wide">
                ARCANE WAS BUILT FOR THE FRONTRUNNER. WE DESIGN WITH THE SAME AMBITION AS THE PROJECTS WE SERVE: GLOBAL, TRUSTLESS, AND PERMISSIONLESS. WE EMBRACE THE INTERSECTION OF CLARITY AND MYSTIQUE — WHERE COMPLEX MECHANISMS BECOME SIMPLE, USABLE, AND BEAUTIFUL.
              </p>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-6">
              <div className="text-gray-400 text-sm md:text-base space-y-2">
                <p className="uppercase tracking-wider">FROM DEFI EXCHANGES TO VALIDATOR</p>
                <p className="uppercase tracking-wider">NETWORKS, IMMUTABLE PRIMITIVES TO</p>
                <p className="uppercase tracking-wider">SMART CITY STACKS, WE ENGAGE</p>
                <p className="uppercase tracking-wider">WHERE THE BUILD STANDS AND</p>
                <p className="uppercase tracking-wider">BRAND RISE ABOVE.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Text - Large Display */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20 pb-8">
          <h3 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-800 opacity-50 uppercase tracking-tight leading-none whitespace-nowrap">
            COMPLEXITY DISTILLED INTO HU
          </h3>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[2]" />
    </section>
  );
}
