const API_ENDPOINTS = {
  currentUser: "/api/users/current-user/",
  studentsList: "/api/users/students/",
  studentId: "/api/users/students/{id}",
  prizesList: "api/users/prizes/",
};

const MOCK_ENDPOINTS = {
  currentUser: "/mock/defaultCurrentUserData.json",
  studentsList: "/mock/defaultClientsData.json",
  studentId: "/mock/defaultClientsData.json",
  prizesList: "...",
};

export const ENDPOINT = process.env.REACT_APP_MOCK ? MOCK_ENDPOINTS : API_ENDPOINTS;
