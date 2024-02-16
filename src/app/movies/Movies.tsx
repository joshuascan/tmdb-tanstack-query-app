"use client";

import { container } from "../../../styled-system/patterns";
import SectionContent from "@/components/SectionContent";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { MediaType, MovieResponse } from "@/types";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";

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

  const isLoading = isLoadingTopRated || isLoadingPopular || isLoadingUpcoming;
  const isError = isErrorTopRated || isErrorPopular || isErrorUpcoming;

  const loadingOrErrorComponent = useLoadingOrErrorComponent(
    isLoading,
    isError
  );
  if (loadingOrErrorComponent) return loadingOrErrorComponent;

  return (
    <div className={container({ my: 12 })}>
      {topRatedData && (
        <SectionContent
          data={topRatedData}
          title="Top Rated Movies"
          href="/movies/top-rated"
          mediaType={MediaType.Movie}
        />
      )}
      {popularData && (
        <SectionContent
          data={popularData}
          title="Popular Movies"
          href="/movies/popular"
          mediaType={MediaType.Movie}
        />
      )}
      {upcomingData && (
        <SectionContent
          data={upcomingData}
          title="Upcoming Movies"
          href="/movies/upcoming"
          mediaType={MediaType.Movie}
        />
      )}
    </div>
  );
};

export default Movies;
