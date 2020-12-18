const getUsersAction = (data) => ({
  type: "GET_USERS",
  payload: {
    users: data,
  },
});

const chooseUserAction = (data) => ({
  type: "CHOOSEN_USER",
  payload: {
    user: data,
  },
});

export { getUsersAction, chooseUserAction };
