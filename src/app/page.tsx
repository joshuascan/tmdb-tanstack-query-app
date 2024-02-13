"use client";
import Link from "next/link";
import { css } from "../../styled-system/css";
import Image from "next/image";
import { center, hstack, vstack } from "../../styled-system/patterns";

const styledLink = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "4xl",
  display: "inline-block",
  // width: 60,
  rounded: "md",
  // p: "3",
  bg: "#0d253f",
  textAlign: "center",
  _hover: {
    opacity: 0.8,
    transition: "0.3s",
  },
});

export default function Home() {
  return (
    <div>
      <div className={center({ bg: "#0d253f", p: 12 })}>
        <Image src="/tmdb-logo.svg" width={600} height={600} alt="TMDB Logo" />
      </div>
      <div className={hstack({ gap: 32, marginTop: 32, justify: "center" })}>
        <Link className={styledLink} href="/movies">
          <h2>Movies</h2>
          <Image
            className={css({ roundedBottom: "md" })}
            src="/movie-hero.webp"
            width={500}
            height={500}
            alt="movies"
          />
        </Link>

        <Link className={styledLink} href="/tv">
          <h2>TV Shows</h2>
          <Image
            className={css({ roundedBottom: "md" })}
            src="/tv-hero.webp"
            width={500}
            height={500}
            alt="movies"
          />
        </Link>
      </div>
    </div>
  );
}
