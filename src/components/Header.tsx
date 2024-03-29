import Link from "next/link";
import { flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import Image from "next/image";

const styledLink = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "22px",
  textTransform: "uppercase",
  _hover: {
    color: "gray.400",
  },
});

const Header = () => {
  return (
    <header
      className={flex({
        justify: "space-between",
        bg: "#0d253f",
        w: "100vw",
        position: "sticky",
        top: 0,
        zIndex: 10,
      })}
    >
      <Link
        className={flex({ align: "center" })}
        href={"https://developer.themoviedb.org/docs/getting-started"}
        target="_blank"
      >
        <Image
          className={css({ ml: 8 })}
          src="/tmdb-logo.svg"
          width={200}
          height={26}
          alt="TMDB Logo"
          priority
        />
      </Link>
      <div
        className={flex({
          gap: 24,
          py: 6,
          align: "center",
        })}
      >
        <Link className={styledLink} href="/">
          Home
        </Link>
        <span className={css({ color: "white", fontSize: "2xl" })}>|</span>
        <Link className={styledLink} href="/movies">
          Movies
        </Link>
        <span className={css({ color: "white", fontSize: "2xl" })}>|</span>
        <Link className={styledLink} href="/tv">
          TV Shows
        </Link>
      </div>
      <div className={css({ width: "200px", mr: 8 })} />
    </header>
  );
};

export default Header;
