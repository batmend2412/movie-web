import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OneMovieCard } from "./OneMovieCard";
export const Upcoming = () => {
  return (
    <div className="flex flex-col">
      <OneMovieCard />
    </div>
  );
};
