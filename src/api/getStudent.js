import useSWR, { useSWRConfig } from 'swr';
import { ENDPOINT } from '../const/endpoints.const';
import fetcher from './fetcher';
import getEndPointPath, { student } from './endpoints';

const getStudent = (student_id) => {
  const pathname = getEndPointPath(student, { student_id });
  const { mutate } = useSWRConfig();

  const { data, isLoading, error, ...rest } = useSWR(
    pathname,
    fetcher.get
  );



  return {
    student: data,
    isStudentLoading: isLoading,
    refresh: () => mutate(pathname)
  };
};

export { getStudent };
