import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Feature, Header, Popular, Toprated, Upcoming } from "@/components";
export default function Page() {
  return (
    <div className="flex flex-col">
      <p className="text-pink-400 text-2xl flex justify-center items-center">
        Hairtai shuu bagshaa bas angiinhandaa vzvvleh ym danch alg hha ghde bvi
        hiine hha
      </p>
      <div>
        <Header />
        <Feature />
      </div>
      <Upcoming />
      <Popular />
      <Toprated />
    </div>
  );
}
