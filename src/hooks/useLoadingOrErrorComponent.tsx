import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";

const useLoadingOrErrorComponent = (loading: boolean, error: boolean) => {
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage />;
  return null;
};

export default useLoadingOrErrorComponent;
