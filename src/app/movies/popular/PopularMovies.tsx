"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import fetchOptions from "@/lib/fetchOptions";
import { flex } from "../../../../styled-system/patterns";

import Pagination from "@/components/Pagination";
import { Movie } from "@/types";

import LoadingPage from "@/components/LoadingPage";

const PopularMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popularMovies", page],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        fetchOptions
      ).then((res) => res.json()),
  });

  const totalPages = data?.total_pages > 300 ? 300 : data?.total_pages;

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
