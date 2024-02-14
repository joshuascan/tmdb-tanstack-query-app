"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import fetchOptions from "@/lib/fetchOptions";
import { flex } from "../../../../styled-system/patterns";
import Pagination from "@/components/Pagination";
import LoadingPage from "@/components/LoadingPage";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

const UpcomingMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["upcomingMovies", page],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
        fetchOptions
      ).then((res) => res.json()),
  });

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
      <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default UpcomingMovies;
