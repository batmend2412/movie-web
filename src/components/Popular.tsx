"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OneMovieCard } from "./OneMovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../next.config";
type MovieDataTypes = {
  title: string;
  poster_path: string;
  vote_average: number;
};
export const PopularMovie = () => {
  const [popularMovie, setPopularMovie] = useState<MovieDataTypes[]>([]);

  const fetchPopularMovie = async () => {
    const { data } = await axiosInstance.get(
      "movie/popular?language=en-US&page=1"
    );
    setPopularMovie(data.results);
  };
  useEffect(() => {
    fetchPopularMovie();
  }, []);
  console.log(popularMovie);
  const firsttenmovies = popularMovie.slice(0, 10);

  return (
    <div className="w-screen flex gap-8 flex-wrap p-7">
      <section className="w-screen flex justify-between items-center ">
        <p>"Popular"</p>
        <Button variant="outline">See more ...</Button>
      </section>
      <div className="flex gap-8 flex-wrap">
        {firsttenmovies.map((element, index) => {
          return (
            <OneMovieCard
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
