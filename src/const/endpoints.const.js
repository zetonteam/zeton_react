const API_ENDPOINTS = {
  currentUser: "/api/users/current-user/",
  studentsList: "/api/users/students/",
  prizesList: "/api/users/prizes/",
  tasksList: "/api/users/tasks/",
  studentId: "/api/users/students/{:id}",
  prizesId: "/api/users/prizes/{:id}",
  tasksId: "/api/users/tasks/{:id}",
};

const MOCK_ENDPOINTS = {
  currentUser: "/mock/defaultCurrentUserData.json",
  studentsList: "/mock/defaultClientsData.json",
  studentId: "/mock/defaultClientsData.json",
  prizesList: "/mock/defaultPrizesData.json",
  tasksList: "/mock/defaultTasksData.json",
  prizesId: "/mock/defaultPrizesData.json",
  tasksId: "/mock/defaultTasksData.json",
};

export const ENDPOINT = process.env.REACT_APP_MOCK ? MOCK_ENDPOINTS : API_ENDPOINTS;
