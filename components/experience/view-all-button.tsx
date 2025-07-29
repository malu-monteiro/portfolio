import { Button } from "../ui/button";

import { cn } from "../../lib/utils";

interface ViewAllButtonProps {
  isExpanded: boolean;
  onClick: () => void;
}

export const ViewAllButton = ({ isExpanded, onClick }: ViewAllButtonProps) => {
  return (
    <div className="text-center mt-8">
      <Button
        onClick={onClick}
        variant="violet"
        className={cn({
          "animate-bounce": !isExpanded,
        })}
      >
        {isExpanded ? "Okay, I got it" : "View All"}
      </Button>
    </div>
  );
};
