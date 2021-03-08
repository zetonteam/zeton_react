const initialState = {
  students: null,
  user: null,
};

const userReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "GET_STUDENTS": {
      return {
        ...state,
        students: [...payload.students],
      };
    }
    case "ADD_CHOOSEN_STUDENT": {
      return {
        ...state,
        student: payload.student,
      };
    }
    case "REMOVE_CHOOSEN_STUDENT": {
      return {
        ...state,
        student: payload.student,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
