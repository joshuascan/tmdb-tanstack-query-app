"use client";
import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex, vstack } from "../../styled-system/patterns";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";
import { TvShow } from "@/types";
import { useState } from "react";
import Spinner from "./Spinner";
import Link from "next/link";

const TvShowCard = ({
  id,
  name,
  first_air_date,
  vote_average,
  poster_path,
}: TvShow) => {
  const [isLoading, setIsLoading] = useState(true);
  const roundedNumber = Number(parseFloat(vote_average.toFixed(1)));

  const formattedDate = new Date(first_air_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link href={`/tv/${id}`}>
      <div
        className={vstack({
          width: "350",
          margin: "8",
        })}
      >
        {isLoading && (
          <div
            className={flex({
              align: "center",
              height: "525px",
              position: "absolute",
            })}
          >
            <Spinner />
          </div>
        )}
        <Image
          src={
            poster_path ? `${IMAGE_URL}${poster_path}` : `${EMPTY_MOVIE_URL}`
          }
          width={350}
          height={525}
          alt={name}
          onLoad={handleImageLoad}
        />
        <h2
          className={css({
            fontSize: "lg",
            fontWeight: "bold",
            textAlign: "center",
          })}
        >
          {name}
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
                : "green.600",
          })}
        >
          {roundedNumber}
        </h3>
        <h3>{formattedDate}</h3>
      </div>
    </Link>
  );
};

export default TvShowCard;
