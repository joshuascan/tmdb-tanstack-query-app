"use client";
import { css } from "../../styled-system/css";
import { vstack } from "../../styled-system/patterns";

type MovieCardProps = {
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
};

const MovieCard = ({
  title,
  release_date,
  overview,
  vote_average,
}: MovieCardProps) => {
  const roundedNumber = Number(parseFloat(vote_average.toFixed(1)));
  const formattedDate = new Date(release_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={vstack({
        width: "1/4",
        padding: "8",
        margin: "4",
        borderRadius: "md",
        borderWidth: "1px",
        borderColor: "blue.500",
      })}
    >
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
