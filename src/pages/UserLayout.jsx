import { useMemo } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { useUser } from "../api/getCurrentUser";

const UserLayout = () => {
  const { user } = useUser();

  const contextValue = useMemo(
    () => ({
      ...user
    }),
    [user]
  );

  return (
    <Outlet context={contextValue} />
  );
};

export const useUserContext = () => {
  return useOutletContext();
};

export default UserLayout;