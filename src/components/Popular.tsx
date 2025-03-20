"use client";
import { use, useEffect, useState } from "react";
import axios from "axios"
export const PopularMovie = () => {
  const [movies, setMovies] = useState();
  const apiKey = "d67d8bebd0f4ff345f6505c99e9d0289";
  const popular =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    useEffect(()=>{fetchData()})
  const fetchData = () => {
    axios.get(`${popular}?api_key=${apiKey}`).then(response){

    };
  };
  return (
    <div className="w-[230px] h-[439px] flex flex-col">
      <div className="w-full h-[70]">
        <img src="" alt="" />
      </div>
      <div>
        <p>rate</p>
        <p>name</p>
      </div>
    </div>
  );
};
