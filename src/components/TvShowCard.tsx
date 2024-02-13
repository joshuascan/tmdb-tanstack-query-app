"use client";
import Image from "next/image";
import { css } from "../../styled-system/css";
import { vstack } from "../../styled-system/patterns";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";

type TvShowCard = {
  title: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

const TvShowCard = ({
  title,
  first_air_date,
  overview,
  vote_average,
  poster_path,
}: TvShowCard) => {
  const roundedNumber = Number(parseFloat(vote_average.toFixed(1)));
  const formattedDate = new Date(first_air_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={vstack({
        width: "350",
        p: "4",
        margin: "4",
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
          fontSize: "lg",
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
          color: "white",
          display: "inline-block",
          rounded: "lg",
          px: "2",
          bgColor:
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
    </div>
  );
};

export default TvShowCard;
