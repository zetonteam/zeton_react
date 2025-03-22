import useSWR from "swr";
import { ENDPOINT } from "../const/endpoints.const";
import axiosInstance from "./axios";

const fetcher = async (url) => axiosInstance().get(url);

const useUser = () => {
  const { data, error, isLoading } = useSWR(
    ENDPOINT.currentUser,
    fetcher
  );

  return {
    user: data?.data?.username,
    isUserLoading: isLoading,
    isUserError: !!error,
  };
};

export { useUser };
