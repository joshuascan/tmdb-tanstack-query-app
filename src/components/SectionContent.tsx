import Link from "next/link";
import { css } from "../../styled-system/css";
import { flex, hstack } from "../../styled-system/patterns";
import MediaCard from "./MediaCard";

type MediaItem = {
  id: number;
};

type SectionContentProps = {
  data?: { results: MediaItem[] };
  title: string;
  href: string;
  mediaType: "movie" | "tv";
};

const sectionStyles = flex({
  justify: "space-between",
  align: "center",
  mt: 8,
  mb: 4,
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

const SectionContent = ({
  data,
  title,
  href,
  mediaType,
}: SectionContentProps) => {
  return (
    <div>
      <div className={sectionStyles}>
        <h2 className={h2Styles}>{title}</h2>
        <Link className={linkStyles} href={href}>
          See more
        </Link>
      </div>
      <div
        className={hstack({
          gap: 8,
          justify: "space-between",
          alignItems: "start",
        })}
      >
        {data &&
          data?.results
            .slice(0, 3)
            .map((item: any) => (
              <MediaCard key={item.id} data={item} mediaType={mediaType} />
            ))}
      </div>
    </div>
  );
};

export default SectionContent;
