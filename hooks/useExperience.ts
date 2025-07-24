import { useState, useMemo, useCallback } from "react";

import { Work, Education } from "@/types";

export const useExperience = (workData: Work[], educationData: Education[]) => {
  const works = useMemo(() => [...workData].reverse(), [workData]);
  const educations = useMemo(
    () => [...educationData].reverse(),
    [educationData]
  );

  const categories = ["Work", "Education"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [viewAll, setViewAll] = useState(false);

  const filteredItems = useMemo(() => {
    return activeCategory === "Education" ? educations : works;
  }, [activeCategory, works, educations]);

  const currentType: "work" | "education" =
    activeCategory === "Work" ? "work" : "education";

  const filterByCategory = useCallback((category: string) => {
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
