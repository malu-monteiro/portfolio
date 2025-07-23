"use client";

import Link from "next/link";

import Navbar from "../navbar";
import { MaxWidthWrapper } from "../max-width-wrapper";

import { Button } from "../ui/button";
import ParticlesBackground from "../ui/particles-background";

export default function Hero() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden min-h-screen flex items-center bg-black">
          {/* Background with gradient */}
          <div
            className="absolute inset-0 bg-[url('/PinkBackground.png')] bg-cover bg-center opacity-90 [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"
            aria-hidden="true"
          />

          {/* Particles */}
          <div className="absolute inset-0" aria-hidden="true">
            <ParticlesBackground />
          </div>

          {/* Main Content */}
          <div className="relative w-full z-10">
            <MaxWidthWrapper>
              <div className="inline-flex items-center gap-x-2 rounded-lg border px-3 py-1 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative block h-2 w-2 rounded-full bg-green-400" />
                </span>

                <span className="inline font-mono">Available for work!</span>
              </div>

              <div className="mx-auto lg:ml-0 lg:max-w-3xl">
                <div className="space-y-6">
                  {/* Title */}
                  <h1 className="text-left font-extrabold">
                    Maria Luiza
                    <br />
                    <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-400">
                      Full Stack Developer
                    </span>
                  </h1>

                  {/* Content */}
                  <div className="max-w-2xl">
                    <p className="text-left text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque volutpat et mauris vel consequat. Suspendisse
                      risus neque, porta et massa at, ultrices sollicitudin
                      nulla.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
                      <Button asChild size="hero" variant="primary">
                        <Link href="#contact">Contact me</Link>
                      </Button>

                      <Button asChild size="hero" variant="secondary">
                        <Link href="#cv">Download CV</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
          </div>
        </section>
      </main>
    </>
  );
}
