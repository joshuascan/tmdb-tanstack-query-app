"use client";
import Link from "next/link";
import { css } from "../../styled-system/css";
import Image from "next/image";
import { center, hstack } from "../../styled-system/patterns";
import Header from "@/components/Header";

const styledLink = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "4xl",
  display: "inline-block",
  rounded: "md",
  bg: "#0d253f",
  textAlign: "center",
  _hover: {
    opacity: 0.8,
    transition: "0.3s",
  },
});

export default function Home() {
  return (
    <div className={hstack({ gap: 32, marginTop: 56, justify: "center" })}>
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
  );
}
