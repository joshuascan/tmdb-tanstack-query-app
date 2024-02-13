import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { hstack, vstack } from "../../styled-system/patterns";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

const buttonStyles = cva({
  base: {
    borderWidth: "2px",
    rounded: "lg",
    borderColor: "blue.700",
    cursor: "pointer",
    _hover: { bg: "blue.700" },
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
    <div className={vstack({ my: 10, gap: 2 })}>
      <span>Page {page}</span>
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
