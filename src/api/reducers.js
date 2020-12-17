const initialState = {
  users: [],
};

const userReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case "GET_USERS": {
      return {
        ...state,
        users: [...state.users, payload.users]
      };
    }
    default:
      return state;
  }
};

export default userReducer;
