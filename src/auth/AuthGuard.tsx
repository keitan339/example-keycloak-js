import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const AuthGuard = () => {
  const auth = useAuth();

  const effectDone = useRef(false);
  useEffect(() => {
    if (!effectDone.current) {
      effectDone.current = true;

      if (auth.user == null) {
        auth.login();
      }
    }
  }, [auth]);

  return <>{auth.user != null && <Outlet />}</>;
};
