"use client";

import { flex } from "../../../../styled-system/patterns";
import { useParams } from "next/navigation";
import MovieDetailsCard from "@/components/MovieDetailsCard";
import CastMemberCard from "@/components/CastMemberCard";
import { css } from "../../../../styled-system/css";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { CastDetails, CreditsResponse, MovieDetails } from "@/types";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const queryEnabled = id !== undefined;

  const {
    data: movieDetailsData,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
  } = useTMDBQuery<MovieDetails>({
    key: ["movieDetails", id],
    endpoint: `/movie/${id}`,
    enabled: queryEnabled,
  });

  const {
    data: movieCreditsData,
    isLoading: isLoadingMovieCredits,
    isError: isErrorMovieCredits,
  } = useTMDBQuery<CreditsResponse>({
    key: ["movieCredits", id],
    endpoint: `/movie/${id}/credits`,
    enabled: queryEnabled,
  });

  const isLoading = isLoadingMovieDetails || isLoadingMovieCredits;
  const isError = isErrorMovieDetails || isErrorMovieCredits;

  const loadingOrErrorComponent = useLoadingOrErrorComponent(
    isLoading,
    isError
  );
  if (loadingOrErrorComponent) return loadingOrErrorComponent;

  return (
    <div className={flex({ direction: "column" })}>
      <MovieDetailsCard {...movieDetailsData} />
      <div
        className={flex({
          direction: "column",
          align: "center",
          mt: 24,
        })}
      >
        <h2 className={css({ fontSize: "4xl", fontWeight: "bold" })}>Cast</h2>
        <div
          className={flex({
            justify: "center",
            wrap: "wrap",
            mt: 8,
            mb: 16,
            gap: 8,
            maxWidth: 1200,
          })}
        >
          {movieCreditsData && movieCreditsData.cast.length > 0 ? (
            movieCreditsData.cast
              .slice(0, 15)
              .map((castMember: CastDetails) => (
                <CastMemberCard key={castMember.id} {...castMember} />
              ))
          ) : (
            <p className={css({ fontSize: "lg", fontStyle: "italic" })}>
              There are no cast members to display.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
