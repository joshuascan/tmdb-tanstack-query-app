import getQueryClient from "@/lib/query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import Movies from "./Movies";

export default function Page() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Movies />
    </HydrationBoundary>
  );
}
