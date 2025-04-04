"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "../../next.config";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaChevronRight } from "react-icons/fa";
type MovieDataTypes = {
  id: number;
  name: string;
};
export const MovieGenreBox = (onClick: any) => {
  const [genreSearch, setGenreSearch] = useState<MovieDataTypes[]>([]);
  const fetchgenreSearch = async () => {
    const { data } = await axiosInstance.get("genre/movie/list?language=en");
    setGenreSearch(data.genres);
  };
  useEffect(() => {
    fetchgenreSearch();
  }, []);
  const GenreButtonSlide = () => {};

  return (
    <div>
      <Popover>
        <PopoverTrigger>Genre</PopoverTrigger>
        <PopoverContent className="w-[530px] h-[333px] ">
          <p className="font-semibold text-2xl">Genres</p>
          <p className="font-medium text-[16px] mb-5">
            See lists of movies by genre
          </p>
          <div className="flex-wrap flex gap-[5px]">
            {genreSearch.map((element, index) => {
              return (
                <div
                  className="min-w-[115px] flex justify-evenly items-center p-[2px] border-2 border-[#E4E4E7] rounded-full hover:bg-gray-300 "
                  key={index}
                  onClick={onClick}
                >
                  {element.name}
                  <FaChevronRight />
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
