import { createContext, useContext, useEffect, useLayoutEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import { clearToken, setToken } from "../redux/reducers/token";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(({ token }) => token);

  const contextValue = useMemo(
    () => ({
      token,
      setToken: (newToken) => {
        dispatch(setToken(newToken));
      },
      clearToken: () => {
        dispatch(clearToken());
      }
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
