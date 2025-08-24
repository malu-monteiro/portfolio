import { getTranslations } from "next-intl/server";

import { MaxWidthWrapper } from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { ToolsMarquee } from "./tools-marquee";

export default async function TechStack() {
  const t = await getTranslations("TechStack");

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <MaxWidthWrapper className="space-y-6">
        <div className="text-center">
          <Badge>{t("badge")}</Badge>
        </div>

        <h2 className="font-light text-center tracking-tighter">
          {t("title")}
        </h2>

        <div className="mt-16">
          <ToolsMarquee />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
