"use client";

import { useState } from "react";
import { flex } from "../../../../styled-system/patterns";
import Pagination from "@/components/Pagination";
import TvShowCard from "@/components/TvShowCard";
import { TvShow, TvShowResponse } from "@/types";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { calculateTotalPages } from "@/utils/helperFunctions";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";

const TopRatedTvShows = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useTMDBQuery<TvShowResponse>({
    key: ["topRatedTvShows", page],
    endpoint: `/tv/top_rated?language=en-US&page=${page}`,
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
          data.results.map((tvShow: TvShow) => (
            <TvShowCard key={tvShow.id} {...tvShow} />
          ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default TopRatedTvShows;
