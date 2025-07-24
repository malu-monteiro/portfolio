"use client";

import Link from "next/link";

import Navbar from "../navbar";
import { PinkBackground } from "./pink-background";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { ParticlesBackground } from "./particles-background";

import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <Navbar />

      <main>
        <section
          className="relative overflow-hidden min-h-screen flex items-center"
          id="home"
        >
          <PinkBackground />

          <ParticlesBackground />

          {/* Main Content */}
          <div className="relative w-full z-10">
            <MaxWidthWrapper>
              <div className="mx-auto lg:ml-0 lg:max-w-3xl space-y-6">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-x-2 rounded-lg border px-3 py-1 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative block h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  <span className="inline font-mono">Available for work!</span>
                </div>

                {/* Title */}
                <h1 className="text-left font-extrabold">
                  Maria Luiza
                  <br />
                  <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400">
                    Full Stack Developer
                  </span>
                </h1>

                {/* Content */}
                <p className="max-w-2xl text-left text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque volutpat et mauris vel consequat. Suspendisse
                  risus neque, porta et massa at, ultrices sollicitudin nulla.
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button
                    asChild
                    size="hero"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    <Link href="#contact">Contact me</Link>
                  </Button>

                  <Button
                    asChild
                    size="hero"
                    variant="secondary"
                    className="w-full sm:w-auto"
                  >
                    <Link href="#cv">Download CV</Link>
                  </Button>
                </div>
              </div>
            </MaxWidthWrapper>
          </div>
        </section>
      </main>
    </>
  );
}
