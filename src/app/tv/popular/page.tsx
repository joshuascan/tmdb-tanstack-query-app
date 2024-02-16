"use client";
import getQueryClient from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import MediaList from "@/components/MediaList";

export default function Page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MediaList
        endpoint="/tv/popular"
        queryKey="popularTvShows"
        mediaType="tv"
      />
    </HydrationBoundary>
  );
}
