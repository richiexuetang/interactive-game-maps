import { useState } from "react";
import { CheckListIcon } from "./icons/check-list-icon";
import { Button } from "./ui/button";

export const ProgressTracker = () => {
  const [showTracker, setShowTracker] = useState(false);

  return (
    <div className="absolute top-28 right-2 z-[1000]">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setShowTracker(!showTracker)}
      >
        <CheckListIcon className="h-6 w-6" />
      </Button>
      {showTracker && <div className="h-24 min-w-44 bg-white">Tracker</div>}
    </div>
  );
};
