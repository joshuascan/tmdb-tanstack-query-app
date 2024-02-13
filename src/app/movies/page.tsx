import Header from "@/components/Header";
import Link from "next/link";

const MoviesPage = () => {
  return (
    <div>
      <Header />
      <Link href="/movies/top-rated">Top Rated Movies</Link>
    </div>
  );
};

export default MoviesPage;
