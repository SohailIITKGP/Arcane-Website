import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f]">

      <div className="absolute inset-0 z-0">
        <Image
          src="/Landing.svg"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="absolute inset-0  z-[1]" />
      <div className="absolute inset-0 z-[1]" />

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 pt-6 md:pt-8">
        <div className="flex items-center">
          <Image
            src="/Arcane logo.svg"
            alt="Arcane Labs"
            width={180}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </div>
        
        <button className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm font-medium tracking-wider">
          <img src="/Menu.png" alt="Menu" className="h-8 w-auto" />
        </button>
      </nav>

      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-100px)] px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] w-full">
          <h1 className="text-white uppercase">
            <span className="block hero-line-1-2 text-left font-grotesk-inktrap">
              ARCANE BACKS
            </span>
            <span className="block hero-line-1-2 text-right font-grotesk-inktrap">
              YOUR FAVORITE
            </span>
            <span className="block hero-crypto-projects text-red-500 text-left font-pp-mondwest">
              CRYPTO PROJECTS
            </span>
          </h1>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 z-[2]" />
    </section>
  );
}
