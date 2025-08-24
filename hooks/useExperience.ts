import { useState, useMemo, useCallback, useEffect } from "react";

import { Work, Education } from "@/types";

interface CategoryTranslations {
  work: string;
  education: string;
}

export const useExperience = (
  workData: Work[],
  educationData: Education[],
  categoryTranslations?: CategoryTranslations
) => {
  const works = useMemo(() => [...workData].reverse(), [workData]);
  const educations = useMemo(
    () => [...educationData].reverse(),
    [educationData]
  );

  const categories = useMemo(
    () => [
      categoryTranslations?.work || "Work",
      categoryTranslations?.education || "Education",
    ],
    [categoryTranslations]
  );

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    if (categories.length > 0 && !categories.includes(activeCategory)) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const filteredItems = useMemo(() => {
    const isEducation = activeCategory === categories[1];

    return isEducation ? educations : works;
  }, [activeCategory, works, educations, categories]);

  const currentType: "work" | "education" = useMemo(() => {
    const isEducation = activeCategory === categories[1];
    return isEducation ? "education" : "work";
  }, [activeCategory, categories]);

  const filterByCategory = useCallback((category: string) => {
    console.log("Filtering by category:", category);
    setActiveCategory(category);
    setViewAll(false);
  }, []);

  const scrollToTop = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return {
    filteredItems,
    currentType,
    activeCategory,
    categories,
    viewAll,
    hasMoreItems: filteredItems.length > 2,
    filterByCategory,
    setViewAll,
    scrollToTop,
  };
};
