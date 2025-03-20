"use client";
import { Feature, Head } from "@/components";
import { useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState();
  const apiKey = "d67d8bebd0f4ff345f6505c99e9d0289";
  const popular =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  return (
    <div>
      <Head />
      <Feature />
    </div>
  );
}
