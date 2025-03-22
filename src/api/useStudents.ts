import useSWR from 'swr';
import type { AxiosResponse } from 'axios';
import { ENDPOINT } from '../const/endpoints.const';
import axiosInstance from './axios';

type StudentObject = {
  pk: number;
  first_name?: string;
  total_points?: number;
};

type UseStudentObjectDataResponse = {
  students?: StudentObject[];
  isStudentsLoading: boolean;
  isStudentsError: boolean;
};

type GetStudentsByFetcher = {
  data: StudentObject[];
};

// adding SWR
// const fetcher = (...args: any) => fetch(...args as [any]).then((res) => res.json());
const fetcher = async (url: string): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);
const useStudents = (): UseStudentObjectDataResponse => {
  const { data, error, isLoading } = useSWR<GetStudentsByFetcher>(
    ENDPOINT.studentsList,
    fetcher
  );

  return {
    students: data?.data,
    isStudentsLoading: isLoading,
    isStudentsError: !!error,
  };
};

export { useStudents };
