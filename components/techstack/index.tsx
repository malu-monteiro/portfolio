import { MaxWidthWrapper } from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { ToolsMarquee } from "./tools-marquee";

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <MaxWidthWrapper className="space-y-6">
        <div className="text-center">
          <Badge>Technology Stack</Badge>
        </div>

        <h3 className="font-light text-center tracking-tighter">
          Some of my favourite tools
        </h3>

        <div className="mt-16">
          <ToolsMarquee />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
