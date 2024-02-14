import Link from "next/link";
import { center } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";

const styledLink = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "4xl",
  _hover: {
    color: "gray.400",
  },
});

const Header = () => {
  return (
    <header
      className={center({
        gap: 16,
        w: "100vw",
        py: 6,
        bg: "#0d253f",
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
    </header>
  );
};

export default Header;
