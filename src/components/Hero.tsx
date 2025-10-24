"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (menuOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            body.style.paddingRight = `${scrollbarWidth}px`;
            body.classList.add("overflow-hidden");
        } else {
            body.style.paddingRight = "";
            body.classList.remove("overflow-hidden");
        }

        return () => {
            body.style.paddingRight = "";
            body.classList.remove("overflow-hidden");
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        if (menuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setIsClosing(false);
            }, 400);
        } else {
            setMenuOpen(true);
        }
    };

    return (
        <section className="relative h-full w-full overflow-hidden bg-[#0a0a0f]">
            <div className={`transition-filter duration-500 ${menuOpen ? "blur-sm" : ""}`}>
                <div className="absolute inset-1 z-0 overflow-y-auto">
                    <Image
                        src="/Landing.svg"
                        alt="Hero Background"
                        fill
                        className="absolute h-screen object-cover object-top md:object-center opacity-60 transition-all duration-500"
                        priority
                    />
                </div>

                {/* Overlay layer */}
                <div className="absolute inset-0 z-[1]" />

                {/* Navbar */}
                <nav className="relative z-10 flex items-center justify-between px-5 md:px-12 lg:px-20 pt-6 md:pt-8">
                    <div className="flex items-center">
                        <Image
                            src="/Arcane logo.svg"
                            alt="Arcane Labs"
                            width={160}
                            height={40}
                            className="h-7 md:h-9 w-auto"
                            priority
                        />
                    </div>

                    <button
                        className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm font-medium tracking-wider"
                        onClick={toggleMenu}
                    >
                        <img src="/Menu.png" alt="Menu" className="h-7 w-auto md:h-8" />
                    </button>
                </nav>
                <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-100px)] px-6 md:px-12 lg:px-20">
                    <div className="max-w-[1400px] w-full">
                        <h1 className="text-white uppercase leading-tight">
              <span className="block text-left font-grotesk-inktrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                ARCANE BACKS
              </span>
                            <span className="block text-right font-grotesk-inktrap text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                YOUR FAVORITE
              </span>
                            <span className="block text-red-500 text-left font-pp-mondwest text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-2">
                CRYPTO PROJECTS
              </span>
                        </h1>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div
                    className={`
            absolute z-20 bg-[#b52d2d] text-white overflow-y-auto
            ${isClosing ? "animate-slide-out" : "animate-slide-in"}
            md:top-2 md:right-10 md:h-[calc(100%-1rem)] md:w-[25%] md:rounded-[10px]
            top-0 left-0 w-full h-full md:inset-auto
          `}
                >
                    <button
                        onClick={toggleMenu}
                        className="absolute top-5 right-6 text-white text-3xl md:top-8 md:right-8"
                    >
                        &times;
                    </button>
                    <div className="flex flex-col items-start space-y-4 text-white mt-20 md:mt-24 px-8 md:px-10">
                        {[
                            { num: "01", text: "ABOUT", href: "#about" },
                            { num: "02", text: "SERVICES", href: "#services" },
                            { num: "03", text: "WORK", href: "#work" },
                            { num: "04", text: "CASE STUDIES", href: "#case-studies" },
                            { num: "05", text: "IMPACT", href: "#impact" },
                            { num: "06", text: "CONTACT", href: "#contact" },
                        ].map((item) => (
                            <a
                                key={item.num}
                                href={item.href}
                                className="text-lg sm:text-xl font-medium tracking-wider hover:text-black transition-colors"
                                onClick={toggleMenu}
                            >
                                <span className="text-black pr-3">{item.num}</span> {item.text}
                                <p className="text-black mt-1">-------------------------------</p>
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-3 mb-10">
                        <Image
                            src="/MenuImage.svg"
                            alt="Menu Deco"
                            width={180}
                            height={180}
                            className="w-36 sm:w-44"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
