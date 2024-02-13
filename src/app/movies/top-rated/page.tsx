import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TopRatedMovies from "@/components/TopRatedMovies";

export default function MoviePage() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["popularMovies"],
  //   queryFn: () =>
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  //     ).then((res) => res.json()),
  // });

  return (
    <>
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <TopRatedMovies />

      {/* </HydrationBoundary> */}
    </>
  );
}
