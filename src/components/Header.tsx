import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
      <Link href="/tv">TV Shows</Link>
    </header>
  );
};

export default Header;
