"use client";
import getQueryClient from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import MediaList from "@/components/MediaList";
import { MediaType } from "@/types";

export default function Page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MediaList
        endpoint="/tv/top_rated"
        queryKey="topRatedTvShows"
        mediaType={MediaType.Tv}
      />
    </HydrationBoundary>
  );
}
