import useSWR from 'swr';
import { type AxiosResponse } from 'axios';
import { ENDPOINT } from '../const/endpoints.const';
import axiosInstance from './axios';

type TaskObject = {
  id: number;
  name: string;
  value: number;
  student: number;
};

type UseTasksObjectDataResponse = {
  tasks?: TaskObject[];
  isTasksLoading: boolean;
  isTasksError: boolean;
};

type GetTasksByFetcher = {
  data: TaskObject[];
};

const fetcher = async (url: string): Promise<AxiosResponse<any>> =>
  axiosInstance().get(url);

const useTasks = (id?: string): UseTasksObjectDataResponse => {
  const { data, error } = useSWR<GetTasksByFetcher>(
    ENDPOINT.tasksList.replace('{:id}', id),
    fetcher
  );

  return {
    tasks: data?.data,
    isTasksLoading: !error && (!data || !data.data),
    isTasksError: !!error,
  };
};

export { useTasks };
