import React from "react";

import Image from "next/image";

import { Container } from "./ui/container";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="about">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Purple Glow */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            <div
              className="absolute z-0"
              style={{
                width: "285px",
                height: "53px",
                backgroundColor: "#7505FF",
                borderRadius: "100%",
                opacity: 1,
                filter: "blur(40px)",

                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              aria-hidden="true"
            />

            {/* Illustration */}
            <Image
              src="/aboutimg.png"
              alt="Illustration"
              width={500}
              height={500}
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Content Texts */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
              About me
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-purple-100 to-purple-400 text-transparent bg-clip-text">
              Lorem ipsum dolor sit amet
            </h3>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Quisque condimentum vestibulum urna eget dapibus. In molestie,
              augue sed commodo tristique, sem lorem viverra ex, nec efficitur
              neque sapien ac nisl.
            </p>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Nam condimentum arcu vitae libero efficitur mattis. Fusce sodales
              sem quis nisi tincidunt, sit amet commodo nisi rhoncus.
            </p>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Etiam lacinia in dui et ultricies. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Morbi
              ac tincidunt arcu.
            </p>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              Vestibulum non convallis enim, vel sollicitudin leo. Duis
              hendrerit eros vel elementum hendrerit.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
