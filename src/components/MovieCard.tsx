"use client";
import Image from "next/image";
import { css } from "../../styled-system/css";
import { vstack } from "../../styled-system/patterns";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";
import { Movie } from "@/types";
import Link from "next/link";

const MovieCard = ({
  id,
  title,
  release_date,
  vote_average,
  poster_path,
}: Movie) => {
  const roundedNumber = Number(parseFloat(vote_average.toFixed(1)));
  const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/movies/${id}`}>
      <div
        className={vstack({
          width: "350",
          margin: "8",
        })}
      >
        <Image
          src={
            poster_path ? `${IMAGE_URL}${poster_path}` : `${EMPTY_MOVIE_URL}`
          }
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
    </Link>
  );
};

export default MovieCard;
