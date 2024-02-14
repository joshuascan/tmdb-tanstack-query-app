import Link from "next/link";
import { center, flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import Image from "next/image";

const styledLink = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "2xl",
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
      })}
    >
      <Image
        className={css({ ml: 8 })}
        src="/tmdb-logo.svg"
        width={200}
        height={50}
        alt="TMDB Logo"
      />
      <div
        className={flex({
          gap: 16,
          py: 6,
        })}
      >
        <Link className={styledLink} href="/">
          Home
        </Link>
        <Link className={styledLink} href="/movies">
          Movies
        </Link>
        <Link className={styledLink} href="/tv">
          TV Shows
        </Link>
      </div>
      <div className={css({ width: "200px", mr: 8 })} />
    </header>
  );
};

export default Header;
