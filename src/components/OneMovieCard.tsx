import Image from "next/image";
import { Button } from "@/components/ui/button";
export const OneMovieCard = ({
  textView,
  MovieName,
  rate,
  movieImage,
}: any) => {
  return (
    <div>
      <div className="w-[300px] h-[530px] bg-gray-100 rounded-lg p-2">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movieImage}`}
          alt="zuragb"
          width={300}
          height={400}
          className="rounded-lg"
        />
        <p className="flex">
          <img src="./star.svg" alt="" /> {rate}/10
        </p>
        <p>{MovieName}</p>
      </div>
    </div>
  );
};
