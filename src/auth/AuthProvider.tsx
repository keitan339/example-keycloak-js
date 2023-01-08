import { ReactNode, useState } from "react";
import { AuthContext, User } from "./AuthContext";
import Keycloak from "keycloak-js";

export type AuthProviderProps = {
  children: ReactNode;
};
export const AuthProvider = (props: AuthProviderProps) => {
  const [keycloakState, setKeycloakState] = useState<Keycloak | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    const keycloak = new Keycloak("/keycloak.json");

    const authenticated = await keycloak.init({
      onLoad: "login-required",
      flow: "implicit",
    });
    setKeycloakState(keycloak);

    if (authenticated) {
      const userInfo: any = await keycloak.loadUserInfo();
      console.log("loadUser", userInfo);
      setUser({ id: userInfo.sub, name: userInfo.name });
    }
  };

  const logout = async () => {
    await keycloakState?.logout();
    setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>{props.children}</AuthContext.Provider>
    </>
  );
};
