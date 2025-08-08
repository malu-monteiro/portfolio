import Image from "next/image";

import { MaxWidthWrapper } from "./max-width-wrapper";

import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Navegação",
    links: [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.linkedin.com/in/m-monteiro/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub className="size-5" />,
    href: "https://github.com/malu-monteiro",
    label: "GitHub",
  },
  {
    icon: <FaBehance className="size-5" />,
    href: "https://www.behance.net/malu-monteiro",
    label: "Behance",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer = ({
  logo = {
    url: "https://github.com/malu-monteiro",
    src: "/logo.svg",
    alt: "logo",
    title: "malu-monteiro",
  },
  sections = defaultSections,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed interdum urna, id faucibus sapien. ",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Maria Luiza Monteiro. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
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
                    alt={logo.alt}
                    title={logo.title}
                    width={40}
                    height={40}
                  />
                </a>

                <h2 className="text-xl font-semibold">{logo.title}</h2>
              </div>

              <p className="max-w-[70%] text-sm text-muted-foreground">
                {description}
              </p>

              <ul className="flex items-center space-x-6 text-muted-foreground">
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Sections */}
            <div className="flex w-full justify-start lg:justify-end">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 text-base font-bold leading-relaxed text-white sm:text-lg">
                    {section.title}
                  </h3>

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
            role="separator"
          />

          {/* Footer Bottom */}
          <div className="flex flex-col justify-between gap-4 py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
            <p className="order-2 lg:order-1">{copyright}</p>
            <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
              {legalLinks.map((link, idx) => (
                <li key={idx} className="hover:text-primary">
                  <a href={link.href}> {link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
