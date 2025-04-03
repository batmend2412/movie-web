"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "../../next.config";
import { useParams } from "next/navigation";
import Image from "next/image";
type MovieTypeData = {
  // id: number;
  // poster_path: string;
  // vote_average: number;
  original_title: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
};
export const OneMovieDetialsHeader = () => {
  const [movie, setMovie] = useState<MovieTypeData>({
    original_title: "",
    release_date: "",
    runtime: 0,
    vote_average: 0,
    vote_count: 0,
    poster_path: "",
    backdrop_path: "",
  });
  const { id } = useParams();
  const fetchOneMovieDetialsHeader = async () => {
    const { data } = await axiosInstance.get(`movie/${id}?language=en-US`);
    setMovie(data);
  };
  useEffect(() => {
    fetchOneMovieDetialsHeader();
  }, []);
  return (
    <div className=" flex flex-col gap-5">
      <div className="flex justify-between">
        <section>
          <p className="text-[36px] font-semibold">{movie.original_title}</p>
          <p>
            {movie.release_date}• PG •
            {Math.round(movie.runtime / 60).toFixed(1)}h
          </p>
        </section>
        <section className="flex flex-col items-center">
          <p className="font-[500]">Rating</p>
          <div className="flex ">
            <img src="/star.svg" alt="star" />
            <div>
              <p>
                {(Math.round(movie.vote_average * 100) / 100).toFixed(1)}/10
              </p>
              <p>{Math.round(movie.vote_count / 1000)}K</p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex w-[100%] gap-5">
        <img
          className="max-h-[400px] w-[25%]"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="poster"
        />
        <img
          className="max-h-[400px] w-[75%]"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="backfrop"
        />
      </div>
    </div>
  );
};
