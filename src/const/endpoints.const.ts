const BASE_URL = process.env.VITE_REACT_APP_API_URL;

const API_ENDPOINTS = {
  currentUser: BASE_URL + "/api/current-user/",
  studentsList: BASE_URL + "/api/students/",
  tasksList: BASE_URL + "/api/students/{:id}/tasks/",
  studentId: BASE_URL + "/api/students/{:id}",
  prizesId: BASE_URL + "/api/students/{:id}/prizes/",
};

const MOCK_ENDPOINTS = {
  currentUser: '/mock/defaultCurrentUserData.json',
  studentsList: '/mock/defaultClientsData.json',
  studentId: '/mock/defaultClientsData.json',
  prizesList: '/mock/defaultPrizesData.json',
  tasksList: '/mock/defaultTasksData.json',
  prizesId: '/mock/defaultPrizesData.json',
  tasksId: '/mock/defaultTasksData.json',
};

export const ENDPOINT =
  process.env.VITE_REACT_APP_MOCK === 'true' ? MOCK_ENDPOINTS : API_ENDPOINTS;

export  const prizesUrl = (studentId: string) => `${BASE_URL}/api/students/${studentId}/prizes/`;