import { useState } from "react";
import Pagination from "@/components/Pagination";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { calculateTotalPages } from "@/utils/helperFunctions";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";
import { flex } from "../../styled-system/patterns";
import BackButton from "./BackButton";
import MediaCard from "./MediaCard";
import { Movie, TvShow } from "@/types";

interface MediaListProps {
  endpoint: string;
  queryKey: string;
  mediaType: "movie" | "tv";
}

const MediaList = ({ endpoint, queryKey, mediaType }: MediaListProps) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useTMDBQuery<{
    results: (Movie | TvShow)[];
    total_pages?: number;
  }>({
    key: [queryKey, page],
    endpoint: `${endpoint}?language=en-US&page=${page}`,
  });

  const totalPages = calculateTotalPages(data?.total_pages);
  const loadingOrErrorComponent = useLoadingOrErrorComponent(
    isLoading,
    isError
  );

  if (loadingOrErrorComponent) return loadingOrErrorComponent;

  return (
    <div className={flex({ direction: "column" })}>
      <div
        className={flex({
          mt: 6,
          width: "90vw",
          mx: "auto",
          align: "center",
        })}
      >
        <BackButton />
      </div>
      <div className={flex({ justify: "center", wrap: "wrap" })}>
        {data?.results.map((item) => (
          <MediaCard key={item.id} data={item} mediaType={mediaType} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default MediaList;
