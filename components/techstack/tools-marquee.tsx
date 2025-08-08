import { ComponentPropsWithoutRef } from "react";

import Image from "next/image";

import { cn } from "../../lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Tools data
const TOOLS_SVG_DATA = [
  { name: "Figma", url: "/figma.svg", link: "https://www.figma.com/" },
  { name: "React", url: "/react.svg", link: "https://react.dev/" },
  {
    name: "TypeScript",
    url: "/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  { name: "Next.js", url: "/next.svg", link: "https://nextjs.org/" },
  {
    name: "Tailwind CSS",
    url: "/tailwind.svg",
    link: "https://tailwindcss.com/",
  },
  { name: "Node.js", url: "/node.svg", link: "https://nodejs.org/" },
  { name: "Git", url: "/git.svg", link: "https://git-scm.com/" },
  { name: "GitHub", url: "/github.svg", link: "https://github.com/" },
  {
    name: "PostgreSQL",
    url: "/pgsql.svg",
    link: "https://www.postgresql.org/",
  },
  { name: "Insomnia", url: "/insomnia.svg", link: "https://insomnia.rest/" },
  { name: "Jest", url: "/jest.svg", link: "https://jestjs.io/" },
];

const firstRow = TOOLS_SVG_DATA.slice(0, Math.ceil(TOOLS_SVG_DATA.length / 2));
const secondRow = TOOLS_SVG_DATA.slice(Math.ceil(TOOLS_SVG_DATA.length / 2));

interface ToolCardProps {
  name: string;
  url: string;
  link: string;
}

const ToolCard = ({ name, url, link }: ToolCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visitar a página de ${name}`}
    >
      <figure
        className={cn(
          "relative h-full w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
          "bg-primary hover:bg-primary/80"
        )}
      >
        <div className="flex flex-col items-center justify-center gap-3 h-full">
          <Image
            src={url}
            alt={`${name} icon`}
            width={40}
            height={40}
            className="object-contain"
          />
          <figcaption className="text-sm font-medium text-black text-center">
            {name}
          </figcaption>
        </div>
      </figure>
    </a>
  );
};

export function ToolsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black" />
    </div>
  );
}
