"use client";

import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import { flex } from "../../../../styled-system/patterns";
import Pagination from "@/components/Pagination";
import { Movie, MovieResponse } from "@/types";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { calculateTotalPages } from "@/utils/helperFunctions";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";

const UpcomingMovies = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useTMDBQuery<MovieResponse>({
    key: ["upcomingMovies", page],
    endpoint: `/movie/upcoming?language=en-US&page=${page}`,
  });

  const totalPages = calculateTotalPages(data?.total_pages);

  const loadingOrErrorComponent = useLoadingOrErrorComponent(
    isLoading,
    isError
  );
  if (loadingOrErrorComponent) return loadingOrErrorComponent;

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

export default UpcomingMovies;
