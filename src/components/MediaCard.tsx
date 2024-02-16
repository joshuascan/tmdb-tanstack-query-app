import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex, vstack } from "../../styled-system/patterns";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";
import { MediaType, Movie, TvShow } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Spinner from "./Spinner";
import { formatDate } from "@/utils/helperFunctions";

interface MediaCardProps {
  data: Movie | TvShow;
  mediaType: MediaType;
}

const MediaCard: React.FC<MediaCardProps> = ({ data, mediaType }) => {
  const { id, vote_average, poster_path } = data;
  const title =
    mediaType === MediaType.Movie
      ? (data as Movie).title
      : (data as TvShow).name;
  const release_date =
    mediaType === MediaType.Movie
      ? (data as Movie).release_date
      : (data as TvShow).first_air_date;
  const [isLoading, setIsLoading] = useState(true);
  const roundedNumber = Number(parseFloat(vote_average.toFixed(1)));

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={css({
        margin: "8",
      })}
    >
      <Link href={`/movies/${id}`}>
        <div className={vstack({ w: 350 })}>
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
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
