import useSWR, { useSWRConfig } from 'swr';
import { ENDPOINT } from '../const/endpoints.const';
import fetcher from './fetcher';
import fillPath from './fillPath';
import getEndPointPath, { studentTasks } from './endpoints';

const useTasks = (student_id) => {
  const pathname = getEndPointPath(studentTasks, { student_id });
  const { mutate } = useSWRConfig();

  const { data, isLoading, error } = useSWR(pathname, fetcher.get);

  return Object.freeze({
    tasks: data,
    isTasksLoading: isLoading,
    isTasksError: !!error,
    refresh() { mutate(pathname) }
  });
};

export { useTasks };
