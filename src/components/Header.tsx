import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaRegMoon } from "react-icons/fa6";
export const Head = () => {
  return (
    <div className="flex justify-between px-[16px] items-center w-full h-full py-2">
      <div>
        <img src="./Logo.svg" alt="Movielogo" />
      </div>
      <div className="flex items-center gap-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light"></SelectItem>
            <SelectItem value="dark"></SelectItem>
            <SelectItem value="system"></SelectItem>
          </SelectContent>
        </Select>

        <input
          type="text"
          placeholder="search..."
          className="bg-stone-50 rounded-[5px] p-1.5"
        />
      </div>
      <Button variant="outline" size="icon">
        <FaRegMoon className="bg-stone-50 border-s-black rounded-[10px] w-5 h-5" />
      </Button>
    </div>
  );
};
