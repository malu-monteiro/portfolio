import Link from "next/link";
import { getTranslations } from "next-intl/server";

import Navbar from "../navbar";
import { PinkBackground } from "./pink-background";
import { MaxWidthWrapper } from "../max-width-wrapper";
import { ParticlesBackground } from "./particles-background";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default async function Hero() {
  const t = await getTranslations("Hero");

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
                <Badge variant="status">{t("badge")}</Badge>

                {/* Title */}
                <h1 className="text-left font-extrabold tracking-tighter">
                  {t.rich("title", {
                    br: () => <br />,
                    gradient: (chunks) => (
                      <span className="whitespace-nowrap text-shadow-2xs text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">
                        {chunks}
                      </span>
                    ),
                  })}
                </h1>

                {/* Content */}
                <p className="max-w-2xl text-left text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                  {t("description")}
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Button
                    asChild
                    size="hero"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    <Link href="#contact">{t("cta.contact")}</Link>
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
