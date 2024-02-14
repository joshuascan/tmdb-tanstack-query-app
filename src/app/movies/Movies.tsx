"use client";

import fetchOptions from "@/lib/fetchOptions";
import { useQuery } from "@tanstack/react-query";
import { container } from "../../../styled-system/patterns";
import SectionContent from "@/components/SectionContent";
import LoadingPage from "@/components/LoadingPage";

const Movies = () => {
  const {
    data: topRatedData,
    isLoading: isLoadingTopRated,
    isError: isErrorTopRated,
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
  });

  const {
    data: popularData,
    isLoading: isLoadingPopular,
    isError: isErrorPopular,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
  });

  const {
    data: upcomingData,
    isLoading: isLoadingUpcoming,
    isError: isErrorUpcoming,
  } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US`,
        fetchOptions
      ).then((res) => res.json()),
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
