import createAction from "../createAction";
import axios from "axios";

const SET_TOKEN = "SET_TOKEN";
const CLEAR_TOKEN = "CLEAR_TOKEN";

export const setToken = createAction(SET_TOKEN);
export const clearToken = createAction(CLEAR_TOKEN);

const initialData = {
  get token() {
    return localStorage?.getItem?.("token") ?? "";
  }
};

const token = (state = initialData?.token, { type, payload }) => {
  console.log(type, payload)
  switch (type) {
  case SET_TOKEN:
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage?.setItem?.("token", token);

    return payload ?? "";
  case CLEAR_TOKEN:
    delete axios.defaults.headers.common["Authorization"];
    localStorage?.removeItem?.("token");

    return "";
  default:
    return state;
  }
}

export default token;
