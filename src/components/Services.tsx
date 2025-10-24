export default function Services() {
  const services = [
    {
      number: "S/001",
      title: "Advisory",
      description: "We position complex protocols for clear, confident market entry—translating technical depth into strategic narrative."
    },
    {
      number: "S/002",
      title: "Blockchain",
      description: "End-to-end protocol design and deployment, from consensus architecture to smart contract security and tokenomics alignment."
    },
    {
      number: "S/003",
      title: "Product Development",
      description: "Full-stack build—front-end, back-end, infrastructure. Engineered for performance, resilience, and long-term scale."
    },
    {
      number: "S/004",
      title: "Enterprise Software",
      description: "Custom platforms and integrations that meet enterprise standards: secure, scalable, and built to last."
    },
    {
      number: "S/005",
      title: "Artificial Intelligence (AI)",
      description: "AI-driven automation, predictive modeling, and intelligent systems designed to optimize operations and unlock new value."
    }
  ];

  return (
      <section
          className="relative w-full min-h-screen bg-black overflow-hidden"
          style={{
            // Background image settings are correct for responsiveness (cover, center)
            backgroundImage: 'url(/Services.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
      >
        {/* Content Container: Adjusted vertical padding for mobile (py-16) and kept horizontal padding responsive */}
        <div className="relative z-10 px-4 md:px-12 lg:px-20 py-16 md:py-32">
          <div className="mb-8">
            {/* Header Block: Reduced gap for mobile (gap-4) and reduced text size for mobile */}
            <div className="flex items-start gap-4 md:gap-16">
            <span className="text-red-500 text-4xl md:text-6xl lg:text-7xl font-pp-mondwest">
              02
            </span>
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-grotesk-inktrap tracking-wider pt-2 uppercase">
                SERVICES
              </h2>
            </div>
          </div>

          {/* Info/Meta Section */}
          {/* Adjusted dotted-border width for mobile (w-full) */}
          <div className="dotted-border mb-12 w-full"></div>

          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-gray-500 text-xs font-geist-mono">/IN THE MOON</span>
            {/* Text size reduction for mobile (text-xs default) and removed w-4/5 from previous line */}
            <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wide leading-relaxed font-geist-mono max-w-sm text-center flex-shrink-0 order-first sm:order-none w-full sm:w-auto">
              Tech stacks for a rapidly evolving world.
            </p>
            <span className="text-gray-500 text-xs font-geist-mono">/005</span>
          </div>
          <div className="dotted-border my-12 "></div>

          {/* Services List */}
          <div className="space-y-0">
            {services.map((service, index) => (
                <div key={index} className="py-4">
                  {/* KEY CHANGE: Adjusted Grid Layout for Responsiveness */}
                  {/* On mobile, it's a simple vertical stack. On lg, it becomes a 12-column grid. */}
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">

                    {/* Service Number: Col-span-full on mobile, Col-span-1 on large screens */}
                    <div className="col-span-full lg:col-span-1 order-2 lg:order-1">
                  <span className="text-gray-500 text-xs font-geist-mono">
                    {service.number}
                  </span>
                    </div>

                    {/* Service Title: Col-span-full on mobile, Col-span-3 on large screens */}
                    <div className="col-span-full lg:col-span-3 order-1 lg:order-2">
                      {/* Reduced heading size for mobile (text-xl default) */}
                      <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-grotesk-inktrap tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    {/* Service Description: Col-span-full on mobile, Col-span-7 starting at column 6 on large screens */}
                    <div className="col-span-full lg:col-span-7 lg:col-start-6 lg:ml-8 order-3">
                      <p className="text-gray-400 text-sm leading-relaxed font-geist-mono">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="dotted-border mt-12"></div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}