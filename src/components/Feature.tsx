import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "@/components/ui/button";
export const Feature = () => {
  return (
    <div className="w-[screen] h-[600px] relative translate-0.5">
      <div className="flex flex-col items-center justify-center">
        {/* <Image
          src={
            "https://image.tmdb.org/t/p/original//8eifdha9GQeZAkexgtD45546XKx.jpg"
          }
          alt="zurag"
          width={1600}
          height={600}
        /> */}
        <div className="absolute top-0 left-0">
          <p>Now playing:</p>
          <p>Wicked</p>
          <p className="flex">
            <img src="./star.svg" alt="" /> 7/10
          </p>
          <p>about</p>
          <Button variant="outline">Button</Button>
        </div>
        <BsThreeDots className="absolute w-20 h-10 text-stone-50" />
      </div>
    </div>
  );
};
