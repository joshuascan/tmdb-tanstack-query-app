import { css, cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { hstack, vstack } from "../../styled-system/patterns";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

const buttonStyles = cva({
  base: {
    color: "white",
    fontWeight: "bold",
    borderWidth: "2px",
    rounded: "lg",
    bg: "#0d253f",
    cursor: "pointer",
    _hover: {
      bg: "#1d3e65",
      transition: "0.3s",
    },
    _active: { bg: "blue.900" },
  },
  variants: {
    size: {
      sm: {
        width: "24",
        p: "1",
      },
      md: {
        width: "32",
        p: "2",
      },
      lg: {
        p: "3",
        width: "40",
      },
    },
  },
});

const Button = styled("button", buttonStyles);

const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div
      className={vstack({
        paddingTop: 4,
        paddingBottom: 10,
        mt: 8,
        gap: 2,
        bg: "slate.200",
      })}
    >
      <p className={css({ fontWeight: "bold", fontSize: "xl", mb: 2 })}>
        Page {page}
      </p>
      <div className={hstack({ gap: 4 })}>
        <Button
          size="md"
          onClick={() => handlePageChange(1)}
          disabled={page === 1}
        >
          First
        </Button>
        <Button
          size="lg"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>

        <Button
          size="lg"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
        <Button
          size="md"
          onClick={() => handlePageChange(totalPages)}
          disabled={page === totalPages}
        >
          Last
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
