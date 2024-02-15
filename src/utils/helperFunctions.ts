export const calculateTotalPages = (totalPages: number | undefined) => {
  return totalPages ? Math.min(300, totalPages) : 1;
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
