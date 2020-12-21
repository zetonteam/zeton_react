const getUsersAction = (data) => ({
  type: "GET_USERS",
  payload: {
    users: data,
  },
});

const chooseUserAction = (data) => ({
  type: "ADD_CHOOSEN_USER",
  payload: {
    user: data,
  },
});

const removeChoosenUserAction = () => ({
  type: "REMOVE_CHOOSEN_USER",
  payload: {
    user: null,
  },
});

export { getUsersAction, chooseUserAction, removeChoosenUserAction };
