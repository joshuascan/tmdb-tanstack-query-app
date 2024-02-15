import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex, vstack } from "../../styled-system/patterns";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";
import { Movie } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Spinner from "./Spinner";
import { formatDate } from "@/utils/helperFunctions";

interface MovieCardProps {
  data: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { id, title, release_date, vote_average, poster_path } = data;
  const [isLoading, setIsLoading] = useState(true);
  const roundedNumber = Number(parseFloat(vote_average.toFixed(1)));

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={vstack({
        width: "350",
        margin: "8",
      })}
    >
      <Link href={`/movies/${id}`}>
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
          alt={title}
          onLoad={handleImageLoad}
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
                : "green.600",
          })}
        >
          {roundedNumber}
        </h3>
        <h3>{formatDate(release_date)}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
