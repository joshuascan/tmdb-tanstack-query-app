"use client";

import { useState } from "react";
import { flex } from "../../../../styled-system/patterns";
import Pagination from "@/components/Pagination";
import TvShowCard from "@/components/TvShowCard";
import LoadingPage from "@/components/LoadingPage";
import { TvShow, TvShowResponse } from "@/types";
import useTMDBQuery from "@/hooks/useTMDBQuery";

const TopRatedTvShows = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useTMDBQuery<TvShowResponse>({
    key: ["topRatedTvShows", page],
    endpoint: `/tv/top_rated?language=en-US&page=${page}`,
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
          data.results.map((tvShow: TvShow) => (
            <TvShowCard key={tvShow.id} {...tvShow} />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default TopRatedTvShows;
