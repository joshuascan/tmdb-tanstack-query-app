"use client";
import Image from "next/image";
import { css } from "../../styled-system/css";
import { vstack } from "../../styled-system/patterns";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";

type MovieCardProps = {
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

const MovieCard = ({
  title,
  release_date,
  overview,
  vote_average,
  poster_path,
}: MovieCardProps) => {
  const roundedNumber = Number(parseFloat(vote_average.toFixed(1)));
  const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(poster_path);

  return (
    <div
      className={vstack({
        width: "1/4",
        p: "8",
        margin: "4",
        rounded: "md",
        borderWidth: "1px",
        borderColor: "blue.500",
      })}
    >
      <Image
        src={poster_path ? `${IMAGE_URL}${poster_path}` : `${EMPTY_MOVIE_URL}`}
        width={500}
        height={750}
        alt={title}
      />
      <h2
        className={css({
          fontSize: "xl",
          fontWeight: "bold",
          textAlign: "center",
        })}
      >
        {title}
      </h2>
      <h3
        className={css({
          fontSize: "lg",
          fontWeight: "bold",
          textAlign: "center",
          color:
            roundedNumber < 5
              ? "red.500"
              : roundedNumber < 7
              ? "yellow.500"
              : "green.500",
        })}
      >
        {roundedNumber}
      </h3>
      <h3>{formattedDate}</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
