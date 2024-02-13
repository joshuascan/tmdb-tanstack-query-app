"use client";
import Link from "next/link";
import { css } from "../../styled-system/css";
import Image from "next/image";
import { center, container, vstack } from "../../styled-system/patterns";

const styledLink = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "4xl",
  display: "inline-block",
  width: 60,
  rounded: "lg",
  p: "3",
  bg: "#0d253f",
  textAlign: "center",
});

export default function Home() {
  return (
    <div>
      <div className={center({ bg: "#0d253f", p: 12 })}>
        <Image src="/tmdb-logo.svg" width={600} height={600} alt="TMDB Logo" />
      </div>
      <div className={vstack({ gap: 6, marginTop: 24 })}>
        <Link className={styledLink} href="/movies">
          Movies
        </Link>

        <Link className={styledLink} href="/tv">
          TV Shows
        </Link>
      </div>
    </div>
  );
}
