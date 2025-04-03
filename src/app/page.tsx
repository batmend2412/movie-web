import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Footer, Header, TopRatedMovie, Upcoming } from "@/components";
import { NowPlayingMovieSlidePage } from "@/components/NowPlayingSlide";
import { PopularMovie } from "@/components/Popular";
export default function Page() {
  return (
    <div className="flex flex-col w-screen">
      <div>
        <Header />
        <NowPlayingMovieSlidePage />
      </div>
      <div className="flex flex-col gap-4">
        <Upcoming />
        <PopularMovie />
        <TopRatedMovie />
      </div>
      <Footer />
    </div>
  );
}
