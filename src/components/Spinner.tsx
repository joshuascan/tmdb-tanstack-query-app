import { cva } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";

const spinnerStyles = cva({
  base: {
    borderRightColor: "#01b4e4",
    borderBottomColor: "#01b4e4",
    borderLeftColor: "#01b4e4",
    borderTopColor: "transparent",
    rounded: "full",
    animation: "spin 1s linear infinite",
  },
  variants: {
    size: {
      sm: {
        width: 8,
        height: 8,
        borderWidth: 4,
      },
      md: {
        width: 16,
        height: 16,
        borderWidth: 6,
      },
      lg: {
        width: 24,
        height: 24,
        borderWidth: 8,
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Spinner = styled("div", spinnerStyles);

export default Spinner;
