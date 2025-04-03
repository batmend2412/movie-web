import { Header, MovieDescription, OneMovieDetialsHeader } from "@/components";
import React from "react";

function Detail() {
  return (
    <div className="px-[280px] flex flex-col gap-10">
      <Header />
      <OneMovieDetialsHeader />
      <MovieDescription />
    </div>
  );
}
export default Detail;
