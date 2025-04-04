"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ellipsis } from "lucide-react";

type MovieDataType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  poster_path: string;
  release_date: string;
};
export const NowPlayingMovieSlidePage = () => {
  //   const { movieId } = useParams();
  const [nowPlayingSlideData, setNowPlayingSlideData] = useState<
    MovieDataType[]
  >([]);

  const fetchNowPlayingSlideData = async () => {
    const { data } = await axiosInstance.get(
      "movie/now_playing?language=en-US&page=1&api_keyd67d8bebd0f4ff345f6505c99e9d0289"
    );
    setNowPlayingSlideData(data.results);
  };

  useEffect(() => {
    fetchNowPlayingSlideData();
  }, []);

  return (
    <div>
      <Carousel className=" h-[1000px]">
        <CarouselContent className="w-screen h-[900px]">
          {nowPlayingSlideData.slice(0, 5).map((element, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  className=" w-screen"
                  src={`https://image.tmdb.org/t/p/original${element.backdrop_path}`}
                ></img>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="flex absolute left-10 size-10" />
        <CarouselNext className="flex absolute right-10 size-10" />
      </Carousel>
    </div>
  );
};
