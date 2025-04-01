import { Input } from "@/components/ui/input";
import { FaMoon } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="w-screen h-[59px] flex justify-between items-center px-4">
      <div className="flex items-center gap-2">
        <img src="./film.svg" alt="" />
        Movie Z
      </div>
      <Input className="w-[380px]" placeholder="Search ..." />
      <FaMoon className="border-gray-950 border-2 w-8 h-8 rounded-[10px]" />
    </div>
  );
};
