import getQueryClient from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import TopRatedMovies from "./TopRatedMovies";

export default function Page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TopRatedMovies />
    </HydrationBoundary>
  );
}
