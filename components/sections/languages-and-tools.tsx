"use client";

import { ToolsMarquee } from "../ui/marquee";

import { MaxWidthWrapper } from "../max-width-wrapper";

export default function LanguagesAndTools() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="skills">
      <MaxWidthWrapper>
        <div className="space-y-6">
          <h2 className="text-center">Languages and Tools</h2>
          <h3 className="font-light text-center">Lorem ipsum dolor sit amet</h3>

          <div className="mt-16">
            <ToolsMarquee />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
