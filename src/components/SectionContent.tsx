import Link from "next/link";
import { css } from "../../styled-system/css";
import { flex, hstack } from "../../styled-system/patterns";
import MovieCard from "./MovieCard";

type SectionContentProps = {
  data: any;
  title: string;
  href: string;
};

const sectionStyles = flex({
  justify: "space-between",
  align: "center",
  marginTop: 8,
  bg: "#90cea1",
  px: 8,
  py: 4,
  rounded: "md",
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
});

const SectionContent = ({ data, title, href }: SectionContentProps) => {
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
          data.results
            .slice(0, 3)
            .map((movie: any) => <MovieCard key={movie.id} {...movie} />)}
      </div>
    </div>
  );
};

export default SectionContent;
