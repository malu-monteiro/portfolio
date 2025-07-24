"use client";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { ToolsMarquee } from "./tools-marquee";

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <MaxWidthWrapper>
        <div className="space-y-6">
          <h2 className="text-center">Technology Stack</h2>

          <h3 className="font-light text-center">Some of my favourite tools</h3>

          <div className="mt-16">
            <ToolsMarquee />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
