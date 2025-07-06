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
  { name: "Figma", url: "/figma.svg" },
  { name: "React", url: "/react.svg" },
  { name: "TypeScript", url: "/typescript.svg" },
  { name: "Next", url: "/next.svg" },
  { name: "Tailwind", url: "/tailwind.svg" },
  { name: "Node.js", url: "/node.svg" },
  { name: "Git", url: "/git.svg" },
  { name: "GitHub", url: "/github.svg" },
  { name: "PostgreSQL", url: "/pgsql.svg" },
  { name: "Insomnia", url: "/insomnia.svg" },
  { name: "Jest", url: "/jest.svg" },
];

const firstRow = TOOLS_SVG_DATA.slice(0, Math.ceil(TOOLS_SVG_DATA.length / 2));
const secondRow = TOOLS_SVG_DATA.slice(Math.ceil(TOOLS_SVG_DATA.length / 2));

const ToolCard = ({ name, url }: { name: string; url: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
        // dark styles
        "dark:border-zinc-50/[.1] dark:bg-zinc-50/[.10] dark:hover:bg-zinc-50/[.15]"
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
        <figcaption className="text-sm font-medium dark:text-white text-center">
          {name}
        </figcaption>
      </div>
    </figure>
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
