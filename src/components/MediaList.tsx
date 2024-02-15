import { useState } from "react";
import Pagination from "@/components/Pagination";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { calculateTotalPages } from "@/utils/helperFunctions";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";
import { flex } from "../../styled-system/patterns";

interface MediaItem {
  id: number;
}

interface MediaListProps<T extends MediaItem> {
  endpoint: string;
  queryKey: string;
  cardComponent: React.ComponentType<{ data: T }>;
}

const MediaList = <T extends MediaItem>({
  endpoint,
  queryKey,
  cardComponent: CardComponent,
}: MediaListProps<T>) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useTMDBQuery<{
    results: T[];
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
      <div className={flex({ justify: "center", wrap: "wrap", mt: 8 })}>
        {data?.results.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default MediaList;