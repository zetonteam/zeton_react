const initialState = {
  users: null,
  user: null
};

const userReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "GET_USERS": {
      return {
        ...state,
        users: [...payload.users]
      };
    }
    case "CHOOSEN_USER": {
      return {
        ...state,
        user: payload.user
      };
    }
    default:
      return state;
  }
};

export default userReducer;
