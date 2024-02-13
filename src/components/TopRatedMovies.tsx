"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MovieCard from "./MovieCard";
import fetchOptions from "@/lib/fetchOptions";
import { flex, hstack, vstack } from "../../styled-system/patterns";
import { css, cva } from "../../styled-system/css";
import Header from "./Header";
import { styled } from "../../styled-system/jsx";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  vote_average: number;
};

const buttonStyle = cva({
  base: {
    borderWidth: "2px",
    borderRadius: "lg",
    borderColor: "blue.700",
    cursor: "pointer",
    _hover: { bg: "blue.700" },
    _active: { bg: "blue.900" },
  },
  variants: {
    size: {
      sm: {
        width: "24",
        padding: "1",
      },
      md: {
        width: "32",
        padding: "2",
      },
      lg: {
        padding: "3",
        width: "40",
      },
    },
  },
});

const Button = styled("button", buttonStyle);

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
          <Button
            size="md"
            onClick={() => handlePageChange(1)}
            disabled={page === 1}
          >
            First
          </Button>
          <Button
            size="lg"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </Button>

          <Button
            size="lg"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === data.total_pages}
          >
            Next
          </Button>
          <Button
            size="md"
            onClick={() => handlePageChange(data.total_pages)}
            disabled={page === data.total_pages}
          >
            Last
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
