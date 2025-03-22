import useSWRMutation from 'swr/mutation';
import axiosInstance from '../api/axios';

const postUserUrl = 'token-auth/';

const fetcher = async (url, { arg }) => axiosInstance().post(url, arg);

const useAuthenticateUser = () => useSWRMutation(postUserUrl, fetcher);

export default useAuthenticateUser;
