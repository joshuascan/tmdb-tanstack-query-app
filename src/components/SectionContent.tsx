import Link from "next/link";
import { css } from "../../styled-system/css";
import { flex, hstack } from "../../styled-system/patterns";
import MovieCard from "./MovieCard";
import TvShowCard from "./TvShowCard";

type SectionContentProps = {
  data: any;
  title: string;
  href: string;
  type: string;
};

const sectionStyles = flex({
  justify: "space-between",
  align: "center",
  marginTop: 8,
  bg: "slate.200",
  px: 8,
  py: 4,
});

const h2Styles = css({
  fontSize: "4xl",
  fontWeight: "bold",
});

const linkStyles = css({
  color: "white",
  fontWeight: "bold",
  fontSize: "md",
  height: "fit-content",
  rounded: "lg",
  p: "2",
  bg: "#0d253f",
  textAlign: "center",
  _hover: {
    bg: "#1d3e65",
    transition: "0.3s",
  },
  _active: { bg: "blue.900" },
});

const SectionContent = ({ data, title, href, type }: SectionContentProps) => {
  return (
    <div>
      <div className={sectionStyles}>
        <h2 className={h2Styles}>{title}</h2>
        <Link className={linkStyles} href={href}>
          See more
        </Link>
      </div>
      <div className={hstack({ gap: 8, justify: "space-between" })}>
        {data &&
          data.results.slice(0, 3).map((item: any) => {
            return type === "movie" ? (
              <MovieCard key={item.id} {...item} />
            ) : (
              <TvShowCard key={item.id} {...item} />
            );
          })}
      </div>
    </div>
  );
};

export default SectionContent;
