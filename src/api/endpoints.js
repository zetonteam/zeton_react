const baseUrl = process.env.VITE_REACT_APP_API_URL;

export const currentUser = `${baseUrl}/api/current-user`;
export const students = `${baseUrl}/api/students`;
export const student = `${students}/:student_id`
export const studentPoints = `${student}/points/`; // tylko api
export const studentPrizes = `${student}/prizes/`;
export const studentPrize = `${student}/prize/:prize_id/`;
export const studentTask = `${student}/task/:task_id/`;
export const studentTasks = `${student}/tasks/`;
export const token = `${baseUrl}/api/token-auth/`;

export const apiEndPoints = {
  currentUser,
  student,
  studentPoints,
  studentPrize,
  studentPrizes,
  students,
  studentTask,
  studentTasks,
  token
};


function getEndPointPath(pathname, params) {
  const path = apiEndPoints?.[pathname] ?? pathname;

  if (!params) {
    return path;
  }

  return path.replace(/[:*](\w+)/g, ($0, $1) => params[$1] ?? $0);
}

export default getEndPointPath;