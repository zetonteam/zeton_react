import useSWR from 'swr';
import { ENDPOINT } from '../const/endpoints.const';
import fetcher from './fetcher';
import fillPath from './fillPath';
import getEndPointPath, { studentTasks } from './endpoints';

const useTasks = (student_id) => {
  const { data, isLoading, error } = useSWR(getEndPointPath(studentTasks, { student_id }), fetcher.get);

  return {
    tasks: data,
    isTasksLoading: isLoading,
    isTasksError: !!error,
  };
};

export { useTasks };
