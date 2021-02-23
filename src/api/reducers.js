const initialState = {
  users: null,
  user: null,
};

const userReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "GET_USERS": {
      return {
        ...state,
        users: [...payload.users],
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
