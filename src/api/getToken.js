import useSWRMutation from "swr/mutation";
import fetcher from "./fetcher";
import { token } from "./endpoints";

const useAuthenticateUser = () => useSWRMutation(token, async (url, { arg }) => fetcher.post(url, arg));

export default useAuthenticateUser;
