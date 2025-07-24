import { Briefcase, GraduationCap } from "lucide-react";

import { Work, Education } from "@/types";

interface ExperienceCardProps {
  item: Work | Education;
  index: number;
  type: "work" | "education";
}

export const ExperienceCard = ({ item, index, type }: ExperienceCardProps) => {
  const isWork = type === "work";
  const Icon = isWork ? Briefcase : GraduationCap;

  const title = isWork ? (item as Work).company : (item as Education).institute;

  const subtitle = isWork
    ? (item as Work).position
    : (item as Education).degree;

  const isLeftSide = index % 2 === 0;

  return (
    <div
      className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${
        isLeftSide ? "md:flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 md:w-5/12" />

      <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-900 rounded-full ring-4 md:ring-8 ring-gray-800">
        <Icon
          className="text-base md:text-xl text-violet-400"
          size={16}
          strokeWidth={2}
        />
      </span>

      {/* Content */}
      <div className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-zinc-900 md:w-5/12 p-3 md:px-4 md:py-4 shadow-md">
        <h3 className="mb-2 font-medium text-lg md:text-xl text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-400 font-medium">
          {subtitle} | {item.duration}
        </p>
        <ul className="text-sm text-gray-300 mt-2 ml-4 list-disc">
          {item.desc?.map((description, i) => (
            <li key={`${type}-${index}-desc-${i}`} className="mb-0.5">
              {description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
