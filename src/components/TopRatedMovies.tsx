"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MovieCard from "./MovieCard";
import fetchOptions from "@/lib/fetchOptions";
import { flex, hstack, vstack } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import Header from "./Header";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
};

const buttonStyles = css({
  borderWidth: "2px",
  padding: "2",
  borderRadius: "lg",
  width: "32",
  borderColor: "blue.700",
  cursor: "pointer",
  _hover: { bg: "blue.700" },
  _active: { bg: "blue.900" },
});

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

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

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
      <div className={vstack({ my: 10, gap: 2 })}>
        <span>Page {page}</span>
        <div className={hstack({ gap: 4 })}>
          <button
            className={buttonStyles}
            onClick={() => handlePageChange(1)}
            disabled={page === 1}
          >
            First
          </button>
          <button
            className={buttonStyles}
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <button
            className={buttonStyles}
            onClick={() => handlePageChange(page + 1)}
            disabled={page === data.total_pages}
          >
            Next
          </button>
          <button
            className={buttonStyles}
            onClick={() => handlePageChange(data.total_pages)}
            disabled={page === data.total_pages}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
