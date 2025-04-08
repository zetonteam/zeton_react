import useSWR from 'swr';
import { ENDPOINT } from '../const/endpoints.const';
import fetcher from './fetcher';
import getEndPointPath, { studentPrizes } from './endpoints';

const getPrizes = (student_id) => {
  const { data, isLoading, error } = useSWR(getEndPointPath(studentPrizes, { student_id }), fetcher.get);

  return {
    prizes: data,
    isPrizesLoading: isLoading,
    isPrizesError: !!error,
  };
};

export { getPrizes };
