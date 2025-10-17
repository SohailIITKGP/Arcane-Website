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
    <section className="relative w-full min-h-screen bg-[#080808] overflow-hidden py-2 md:py-2">
      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-2">
          <div className="flex items-start gap-8 md:gap-16">
            <span className="text-red-500 text-5xl md:text-6xl lg:text-7xl font-pp-mondwest">
              06
            </span>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-grotesk-inktrap tracking-wider pt-2 uppercase">
              IMPACT CREATED
            </h2>
          </div>
        </div>

        <div className="border-t border-[#313030] mt-20"></div>

        {/* Achievements List */}
        <div className="space-y-0 mt-6">
          {achievements.map((achievement, index) => (
            <div key={index}>
              {/* Achievement Row */}
              <div className="py-8 md:py-10">
                <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-grotesk-inktrap">
                  {achievement.text}
                </p>
              </div>

              <div className="border-b border-[#313030]"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 overflow-hidden bg-[#B7373914] py-4 mt-12 mb-10">
        <div className="flex animate-marquee">
          <h3 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#B73739] uppercase tracking-tight leading-none whitespace-nowrap font-grotesk-inktrap pr-8">
            COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
          </h3>
          <h3 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#B73739] uppercase tracking-tight leading-none whitespace-nowrap font-grotesk-inktrap pr-8">
            COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
          </h3>
        </div>
      </div>

      </div>
    </section>
  );
}
