import { center } from "../../styled-system/patterns";
import Spinner from "./Spinner";

const LoadingPage = () => {
  return (
    <div className={center({ mt: "400px" })}>
      <Spinner />
    </div>
  );
};

export default LoadingPage;
