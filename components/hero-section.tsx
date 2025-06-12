"use client";

import React from "react";
import Link from "next/link";
import { HeroHeader } from "./hero-header";
import { Button } from "./ui/button";
import ParticleBackground from "./particle-background";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main>
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div
            className="absolute inset-0 transform bg-[url('/PinkBackground.png')] bg-cover bg-center [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"
            aria-hidden="true"
          />

          <div className="absolute inset-0">
            <ParticleBackground />
          </div>

          <div className="relative w-full">
            <div className="mx-auto max-w-6xl px-6">
              <div className="mx-auto lg:ml-0 lg:w-1/2">
                <h1 className="relative text-left text-3xl sm:text-5xl md:text-6xl xl:text-8xl font-medium z-30">
                  Maria Luiza <br />
                  <span className="whitespace-nowrap">Software Developer</span>
                </h1>

                <p className="relative mt-6 sm:mt-8 text-left text-base sm:text-2xl text-white/60 z-30">
                  I love bringing ideas to life through real products and
                  experiences.
                </p>

                <div className="relative z-30 mt-8 sm:mt-12 flex flex-row items-center gap-3 justify-start w-full">
                  <Button asChild size="lg" className="px-6 h-12 text-lg">
                    <Link href="#link">
                      <span className="text-nowrap">Contact me</span>
                    </Link>
                  </Button>

                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-6 h-12 text-lg bg-white/15 backdrop-blur-[2.5px] overflow-hidden border border-white/20 hover:bg-white/20"
                  >
                    <Link href="#link">
                      <span className="text-nowrap text-white">
                        Download CV
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
