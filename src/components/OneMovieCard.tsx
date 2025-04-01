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
      <section>
        <p>{textView}</p>
        <Button variant="outline">Button</Button>
      </section>
      <div className="w-[230px] h-[500px] bg-gray-600">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movieImage}`}
          alt="zuragb"
          width={300}
          height={500}
        />
        <p className="flex">
          <img src="./star.svg" alt="" /> {rate}/10
        </p>
        <p>{MovieName}</p>
      </div>
    </div>
  );
};
