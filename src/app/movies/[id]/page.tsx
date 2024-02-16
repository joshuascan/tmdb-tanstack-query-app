"use client";
import getQueryClient from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import MediaDetails from "@/components/MediaDetails";
import { MediaType } from "@/types";

export default function Page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MediaDetails mediaType={MediaType.Movie} />
    </HydrationBoundary>
  );
}
