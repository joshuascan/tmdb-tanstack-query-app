"use client";
import Link from "next/link";
import { css } from "../../styled-system/css";
import ToDos from "@/components/ToDos";

export default function Home() {
  return (
    <div>
      <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
        Hello 🐼
      </div>
      <Link href="/movies">Movies</Link>
      <Link href="/tv">TV Shows</Link>
    </div>
  );
}
