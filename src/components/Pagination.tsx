import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { flex, hstack } from "../../styled-system/patterns";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

const buttonStyle = cva({
  base: {
    borderWidth: "2px",
    borderRadius: "lg",
    borderColor: "blue.700",
    cursor: "pointer",
    _hover: { bg: "blue.700" },
    _active: { bg: "blue.900" },
  },
  variants: {
    size: {
      sm: {
        width: "24",
        padding: "1",
      },
      md: {
        width: "32",
        padding: "2",
      },
      lg: {
        padding: "3",
        width: "40",
      },
    },
  },
});

const Button = styled("button", buttonStyle);

const Pagination = ({ page, setPage, totalPage }: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className={flex({ justify: "center", wrap: "wrap" })}>
      <p>Page {page}</p>
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
          disabled={page === totalPage}
        >
          Next
        </Button>
        <Button
          size="md"
          onClick={() => handlePageChange(totalPage)}
          disabled={page === totalPage}
        >
          Last
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
