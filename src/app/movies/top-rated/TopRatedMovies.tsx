"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import fetchOptions from "@/lib/fetchOptions";
import { flex } from "../../../../styled-system/patterns";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/Spinner";
import LoadingPage from "@/components/LoadingPage";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

const TopRatedMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["topRatedMovies", page],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
        fetchOptions
      ).then((res) => res.json()),
  });

  if (isLoading) return <LoadingPage />;
  if (isError) return <div>There was an error.</div>;

  return (
    <div className={flex({ direction: "column" })}>
      <Header />
      <div className={flex({ justify: "center", wrap: "wrap", mt: 8 })}>
        {data &&
          data.results.map((movie: Movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default TopRatedMovies;
