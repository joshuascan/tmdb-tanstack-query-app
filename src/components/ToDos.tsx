"use client";

import { useQuery } from "@tanstack/react-query";

// export interface ToDo {

// }

const ToDos = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userToDos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>There was an error.</div>;

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default ToDos;
