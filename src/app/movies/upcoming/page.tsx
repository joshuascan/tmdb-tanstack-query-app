"use client";
import getQueryClient from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import UpcomingMovies from "@/components/MovieCard";
import MediaList from "@/components/MediaList";
import { Movie } from "@/types";

export default function Page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MediaList<Movie>
        endpoint="/movie/upcoming"
        queryKey="upcomingMovies"
        cardComponent={UpcomingMovies}
      />
    </HydrationBoundary>
  );
}
