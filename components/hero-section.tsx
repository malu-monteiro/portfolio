"use client";

import React from "react";

import Link from "next/link";

import { HeroHeader } from "./hero-header";

import { Button } from "./ui/button";
import { Container } from "./ui/container";
import ParticlesBackground from "./ui/particles-background";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main>
        <section className="relative overflow-hidden min-h-screen flex items-center bg-black">
          {/* Background with gradient */}
          <div
            className="absolute inset-0 bg-[url('/PinkBackground.png')] bg-cover bg-center opacity-90"
            style={{
              maskImage:
                "linear-gradient(to bottom, white 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, white 40%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* Particles */}
          <div className="absolute inset-0" aria-hidden="true">
            <ParticlesBackground />
          </div>

          {/* Main Content */}
          <div className="relative w-full z-10">
            <Container>
              <div className="mx-auto lg:ml-0 lg:max-w-3xl">
                {/* Title */}
                <h1 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight">
                  Maria Luiza <br />
                  <span className="whitespace-nowrap">Software Developer</span>
                </h1>

                {/* Content */}
                <div className="mt-6 sm:mt-8 max-w-2xl">
                  <p className="text-left text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque volutpat et mauris vel consequat. Suspendisse
                    risus neque, porta et massa at, ultrices sollicitudin nulla.
                  </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="px-8 h-12 text-base font-medium"
                  >
                    <Link href="#contact">Contact me</Link>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-8 h-12 text-base font-medium bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
                  >
                    <Link href="#cv" className="text-white">
                      Download CV
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
    </>
  );
}
