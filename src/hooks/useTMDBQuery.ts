import { UseQueryResult, useQuery } from "@tanstack/react-query";
import fetchOptions from "@/lib/fetchOptions";

type TMDBQueryParams = {
  key: (string | number)[];
  endpoint: string;
  enabled?: boolean;
};

const useTMDBQuery = <T>({
  key,
  endpoint,
  enabled = true,
}: TMDBQueryParams): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: key,
    queryFn: () =>
      fetch(`https://api.themoviedb.org/3${endpoint}`, fetchOptions).then(
        (res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        }
      ),
    enabled,
  });
};

export default useTMDBQuery;
