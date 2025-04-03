import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { MovieGenreBox } from "./MovieGenreBox";

export const Header = () => {
  return (
    <div className="flex w-full items-center p-4 justify-around">
      <img src="/Logo.svg" alt="logo"></img>
      <div className="w-fit flex gap-3">
        <div className="w-[97px] flex gap-2 rounded-md border-1 border-[#E4E4E7] shadow-sm p-3">
          <ChevronDown />
          <MovieGenreBox />
        </div>
        <div className="w-[379px] flex gap-[10px] rounded-md border-1 border-[#E4E4E7] shadow-sm p-3">
          <Search />
          <input className="outline-none"></input>
        </div>
      </div>
      <img src="/moon.svg" alt="darkMode"></img>
    </div>
  );
};
