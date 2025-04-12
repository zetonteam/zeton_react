import fetcher from './fetcher';
import getEndPointPath, { studentTask } from './endpoints';

const deleteTask = async (data) => fetcher.remove(getEndPointPath(studentTask, data));

export {
  deleteTask
};