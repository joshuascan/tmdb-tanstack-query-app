"use client";

import { container } from "../../../styled-system/patterns";
import SectionContent from "@/components/SectionContent";
import LoadingPage from "@/components/LoadingPage";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { TvShowResponse } from "@/types";

const TvShows = () => {
  const {
    data: topRatedData,
    isLoading: isLoadingTopRated,
    isError: isErrorTopRated,
  } = useTMDBQuery<TvShowResponse>({
    key: ["topRatedTvShows"],
    endpoint: `/tv/top_rated?language=en-US`,
  });

  const {
    data: popularData,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = useTMDBQuery<TvShowResponse>({
    key: ["popularTvShows"],
    endpoint: `/tv/popular?language=en-US`,
  });

  if (isLoadingTopRated || isLoadingPopular) {
    return <LoadingPage />;
  }

  if (isErrorTopRated || isErrorPopular) {
    return <div>There was an error.</div>;
  }

  return (
    <div className={container({ my: 12 })}>
      <SectionContent
        data={topRatedData}
        title="Top Rated TV Shows"
        href="/tv/top-rated"
        type="tv"
      />
      <SectionContent
        data={popularData}
        title="Popular TV Shows"
        href="/tv/popular"
        type="tv"
      />
    </div>
  );
};

export default TvShows;
