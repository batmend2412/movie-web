import { Input } from "@/components/ui/input";
import { FaMoon } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import { Feature, Header, Popular, Toprated, Upcoming } from "@/components";
export default function Page() {
  return (
    <div className="flex flex-col">
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
