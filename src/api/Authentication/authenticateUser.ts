import useSWRMutation from 'swr/mutation';
import { type AxiosResponse } from 'axios';
import axiosInstance from '../axios.ts';

type AuthenticateResponse = {
  access: string;
};

type AuthenticateBody = {
  username: string;
  password: string;
};

const postUserUrl = 'token-auth/';
const fetcher = async (
  url: string,
  { arg }: { arg: AuthenticateBody }
): Promise<AxiosResponse<AuthenticateResponse>> =>
  axiosInstance().post(url, arg);

const useAuthenticateUser = () => useSWRMutation(postUserUrl, fetcher);

export default useAuthenticateUser;
