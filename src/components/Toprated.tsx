"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OneMovieCard } from "./OneMovieCard";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/utils";
type MovieDataTypes = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
export const TopRatedMovie = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<MovieDataTypes[]>([]);

  const fetchTopRatedMovie = async () => {
    const { data } = await axiosInstance.get(
      "movie/top_rated?language=en-US&page=1"
    );
    setTopRatedMovies(data.results);
  };
  useEffect(() => {
    fetchTopRatedMovie();
  }, []);
  console.log(topRatedMovies, "TOP RATED");
  const firstTenMovies = topRatedMovies.slice(0, 10);
  return (
    <div className="w-screen flex gap-8 flex-wrap p-7">
      <section className="w-screen flex justify-between items-center ">
        <p>"Top Rated"</p>
        <Button variant="outline">See more ...</Button>
      </section>
      <div className="flex gap-8 flex-wrap">
        {firstTenMovies.map((element, index) => {
          return (
            <OneMovieCard
              id={element.id}
              key={index}
              MovieName={element.title}
              textView="Upcoming"
              rate={(Math.round(element.vote_average * 100) / 100).toFixed(1)}
              movieImage={element.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};
