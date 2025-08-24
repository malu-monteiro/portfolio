import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { MaxWidthWrapper } from "./max-width-wrapper";

import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

type Link = {
  name: string;
  href: string;
};

type SocialLinkLabel = {
  label: string;
};

type LogoData = {
  alt: string;
  title: string;
};

type NavigationData = {
  title: string;
  links: Link[];
};

interface FooterProps {
  logo?: {
    url: string;
    src: string;
  };
}

const socialLinksData = [
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.linkedin.com/in/m-monteiro/",
  },
  {
    icon: <FaGithub className="size-5" />,
    href: "https://github.com/malu-monteiro",
  },
  {
    icon: <FaBehance className="size-5" />,
    href: "https://www.behance.net/malu-monteiro",
  },
];

export const Footer = async ({
  logo = {
    url: "https://github.com/malu-monteiro",
    src: "/logo.svg",
  },
}: FooterProps) => {
  const t = await getTranslations("Footer");

  const logoData = t.raw("logo") as LogoData;
  const navigationData = t.raw("navigation") as NavigationData;
  const socialLinksLabels = t.raw("socialLinks") as SocialLinkLabel[];
  const legalLinksData = t.raw("legalLinks") as Link[];

  return (
    <section className="py-32">
      <MaxWidthWrapper>
        <div className="container mx-auto">
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
            <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
              {/* Logo and Description Section */}
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo.url}>
                  <Image
                    src={logo.src}
                    alt={logoData.alt}
                    title={logoData.title}
                    width={40}
                    height={40}
                  />
                </a>

                <h2 className="text-xl font-semibold">{logoData.title}</h2>
              </div>

              <p className="max-w-[70%] text-sm text-muted-foreground">
                {t("description")}
              </p>

              <ul className="flex items-center space-x-6 text-muted-foreground">
                {socialLinksData.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a
                      href={social.href}
                      aria-label={socialLinksLabels[idx].label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Section */}
            <div className="flex w-full justify-start lg:justify-end">
              <div>
                <h3 className="mb-4 text-base font-bold leading-relaxed text-white sm:text-lg">
                  {navigationData.title}
                </h3>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  {navigationData.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
            role="separator"
          />

          {/* Footer Bottom */}
          <div className="flex flex-col justify-between gap-4 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
            <p className="order-2 lg:order-1">{t("copyright")}</p>
            <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
              {legalLinksData.map((link, idx) => (
                <li key={idx} className="hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
