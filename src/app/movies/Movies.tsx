"use client";

import Header from "@/components/Header";
import fetchOptions from "@/lib/fetchOptions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
  container,
  flex,
  hstack,
  vstack,
} from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";
import MovieCard from "@/components/MovieCard";

const h2Styles = css({
  fontSize: "4xl",
  fontWeight: "bold",
  mb: 4,
});

const styledLink = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "md",
  // display: "inline-block",
  // width: 60,
  height: "fit-content",
  rounded: "lg",
  p: "2",
  bg: "#0d253f",
  textAlign: "center",
});

const Movies = () => {
  const {
    data: topRatedData,
    isLoading: isLoadingTopRated,
    isError: isErrorTopRated,
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
  });

  const {
    data: popularData,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
  });

  const {
    data: upcomingData,
    isLoading: isLoadingUpcoming,
    isError: isErrorUpcoming,
  } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
  });

  return (
    <div>
      <Header />
      <div className={container({ my: 12 })}>
        <div>
          <div
            className={flex({
              justify: "space-between",
              align: "center",
              marginTop: 8,
            })}
          >
            <h2 className={h2Styles}>Top Rated Movies</h2>
            <Link className={styledLink} href="/movies/top-rated">
              See more
            </Link>
          </div>
          <div className={hstack({ gap: 8, justify: "space-between" })}>
            {topRatedData &&
              topRatedData.results
                .slice(0, 3)
                .map((movie: any) => <MovieCard key={movie.id} {...movie} />)}
          </div>
        </div>
        <div>
          <div
            className={flex({
              justify: "space-between",
              align: "center",
              marginTop: 8,
            })}
          >
            <h2 className={h2Styles}>Popular Movies</h2>
            <Link className={styledLink} href="/movies/popular">
              See more
            </Link>
          </div>
          <div className={hstack({ gap: 16, justify: "space-between" })}>
            {popularData &&
              popularData.results
                .slice(0, 3)
                .map((movie: any) => <MovieCard key={movie.id} {...movie} />)}
          </div>
        </div>
        <div>
          <div
            className={flex({
              justify: "space-between",
              align: "center",
              marginTop: 8,
            })}
          >
            <h2 className={h2Styles}>Upcoming Movies</h2>
            <Link className={styledLink} href="/movies/upcoming">
              See more
            </Link>
          </div>
          <div className={hstack({ gap: 8, justify: "space-between" })}>
            {popularData &&
              popularData.results
                .slice(0, 3)
                .map((movie: any) => <MovieCard key={movie.id} {...movie} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
