import { Work, Education } from "@/types";

import { ExperienceCard } from "./experience-card";

interface TimelineProps {
  items: (Work | Education)[];
  type: "work" | "education";
  limit?: number;
}

export const Timeline = ({ items, type, limit }: TimelineProps) => {
  const itemsToShow = limit ? items.slice(0, limit) : items;

  return (
    <div className="mt-8">
      <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
        <div className="left-6 md:left-1/2 absolute border-opacity-20 bg-zinc-900 h-full border" />

        {itemsToShow.map((item, i) => {
          const title =
            type === "work"
              ? (item as Work).company
              : (item as Education).institute;

          return (
            <ExperienceCard
              key={`${type}-${i}-${title}`}
              item={item}
              index={i}
              type={type}
            />
          );
        })}
      </div>
    </div>
  );
};
