export default function Work() {
    const projects = [
        { number: "01", name: "Synthari", category: "Metaverse" },
        { number: "01", name: "Edel", category: "Metaverse" },
        { number: "01", name: "Innovate", category: "Web3" },
        { number: "01", name: "DAAO", category: "Web3" },
        { number: "01", name: "Inspire", category: "Web3" },
    ];

    return (
        <section
            className="relative w-full min-h-screen bg-black overflow-hidden"
            style={{
                // Background image settings are suitable for responsiveness
                backgroundImage: 'url(/Work.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            {/* Content Container: Adjusted vertical padding for mobile (py-16) and horizontal padding (px-4) */}
            <div className="relative z-10 px-4 md:px-12 lg:px-20 py-16 md:py-32">
                <div className="mb-8">
                    {/* Header Block: Reduced gap and text size for mobile */}
                    <div className="flex items-start gap-4 md:gap-16">
                    <span className="text-red-500 text-4xl md:text-6xl lg:text-7xl font-pp-mondwest">
                      03
                    </span>
                        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-grotesk-inktrap tracking-wider pt-2 uppercase">
                            WORK
                        </h2>
                    </div>
                </div>
                {/* Adjusted dotted-border alignment for mobile */}
                <div className="dotted-border mb-12 lg:mb-16 ml-0 lg:ml-32"></div>

                {/* Top Text Section (Similar to About component) */}
                <div className="mt-10 lg:mt-18">
                    {/* Key Change: Removed max-w-[85%] and ml-auto for mobile width */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-54 lg:max-w-7xl lg:mx-auto">

                        {/* Left Column Text */}
                        <div className="flex-1 space-y-8 lg:space-y-10">
                            <p className="text-gray-300 text-sm md:text-lg leading-relaxed uppercase tracking-wide font-grotesk-inktrap">
                                ARCANE WAS BUILT FOR THE FRONTRUNNER. WE DESIGN WITH THE SAME AMBITION AS THE PROJECTS WE
                                SERVE: GLOBAL, TRUSTLESS, AND PERMISSIONLESS. WE EMBRACE THE INTERSECTION OF CLARITY AND
                                MYSTIQUE — WHERE COMPLEX MECHANISMS BECOME SIMPLE, USABLE, AND BEAUTIFUL.
                            </p>
                        </div>

                        {/* Right Column Achievements */}
                        <div className="flex-1 space-y-3">
                            <p className="text-[#B73739] text-xs md:text-sm uppercase tracking-widest bg-[#B737391F] w-fit p-1 font-geist-mono">
                                ACHIEVEMENTS
                            </p>

                            <div className="space-y-1">
                                {/* Increased text size for better mobile readability */}
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

                {/* Project List Grid */}
                {/* KEY CHANGE: Default to 1 column on mobile, switch to 2 columns on large screen */}
                <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-x-12">

                    {/* Project Column 1 */}
                    <div className="space-y-0">
                        {projects.slice(0, 5).map((project, index) => (
                            <div key={index}>
                                <div
                                    // KEY CHANGE: Uses flex-wrap to stack items on the smallest screens
                                    className="flex flex-wrap items-center justify-between py-6 md:py-10 group cursor-pointer hover:bg-white/5 transition-colors px-0 sm:px-4 md:px-6"
                                >
                                    {/* Number */}
                                    <span className="text-gray-500 text-sm font-geist-mono order-1 w-auto">
                                      {project.number}
                                  </span>

                                    {/* Name/Title (takes priority width) */}
                                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-grotesk-inktrap tracking-wide flex-1 pl-4 md:pl-6 order-2 w-full sm:w-auto mt-2 sm:mt-0">
                                        {project.name}
                                    </h3>

                                    {/* Category (needs to be smaller on mobile) */}
                                    <span
                                        className="text-gray-500 text-xs font-geist-mono uppercase tracking-wider order-3 mr-4 md:mr-6 w-auto"
                                    >
                                      {project.category}
                                  </span>

                                    {/* Button */}
                                    <button className="w-8 h-8 border border-[#B73739] flex items-center justify-center order-4">
                                        <span className="text-lg text-[#B73739]">+</span>
                                    </button>
                                </div>

                                <div className="dotted-border"></div>
                            </div>
                        ))}
                    </div>

                    {/* Project Column 2: Added mt-12 for mobile to separate columns when stacked */}
                    <div className="space-y-0 mt-12 lg:mt-0">
                        {projects.slice(0, 5).map((project, index) => (
                            <div key={index}>
                                <div
                                    // KEY CHANGE: Uses flex-wrap to stack items on the smallest screens
                                    className="flex flex-wrap items-center justify-between py-6 md:py-10 group cursor-pointer hover:bg-white/5 transition-colors px-0 sm:px-4 md:px-6"
                                >
                                    {/* Number */}
                                    <span className="text-gray-500 text-sm font-geist-mono order-1 w-auto">
                                      {project.number}
                                  </span>

                                    {/* Name/Title (takes priority width) */}
                                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-grotesk-inktrap tracking-wide flex-1 pl-4 md:pl-6 order-2 w-full sm:w-auto mt-2 sm:mt-0">
                                        {project.name}
                                    </h3>

                                    {/* Category (needs to be smaller on mobile) */}
                                    <span
                                        className="text-gray-500 text-xs font-geist-mono uppercase tracking-wider order-3 mr-4 md:mr-6 w-auto"
                                    >
                                      {project.category}
                                  </span>

                                    {/* Button */}
                                    <button className="w-8 h-8 border border-[#B73739] flex items-center justify-center order-4">
                                        <span className="text-lg text-[#B73739]">+</span>
                                    </button>
                                </div>

                                <div className="dotted-border"></div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            {/* Highlights Section */}
            <div className="w-full bg-black py-10 md:py-32" >
                <div className="flex items-center justify-center px-4 md:px-12" >
                    <div
                        // KEY CHANGE: Set min-h-[300px] for mobile and h-[500px] only on large screens
                        className="text-white p-6 sm:p-8 border border-gray-700 max-w-7xl w-full min-h-[300px] lg:h-[500px] text-center relative overflow-hidden flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: 'url(/Highlights.svg)',
                            backgroundSize: 'cover',
                            // Adjusted background position to be more centered for all screens
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* Reduced text size for mobile */}
                        <h1 className="text-lg sm:text-xl lg:text-4xl font-bold mb-4 mt-0 lg:mt-18 leading-snug">
                            THE ARCANE REPORT 2025:
                            <br/>
                            ONCHAIN INTELLIGENCE AND THE AGE
                            <br/>
                            OF DECENTRALIZED DESIGN
                        </h1>
                        {/* Reduced text size and removed forced line breaks for mobile */}
                        <p className="text-gray-400 text-xs mb-6 lg:mb-8 max-w-lg">
                            ARCANE EXPLORES THE INTERSECTION OF INTELLIGENCE, NETWORKS,
                            AND DESIGN - UNCOVERING HOW DECENTRALIZED SYSTEMS ARE
                            RESHAPING CREATIVITY, DATA, AND TRUST ITSELF...
                        </p>
                        <button className="bg-red-700 text-white py-2 px-6">
                            READ ARTICLE
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}