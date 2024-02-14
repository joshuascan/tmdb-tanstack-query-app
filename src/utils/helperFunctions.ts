export const calculateTotalPages = (totalPages: number | undefined) => {
  return totalPages ? Math.min(300, totalPages) : 1;
};
