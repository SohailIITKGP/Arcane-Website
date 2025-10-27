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
      <section className="relative w-full min-h-screen bg-[#080808] overflow-hidden pt-10 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-2  px-4 md:px-10 lg:px-20">
            <div className="flex items-center items-start gap-4 md:gap-16 ">
              <span className="text-red-500 text-4xl md:text-6xl lg:text-7xl font-pp-mondwest pt-4">
              04
            </span>
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-grotesk-inktrap pt-2 uppercase">
                IMPACT CREATED
              </h2>
            </div>
          </div>

          <div className="border-t border-[#313030] mt-10 lg:mt-20"></div>
          <div className="space-y-0 mt-4 lg:mt-6  px-4 md:px-12 lg:px-20">
            {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="py-6 md:py-10">
                    <p className="text-white text-base lg:text-xl leading-relaxed font-grotesk-inktrap font-extralight">
                      {achievement.text}
                    </p>
                  </div>

                  <div className="border-b border-[#313030]"></div>
                </div>
            ))}
          </div>
          <div className="relative z-10 overflow-hidden bg-[#B7373914] py-4 mt-8 lg:mt-12 mb-8 lg:mb-10">
            <div className="flex animate-marquee">
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#B73739] uppercase tracking-tight leading-none whitespace-nowrap font-pp-mondwest pr-8">
                COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
              </h3>
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#B73739] uppercase tracking-tight leading-none whitespace-nowrap font-pp-mondwest pr-8">
                COMPLEXITY DISTILLED INTO HUMAN UNDERSTANDING
              </h3>
            </div>
          </div>
          <div className="mt-5 text-white flex flex-col justify-between pt-4 sm:pt-8">
            <div className="flex-grow flex items-center justify-center">
              <div className="w-full mx-auto">
                <div className="text-left mb-8 sm:mb-16 px-4 md:px-10 lg:px-9">
                  <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl text-gray-400 leading-normal lg:leading-relaxed mt-10 lg:mt-[100px] mb-5 font-thin">
                    We love working alongside ambitious brands
                    <br className="hidden lg:inline-block"/>
                    and people. <span><b>Drop us a line</b></span> if you&apos;d like us to
                    <br className="hidden lg:inline-block"/>
                    build something great together.
                  </h1>
                </div>
                <form className="w-full pt-5 mt-5 px-4 md:px-10 lg:px-9">
                  <div className="mb-6">
                    <label htmlFor="first-name" className="text-sm text-gray-500 font-geist-mono block mb-1">First Name</label>
                    <div className="relative">
                      <input type="text" id="first-name" name="first-name"
                             className="w-full bg-transparent py-2 focus:outline-none text-white border-none" 
                             style={{ paddingBottom: '8px' }}/>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
                           style={{
                             backgroundImage: 'linear-gradient(to right, #4a4a4a 10px, transparent 0%)',
                             backgroundSize: '13px 1px',
                             backgroundRepeat: 'repeat-x'
                           }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="last-name" className="text-sm text-gray-500 font-geist-mono block mb-1">Last Name</label>
                    <div className="relative">
                      <input type="text" id="last-name" name="last-name"
                             className="w-full bg-transparent py-2 focus:outline-none text-white border-none"
                             style={{ paddingBottom: '8px' }}/>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
                           style={{
                             backgroundImage: 'linear-gradient(to right, #4a4a4a 10px, transparent 0%)',
                             backgroundSize: '13px 1px',
                             backgroundRepeat: 'repeat-x'
                           }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone-number" className="text-sm text-gray-500 font-geist-mono block mb-1">Phone Number</label>
                    <div className="relative">
                      <input type="tel" id="phone-number" name="phone-number"
                             className="w-full bg-transparent py-2 focus:outline-none text-white border-none"
                             style={{ paddingBottom: '8px' }}/>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
                           style={{
                             backgroundImage: 'linear-gradient(to right, #4a4a4a 10px, transparent 0%)',
                             backgroundSize: '13px 1px',
                             backgroundRepeat: 'repeat-x'
                           }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="text-sm text-gray-500 font-geist-mono block mb-1">Email</label>
                    <div className="relative">
                      <input type="email" id="email" name="email"
                             className="w-full bg-transparent py-2 focus:outline-none text-white border-none"
                             style={{ paddingBottom: '8px' }}/>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
                           style={{
                             backgroundImage: 'linear-gradient(to right, #4a4a4a 10px, transparent 0%)',
                             backgroundSize: '13px 1px',
                             backgroundRepeat: 'repeat-x'
                           }}></div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <label htmlFor="message" className="text-sm text-gray-500 font-geist-mono block mb-1">Message</label>
                    <div className="relative">
                      <input type="text" id="message" name="message"
                             className="w-full bg-transparent py-2 focus:outline-none text-white border-none"
                             style={{ paddingBottom: '8px' }}/>
                      <div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
                           style={{
                             backgroundImage: 'linear-gradient(to right, #4a4a4a 10px, transparent 0%)',
                             backgroundSize: '13px 1px',
                             backgroundRepeat: 'repeat-x'
                           }}></div>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <button type="submit"
                            className="
                            bg-[url('../../public/websubmitbutton.svg')]
                            bg-no-repeat bg-center
                            bg-size-[159.15px_52px]
                            transition-all duration-500 ease-in-out
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