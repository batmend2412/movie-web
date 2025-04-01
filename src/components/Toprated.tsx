import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OneMovieCard } from "./OneMovieCard";
export const Toprated = () => {
  return (
    <div>
      <OneMovieCard
        MovieName="HHa"
        textView="Top rated"
        rate={6}
        movieImage="/7NLY1jNwtZX1yVzwVoBeAhaBE8i.jpg"
      />
    </div>
  );
};
