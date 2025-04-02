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
export const MovieGenreBox = () => {
  const [genreSearch, setGenreSearch] = useState<MovieDataTypes[]>([]);
  const fetchgenreSearch = async () => {
    const { data } = await axiosInstance.get(
      "movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
    );
    setGenreSearch(data.results);
  };
  useEffect(() => {
    fetchgenreSearch();
  }, []);
  console.log(genreSearch);
  return (
    <div>
      <Popover>
        <PopoverTrigger>Genre</PopoverTrigger>
        <PopoverContent className="w-[530px] h-[333px]">
          <p className="font-semibold text-2xl">Genres</p>
          <p className="font-medium text-[16px] mb-5">
            See lists of movies by genre
          </p>
          <div className="flex-wrap flex gap-[5px]">
            {genreSearch.map((element) => {
              return (
                <button className="min-w-[115px] flex justify-evenly p-[2px] border-2 border-[#E4E4E7] rounded-full">
                  {element.name}
                  <FaChevronRight />
                </button>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
