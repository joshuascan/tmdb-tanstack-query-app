"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchOptions from "@/lib/fetchOptions";
import { flex } from "../../../../styled-system/patterns";
import Pagination from "@/components/Pagination";
import TvShowCard from "@/components/TvShowCard";
import LoadingPage from "@/components/LoadingPage";

type TvShow = {
  id: number;
  name: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

const TopRatedTvShows = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["topRatedTvShows", page],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${page}`,
        fetchOptions
      ).then((res) => res.json()),
  });

  if (isLoading) return <LoadingPage />;
  if (isError) return <div>There was an error.</div>;

  return (
    <div className={flex({ direction: "column" })}>
      <div className={flex({ justify: "center", wrap: "wrap", mt: 8 })}>
        {data &&
          data.results.map((tvShow: TvShow) => (
            <TvShowCard key={tvShow.id} {...tvShow} />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default TopRatedTvShows;
