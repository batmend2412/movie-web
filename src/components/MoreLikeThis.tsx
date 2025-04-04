"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { axiosInstance } from "../../next.config";
import { OneMovieCard } from "./OneMovieCard";
type OneMovieCardMoreLike = {
  poster_path: string;
  id: number;
  original_title: string;
  vote_average: string;
};
export const MoreLikeThis = () => {
  const [moreLike, setMoreLike] = useState<OneMovieCardMoreLike[]>([
    {
      poster_path: "",
      id: 0,
      original_title: "",
      vote_average: "",
    },
  ]);
  const { id } = useParams();
  const fetchMoreLikethis = async () => {
    const { data } = await axiosInstance.get(
      `movie/${id}/similar?language=en-US&page=1`
    );
    setMoreLike(data.results);
    useEffect(() => {
      fetchMoreLikethis();
    }, []);
  };
  const firstfivemovies = moreLike.slice(0, 5);
  return (
    <div>
      {firstfivemovies.map((el, i) => {
        return (
          <OneMovieCard
            key={i}
            id={el.id}
            rate={el.vote_average}
            movieImage={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
            movieName={el.original_title}
          />
        );
      })}
    </div>
  );
};
