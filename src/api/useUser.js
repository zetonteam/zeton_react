import { MOCK_ENDPOINTS } from "../const/endpoints.const";
import useSWR from "swr";

// adding SWR
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useUser = () => {
  const { data, error } = useSWR(MOCK_ENDPOINTS.currentUser, fetcher);

  return {
    user: data?.user,
    isLoading: !error && (!data || !data.user),
    isError: error,
  };
};

export { useUser };
