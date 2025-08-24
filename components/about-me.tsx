import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Badge } from "./ui/badge";
import { PurpleGlowEffect } from "./ui/purple-glow-effect";

import { MaxWidthWrapper } from "./max-width-wrapper";

export default async function AboutMe() {
  const t = await getTranslations("AboutMe");
  const paragraphKeys = [
    "paragraph1",
    "paragraph2",
    "paragraph3",
    "paragraph4",
  ] as const;

  return (
    <section className="py-16 sm:py-20 md:py-24" id="about">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            <PurpleGlowEffect />
            <Image
              src="/about-image.png"
              alt={t("image_alt")}
              width={500}
              height={500}
              className="max-w-full h-auto object-contain relative z-10"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <Badge>{t("badge")}</Badge>

            <h2 className="font-light tracking-tighter text-shadow-2xs bg-gradient-to-r from-purple-100 to-purple-400 text-transparent bg-clip-text">
              {t("title")}
            </h2>

            <div className="space-y-4">
              {paragraphKeys.map((key) => (
                <p key={key} className="text-white/80 leading-relaxed">
                  {t(key)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
