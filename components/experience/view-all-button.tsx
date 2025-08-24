import { Button } from "../ui/button";

import { cn } from "../../lib/utils";

interface ViewAllButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  viewAllText: string;
  gotItText: string;
}

export const ViewAllButton = ({
  isExpanded,
  onClick,
  viewAllText,
  gotItText,
}: ViewAllButtonProps) => {
  return (
    <div className="text-center mt-8">
      <Button
        onClick={onClick}
        variant="violet"
        className={cn({
          "animate-bounce": !isExpanded,
        })}
      >
        {isExpanded ? gotItText : viewAllText}
      </Button>
    </div>
  );
};
