"use client";

import fetchOptions from "@/lib/fetchOptions";
import { useQuery } from "@tanstack/react-query";
import { container } from "../../../styled-system/patterns";
import SectionContent from "@/components/SectionContent";

const TvShows = () => {
  const {
    data: topRatedData,
    isLoading: isLoadingTopRated,
    isError: isErrorTopRated,
  } = useQuery({
    queryKey: ["topRatedTvShows"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
  });

  const {
    data: popularData,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = useQuery({
    queryKey: ["popularTvShows"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/tv/popular?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
  });

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
