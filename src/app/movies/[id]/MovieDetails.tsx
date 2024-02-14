"use client";

import { useQuery } from "@tanstack/react-query";
import fetchOptions from "@/lib/fetchOptions";
import { flex } from "../../../../styled-system/patterns";
import { useParams } from "next/navigation";
import MovieDetailsCard from "@/components/MovieDetailsCard";
import CastMemberCard from "@/components/CastMemberCard";
import { css } from "../../../../styled-system/css";
import LoadingPage from "@/components/LoadingPage";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const queryEnabled = id !== undefined;
  const {
    data: movieDetailsData,
    isLoading: isLoadingMovieDetails,
    isError: isErrorMovieDetails,
  } = useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () =>
      fetch(`https://api.themoviedb.org/3/movie/${id}`, fetchOptions).then(
        (res) => res.json()
      ),
    enabled: queryEnabled,
  });

  const {
    data: movieCreditsData,
    isLoading: isLoadingMovieCredits,
    isError: isErrorMovieCredits,
  } = useQuery({
    queryKey: ["movieCredits", id],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits`,
        fetchOptions
      ).then((res) => res.json()),
    enabled: queryEnabled,
  });

  if (isLoadingMovieDetails) return <LoadingPage />;
  if (isErrorMovieDetails) return <div>There was an error.</div>;

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
          {movieCreditsData &&
            movieCreditsData.cast
              .slice(0, 15)
              .map((castMember: any) => (
                <CastMemberCard key={castMember.id} {...castMember} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
