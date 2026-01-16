import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { RxExternalLink } from "react-icons/rx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const DesktopCard = ({
  item,
  className,
}: {
  item: any;
  className?: string;
}) => (
  <HoverCard openDelay={200} closeDelay={200}>
    <HoverCardTrigger
      className={twMerge(
        "relative flex cursor-default items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-muted/50",
        className
      )}
    >
      <p className="font-semibold">{item.title}</p>
      <p className="text-muted-foreground">{item.description}</p>
      <hr className="grow opacity-30" />
      <p className="text-muted-foreground">{item.date}</p>
    </HoverCardTrigger>

    <HoverCardContent
      side="top"
      align="start"
      className="flex flex-col gap-4 p-4 rounded-3xl"
    >
      <Image
        src={item.detail.image}
        alt={item.title}
        width={300}
        height={150}
        className="rounded-2xl object-cover"
      />
      <hr />
      <a
        href={item.detail.link}
        target="_blank"
        className="group flex items-center justify-between"
      >
        <p className="font-semibold text-muted-foreground">Preview</p>
        <div className="flex gap-2 text-muted-foreground group-hover:underline">
          <p>{item.detail.linkLabel}</p>
          <RxExternalLink size={16} />
        </div>
      </a>
    </HoverCardContent>
  </HoverCard>
);
