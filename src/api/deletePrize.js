import fetcher from './fetcher';
import getEndPointPath, { studentPrize } from './endpoints';

const deletePrize = async (data) => fetcher.remove(getEndPointPath(studentPrize, data));

export {
  deletePrize
};