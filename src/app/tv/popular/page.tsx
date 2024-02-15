"use client";
import getQueryClient from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import PopularTvShows from "@/components/TvShowCard";
import MediaList from "@/components/MediaList";
import { TvShow } from "@/types";

export default function Page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MediaList<TvShow>
        endpoint="/tv/popular"
        queryKey="popularTvShows"
        cardComponent={PopularTvShows}
      />
    </HydrationBoundary>
  );
}
