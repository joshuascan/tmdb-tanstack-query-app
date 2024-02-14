import { css } from "../../styled-system/css";
import { center } from "../../styled-system/patterns";

const Spinner = () => {
  return (
    <div className={center({ mt: 80 })}>
      <div
        className={css({
          width: 16,
          height: 16,
          borderWidth: 6,
          borderRightColor: "#01b4e4",
          borderBottomColor: "#01b4e4",
          borderLeftColor: "#01b4e4",
          borderTopColor: "transparent",
          rounded: "full",
          animation: "spin 1s linear infinite",
        })}
      />
    </div>
  );
};

export default Spinner;
