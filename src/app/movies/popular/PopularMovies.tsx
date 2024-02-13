"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import fetchOptions from "@/lib/fetchOptions";
import { flex } from "../../../../styled-system/patterns";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>There was an error.</div>;

  return (
    <div className={flex({ direction: "column", align: "center" })}>
      <Header />
      <div className={flex({ justify: "center", wrap: "wrap" })}>
        {data &&
          data.results.map((movie: Movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default PopularMovies;
