"use client";

import { twMerge } from "tailwind-merge";
import { RxExternalLink } from "react-icons/rx";

export const MobileCard = ({
  item,
  className,
}: {
  item: any;
  className?: string;
}) => (
  <div
    className={twMerge(
      "relative flex flex-col gap-2 rounded-lg px-2 py-1.5",
      className
    )}
  >
    <div className="flex w-full items-center gap-2.5">
      <p className="font-semibold">{item.title}</p>
      <hr className="grow opacity-30" />
      <p className="text-muted-foreground">{item.date}</p>
    </div>

    <div className="flex items-end justify-between gap-2">
      <p className="text-sm text-muted-foreground">{item.description}</p>
      <a
        href={item.detail.link}
        className="flex gap-2 rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
      >
        {item.detail.linkLabel} <RxExternalLink size={14} />
      </a>
    </div>
  </div>
);
