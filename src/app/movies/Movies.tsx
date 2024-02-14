"use client";

import { container } from "../../../styled-system/patterns";
import SectionContent from "@/components/SectionContent";
import LoadingPage from "@/components/LoadingPage";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { MovieResponse } from "@/types";

const Movies = () => {
  const {
    data: topRatedData,
    isLoading: isLoadingTopRated,
    isError: isErrorTopRated,
  } = useTMDBQuery<MovieResponse>({
    key: ["topRatedMovies"],
    endpoint: `/movie/top_rated?language=en-US`,
  });

  const {
    data: popularData,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = useTMDBQuery<MovieResponse>({
    key: ["popularMovies"],
    endpoint: `/movie/popular?language=en-US`,
  });

  const {
    data: upcomingData,
    isLoading: isLoadingUpcoming,
    isError: isErrorUpcoming,
  } = useTMDBQuery<MovieResponse>({
    key: ["upcomingMovies"],
    endpoint: `/movie/upcoming?language=en-US`,
  });

  if (isLoadingTopRated || isLoadingPopular || isLoadingUpcoming) {
    return <LoadingPage />;
  }

  if (isErrorTopRated || isErrorPopular || isErrorUpcoming) {
    return <div>There was an error.</div>;
  }

  return (
    <div className={container({ my: 12 })}>
      <SectionContent
        data={topRatedData}
        title="Top Rated Movies"
        href="/movies/top-rated"
        type="movie"
      />
      <SectionContent
        data={popularData}
        title="Popular Movies"
        href="/movies/popular"
        type="movie"
      />
      <SectionContent
        data={upcomingData}
        title="Upcoming Movies"
        href="/movies/upcoming"
        type="movie"
      />
    </div>
  );
};

export default Movies;
