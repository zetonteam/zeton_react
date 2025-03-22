import useSWR from 'swr';
import type { AxiosResponse } from 'axios';
import { ENDPOINT } from '../const/endpoints.const';
import axiosInstance from './axios';

type StudentByIdObject = {
  pk: number;
  first_name: string;
  total_points: number;
};

type UseStudentByIdObjectDataResponse = {
  student?: StudentByIdObject;
  isStudentLoading: boolean;
  isStudentError: boolean;
};

type GetStudentsByFetcher = {
  data: StudentByIdObject;
};

// adding SWR
const fetcher = async (url: string): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);

const useStudentById = (id: any): UseStudentByIdObjectDataResponse => {
  const { data, error } = useSWR<GetStudentsByFetcher>(
    ENDPOINT.studentId.replace('{:id}', id),
    fetcher
  );

  return {
    // student: data?.data.filter((item) => item.pk === id)[0],
    student: data?.data,
    isStudentLoading: !error && (!data || !data.data),
    isStudentError: !!error,
  };
};

export { useStudentById };
