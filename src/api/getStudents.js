import useSWR from 'swr';
import { ENDPOINT } from '../const/endpoints.const';
import fetcher from './fetcher';
import { students } from './endpoints';

const getStudents = () => {
  const { data, error, isLoading } = useSWR(
    students,
    fetcher.get
  );

  return {
    students: data,
    isStudentsLoading: isLoading,
    isStudentsError: !!error,
  };
};

export { getStudents };
