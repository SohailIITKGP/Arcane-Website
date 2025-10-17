export default function Work() {

  return (
    <section 
      className="relative w-full min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: 'url(/Work.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-32">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-start gap-8 md:gap-16">
            <span className="text-red-500 text-5xl md:text-6xl lg:text-7xl font-pp-mondwest">
              04
            </span>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-grotesk-inktrap tracking-wider pt-2">
              WORK
            </h2>
          </div>
        </div>
        <div className="dotted-border mb-16 ml-32"></div>

        <div className="mt-18">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-54 max-w-[85%] ml-auto">
            <div className="flex-1 space-y-10">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed uppercase tracking-wide font-grotesk-inktrap">
                ARCANE WAS BUILT FOR THE FRONTRUNNER. WE DESIGN WITH THE SAME AMBITION AS THE PROJECTS WE SERVE: GLOBAL, TRUSTLESS, AND PERMISSIONLESS. WE EMBRACE THE INTERSECTION OF CLARITY AND MYSTIQUE — WHERE COMPLEX MECHANISMS BECOME SIMPLE, USABLE, AND BEAUTIFUL.
              </p>
            </div>

            <div className="flex-1 space-y-3">
              <p className="text-[#B73739] text-xs md:text-sm uppercase tracking-widest bg-[#B737391F] w-fit p-1 font-geist-mono">
                ACHIEVEMENTS
              </p>
              
              <div className="space-y-1">
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                  FROM DEFI EXCHANGES TO VALIDATOR
                </p>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                  NETWORKS, IMMUTABLE PRIMITIVES TO
                </p>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                  ENTERPRISE, ARCANE DESIGNS PROJECTS AND
                </p>
                <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider leading-relaxed font-geist-mono">
                  BRANDS THAT EVOLVE.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
