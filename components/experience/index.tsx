"use client";

import { useTranslations } from "next-intl";

import { Work, Education } from "@/types";

import { Badge } from "../ui/badge";

import { Timeline } from "./timeline";
import { CategoryTabs } from "./category-tabs";
import { ViewAllButton } from "./view-all-button";
import { MaxWidthWrapper } from "../max-width-wrapper";

import { useExperience } from "@/hooks/useExperience";

interface Props {
  workData?: Work[];
  educationData?: Education[];
}

export default function Experience({ workData, educationData }: Props) {
  const t = useTranslations("Experience");

  const defaultWorkData: Work[] = workData || (t.raw("work") as Work[]);
  const defaultEducationData: Education[] =
    educationData || (t.raw("education") as Education[]);

  const categoryTranslations = {
    work: t("workButton"),
    education: t("educationButton"),
  };

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
  } = useExperience(
    defaultWorkData,
    defaultEducationData,
    categoryTranslations
  );

  const handleViewAllClick = () => {
    setViewAll(!viewAll);
    if (viewAll) scrollToTop();
  };

  return (
    <section className="py-16 sm:py-20 md:py-24" id="experience">
      <MaxWidthWrapper>
        <div className="text-center">
          <Badge>{t("badge")}</Badge>
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
          <ViewAllButton
            isExpanded={viewAll}
            onClick={handleViewAllClick}
            viewAllText={t("viewAllButton")}
            gotItText={t("gotItButton")}
          />
        )}
      </MaxWidthWrapper>
    </section>
  );
}
