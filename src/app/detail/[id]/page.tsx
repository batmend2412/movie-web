import {
  MoreLikeThis,
  MovieDescription,
  OneMovieDetialsHeader,
} from "@/components";

import React from "react";

function Detail() {
  return (
    <div className="px-[280px] flex flex-col gap-10">
      <OneMovieDetialsHeader />
      <MovieDescription />
      <MoreLikeThis />
    </div>
  );
}
export default Detail;
