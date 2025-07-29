"use client";

import { Work, Education } from "@/types";

import { Badge } from "../ui/badge";

import { Timeline } from "./timeline";
import { CategoryTabs } from "./category-tabs";
import { ViewAllButton } from "./view-all-button";
import { MaxWidthWrapper } from "../max-width-wrapper";

import { useExperience } from "@/hooks/useExperience";

const defaultWorkData: Work[] = [
  {
    company: "Lorem Ipsum",
    position: "Lorem Ipsum",
    duration: "Jul 2023 - Aug 2024",
    desc: ["Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    company: "Lorem Ipsum",
    position: "Lorem Ipsum",
    duration: "Jul 2023 - Aug 2024",
    desc: ["Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    company: "Lorem Ipsum",
    position: "Lorem Ipsum",
    duration: "Jul 2023 - Aug 2024",
    desc: ["Lorem Ipsum", "Lorem Ipsum"],
  },
];
const defaultEducationData: Education[] = [
  {
    institute: "Lorem Ipsum",
    degree: "Lorem Ipsum",
    duration: "2019 - 2023",
    desc: ["Lorem Ipsum"],
  },
  {
    institute: "Lorem Ipsum",
    degree: "Lorem Ipsum",
    duration: "2019 - 2023",
    desc: ["Lorem Ipsum"],
  },
  {
    institute: "Lorem Ipsum",
    degree: "Lorem Ipsum",
    duration: "2019 - 2023",
    desc: ["Lorem Ipsum"],
  },
];

interface Props {
  workData?: Work[];
  educationData?: Education[];
}

export default function Experience({
  workData = defaultWorkData,
  educationData = defaultEducationData,
}: Props) {
  const {
    filteredItems,
    currentType,
    activeCategory,
    categories,
    viewAll,
    hasMoreItems,
    filterByCategory,
    setViewAll,
    scrollToTop,
  } = useExperience(workData, educationData);

  const handleViewAllClick = () => {
    setViewAll(!viewAll);
    if (viewAll) scrollToTop();
  };

  return (
    <section className="py-16 sm:py-20 md:py-24" id="experience">
      <MaxWidthWrapper>
        <div className="text-center">
          <Badge>Experience</Badge>
        </div>

        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={filterByCategory}
        />

        <Timeline
          items={filteredItems}
          type={currentType}
          limit={viewAll ? undefined : 2}
        />

        {hasMoreItems && (
          <ViewAllButton isExpanded={viewAll} onClick={handleViewAllClick} />
        )}
      </MaxWidthWrapper>
    </section>
  );
}
