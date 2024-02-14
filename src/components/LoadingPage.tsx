import { center } from "../../styled-system/patterns";
import Spinner from "./Spinner";

const LoadingPage = () => {
  return (
    <div className={center({ mt: "400px" })}>
      <Spinner size="lg" />
    </div>
  );
};

export default LoadingPage;
