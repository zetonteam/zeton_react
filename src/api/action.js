const getUsersAction = (data) => ({
  type: "GET_USERS",
  payload: {
    users: data,
  },
});

export { getUsersAction };
