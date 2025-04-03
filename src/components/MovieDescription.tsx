"use client";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../next.config";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
type MovieTypeData = {
  overview: string;
};
type Cast = {
  name: string;
};
type Crew = {
  name: string;
  job: string;
  known_for_department: string;
};
type CrewDataType = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};
export const MovieDescription = () => {
  const [movie, setMovie] = useState<MovieTypeData>({
    overview: "",
  });
  const [credits, setCredits] = useState<CrewDataType>();
  const { id } = useParams();
  const fetchMovieDescription = async () => {
    const { data } = await axiosInstance.get(`movie/${id}?language=en-US`);
    setMovie(data);
  };
  const fetchCrewData = async () => {
    const { data } = await axiosInstance.get(
      `movie/${id}/credits?language=en-US`
    );
    setCredits(data);
  };

  useEffect(() => {
    fetchMovieDescription();
    fetchCrewData();
  }, []);
  const directors = credits?.crew?.filter((el) => el.job === "Director");
  const writers = credits?.crew?.filter(
    (el) => el.known_for_department === "Writing"
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="gap-4 flex">
        <Badge variant="outline">Fairy Tale</Badge>
        <Badge variant="outline">Pop Musical</Badge>
        <Badge variant="outline">Fantasy</Badge>
        <Badge variant="outline">Musical</Badge>
        <Badge variant="outline">Romance</Badge>
      </div>
      <p className="text-4 font-normal">{movie.overview}</p>
      <div>
        <p>Director</p>
        {directors?.map((director, index) => {
          return <span key={index}>{director.name}</span>;
        })}
      </div>
      <div>
        <p>Writers</p>
        {writers?.map((writer, index) => {
          return <span key={index}>{writer.name}</span>;
        })}
      </div>
    </div>
  );
};
