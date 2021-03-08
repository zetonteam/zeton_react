const getStudentsListAction = (data) => ({
  type: "GET_USERS",
  payload: {
    users: data,
  },
});

const chooseStudentAction = (data) => ({
  type: "ADD_CHOOSEN_STUDENT",
  payload: {
    student: data,
  },
});

const removeChoosenStudentAction = () => ({
  type: "REMOVE_CHOOSEN_STUDENT",
  payload: {
    student: null,
  },
});

export { getUsersAction, chooseStudentAction, removeChoosenStudentAction };
