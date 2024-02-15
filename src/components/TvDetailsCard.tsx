import { TvShowDetails } from "@/types";
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

const TvDetailsCard = ({
  overview,
  poster_path,
  vote_average,
  name,
  first_air_date,
  last_air_date,
  number_of_episodes,
  number_of_seasons,
  genres,
}: TvShowDetails) => {
  const router = useRouter();
  const roundedNumber = Number(parseFloat(vote_average?.toFixed(1) ?? "0"));
  const genresList = genres?.map((genre) => genre.name).join(", ");
  const firstAirDate = first_air_date
    ? formatDate(first_air_date)
    : "Unavailable";
  const lastAirDate = last_air_date ? formatDate(last_air_date) : "N/A";

  return (
    <div className={container({ marginTop: 12 })}>
      <BackButton />
      <div className={hstack({ alignItems: "start", gap: 12, mt: 4 })}>
        <Image
          src={
            poster_path ? `${IMAGE_URL}${poster_path}` : `${EMPTY_MOVIE_URL}`
          }
          width={400}
          height={500}
          alt={name ?? "TV Show Poster"}
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
              {name}
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

          <h3 className={h3Styles}>
            {firstAirDate} - {lastAirDate}
          </h3>

          <h3 className={h3Styles}>{genresList}</h3>

          <h3 className={h3Styles}>Seasons: {number_of_seasons}</h3>
          <h3 className={h3Styles}>Episodes: {number_of_episodes}</h3>
          <p className={css({ fontSize: "lg", mt: 8 })}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default TvDetailsCard;
