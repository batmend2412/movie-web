"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OneMovieCard } from "./OneMovieCard";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/utils";
type MovieDataTypes = {
  id: number;
  title: string;
  textview: string;
  poster_path: string;
  vote_average: number;
};
export const Upcoming = () => {
  const [upcomingMovie, setUpcomingMovie] = useState<MovieDataTypes[]>([]);

  const fetchUpcoming = async () => {
    const { data } = await axiosInstance.get(
      "movie/upcoming?language=en-US&page=1"
    );
    setUpcomingMovie(data.results);
  };
  useEffect(() => {
    fetchUpcoming();
  }, []);
  console.log(upcomingMovie, "UPCOMING");
  const firsttenmovies = upcomingMovie.slice(0, 10);
  return (
    <div className="w-screen flex gap-8 flex-wrap p-7 ">
      <section className="w-screen flex justify-between items-center ">
        <p>"Upcoming"</p>
        <Button variant="outline">See more ...</Button>
      </section>
      <div className="flex gap-8 flex-wrap">
        {firsttenmovies.map((element, index) => {
          return (
            <OneMovieCard
              id={element.id}
              key={index}
              textView="Upcoming"
              MovieName={element.title}
              rate={(Math.round(element.vote_average * 100) / 100).toFixed(1)}
              movieImage={element.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};
