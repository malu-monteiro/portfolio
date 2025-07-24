interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryTabs = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryTabsProps) => {
  return (
    <div className="w-fit mx-auto mt-6 p-2 bg-zinc-900 rounded-md flex gap-2 items-center shadow-md">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`py-2 px-4 rounded-md transition-colors ${
            activeCategory === category
              ? "bg-violet-600 text-white"
              : "hover:bg-zinc-700 text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
