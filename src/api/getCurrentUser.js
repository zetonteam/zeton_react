import useSWR from "swr";
import { currentUser } from "./endpoints"
import fetcher from "./fetcher";

const useUser = () => {
  const { data, isLoading, error } = useSWR(
    currentUser,
    fetcher.get
  );

  return {
    user: data,
    isUserLoading: isLoading,
    isUserError: !!error,
  };
};

export { useUser };
