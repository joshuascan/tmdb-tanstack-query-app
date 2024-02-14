"use client";

import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import { flex } from "../../../../styled-system/patterns";
import Pagination from "@/components/Pagination";
import { Movie, MovieResponse } from "@/types";
import LoadingPage from "@/components/LoadingPage";
import useTMDBQuery from "@/hooks/useTMDBQuery";

const PopularMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useTMDBQuery<MovieResponse>({
    key: ["popularMovies", page],
    endpoint: `/movie/popular?language=en-US&page=${page}`,
  });

  const totalPages = data?.total_pages
    ? data.total_pages > 300
      ? 300
      : data.total_pages
    : 1;

  if (isLoading) return <LoadingPage />;
  if (isError) return <div>There was an error.</div>;

  return (
    <div className={flex({ direction: "column" })}>
      <div className={flex({ justify: "center", wrap: "wrap", mt: 8 })}>
        {data &&
          data.results.map((movie: Movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default PopularMovies;
