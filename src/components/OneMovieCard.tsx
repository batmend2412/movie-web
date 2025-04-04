import Image from "next/image";
import Link from "next/link";

type OneMovieCardProps = {
  id: number;
  movieName: string;
  rate: string;
  movieImage: string;
};

export const OneMovieCard = ({
  id,
  movieName,
  rate,
  movieImage,
}: OneMovieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className="w-[260px] h-[500px] bg-gray-100 rounded-lg p-1 ">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movieImage}`}
          alt="zurag"
          width={250}
          height={400}
          className="rounded-lg"
        />
        <p className="flex">
          <img src="./star.svg" alt="" /> {rate}/10
        </p>
        <p>{movieName}</p>
      </div>
    </Link>
  );
};
