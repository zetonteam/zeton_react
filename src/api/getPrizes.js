import useSWR, { useSWRConfig } from 'swr';
import { ENDPOINT } from '../const/endpoints.const';
import fetcher from './fetcher';
import getEndPointPath, { studentPrizes } from './endpoints';

const getPrizes = (student_id) => {
  const pathname = getEndPointPath(studentPrizes, { student_id });
  const { data, isLoading, error } = useSWR(pathname, fetcher.get);
  const { mutate } = useSWRConfig();

  return {
    prizes: data,
    isPrizesLoading: isLoading,
    isPrizesError: !!error,
    refresh() { mutate(pathname) }
  };
};

export { getPrizes };
