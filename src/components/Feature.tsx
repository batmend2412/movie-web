import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Feature = () => {
  return (
    <div className="w-full h-600px relative">
      <div className="h-1280px w-full absolute">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <p>Now playing</p>
        <p>movieName</p>
        <p>rate</p>
        <p>about</p>
        <Button variant="outline" size="icon">
          <ChevronRight />
        </Button>
        <Button>Button</Button>
      </div>
    </div>
  );
};
