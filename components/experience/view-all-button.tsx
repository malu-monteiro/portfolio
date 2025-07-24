interface ViewAllButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export const ViewAllButton = ({ isExpanded, onClick }: ViewAllButtonProps) => {
  const buttonClass =
    "bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-700 hover:shadow-xl transition-all";

  return (
    <div className="text-center mt-8">
      {isExpanded ? (
        <button onClick={onClick} className={buttonClass}>
          Okay, I got it
        </button>
      ) : (
        <button onClick={onClick} className={`${buttonClass} animate-bounce`}>
          View All
        </button>
      )}
    </div>
  );
};
