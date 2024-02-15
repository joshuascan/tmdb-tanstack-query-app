import { MovieDetails } from "@/types";
import { container, hstack, vstack } from "../../styled-system/patterns";
import Image from "next/image";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";
import { css } from "../../styled-system/css";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/helperFunctions";
import BackButton from "./BackButton";

const h3Styles = css({
  fontSize: "lg",
  fontStyle: "italic",
});

const MovieDetailsCard = ({
  budget,
  genres,
  title,
  overview,
  poster_path,
  release_date,
  revenue,
  runtime,
  vote_average,
}: MovieDetails) => {
  const router = useRouter();
  const roundedNumber = Number(parseFloat(vote_average?.toFixed(1) ?? "0"));
  const releaseDate = release_date
    ? formatDate(release_date)
    : "Unknown Release Date";
  const genresList = genres?.map((genre) => genre.name).join(", ");

  return (
    <div className={container({ marginTop: 12 })}>
      <BackButton />
      <div className={hstack({ alignItems: "start", gap: 12 })}>
        <Image
          src={
            poster_path ? `${IMAGE_URL}${poster_path}` : `${EMPTY_MOVIE_URL}`
          }
          width={400}
          height={500}
          alt={title ?? "Movie Poster"}
        />
        <div
          className={vstack({
            width: "600px",
            alignItems: "left",
            marginTop: 12,
          })}
        >
          <div className={hstack()}>
            <h1
              className={css({
                fontSize: "4xl",
                fontWeight: "bold",
              })}
            >
              {title}
            </h1>
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
          </div>
          <div className={hstack()}>
            <h3 className={h3Styles}>{releaseDate}</h3>
            <h3>|</h3>
            <h3 className={h3Styles}>{runtime} mins</h3>
            <h3>|</h3>
            <h3 className={h3Styles}>{genresList}</h3>
          </div>
          <h3 className={h3Styles}>Budget: ${budget?.toLocaleString()}</h3>
          <h3 className={h3Styles}>Revenue: ${revenue?.toLocaleString()}</h3>
          <p className={css({ fontSize: "lg", mt: 8 })}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
