import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type OneMovieCardProps = {
  id: number;
  MovieName: string;
  rate: string;
  movieImage: string;
  textView: string;
};

export const OneMovieCard = ({
  id,
  MovieName,
  textView,
  rate,
  movieImage,
}: OneMovieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className="w-[260px] h-[500px] bg-gray-100 rounded-lg p-1 ">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movieImage}`}
          alt="zuragb"
          width={250}
          height={400}
          className="rounded-lg"
        />
        <p className="flex">
          <img src="./star.svg" alt="" /> {rate}/10
        </p>
        <p>{MovieName}</p>
      </div>
    </Link>
  );
};
