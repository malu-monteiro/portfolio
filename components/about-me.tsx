"use client";

import Image from "next/image";

import { MaxWidthWrapper } from "./max-width-wrapper";

export default function AboutMe() {
  return (
    <section className="py-16 sm:py-20 md:py-24" id="about">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            {/* Purple Glow Effect */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[285px] h-[53px] bg-purple-600 rounded-full blur-[40px] z-20"
              aria-hidden="true"
            />

            <Image
              src="/aboutimg.png"
              alt="About me illustration"
              width={500}
              height={500}
              className="max-w-full h-auto object-contain relative z-10"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-x-2 rounded-lg border px-3 py-1 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="relative block h-2 w-2 rounded-full bg-purple-100" />
              </span>

              <span className="inline font-mono">About me</span>
            </div>

            <h3 className="font-light bg-gradient-to-r from-purple-100 to-purple-400 text-transparent bg-clip-text">
              Lorem ipsum dolor sit amet
            </h3>

            <div className="space-y-4">
              <p>
                Quisque condimentum vestibulum urna eget dapibus. In molestie,
                augue sed commodo tristique, sem lorem viverra ex, nec efficitur
                neque sapien ac nisl.
              </p>

              <p>
                Nam condimentum arcu vitae libero efficitur mattis. Fusce
                sodales sem quis nisi tincidunt, sit amet commodo nisi rhoncus.
              </p>

              <p>
                Etiam lacinia in dui et ultricies. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Morbi ac tincidunt arcu.
              </p>

              <p>
                Vestibulum non convallis enim, vel sollicitudin leo. Duis
                hendrerit eros vel elementum hendrerit.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
