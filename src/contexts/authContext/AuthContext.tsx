import { createContext, useEffect, useState } from "react";
import { PropsWithChildren } from "react";
import {
  login,
  logout,
  getAuthenticatedUser,
  registerUser,
} from "../../modules/auth/services";

export interface AuthContextType {
  token: String | null;
  email: String;
  isAuthenticated: boolean;
}
export const AuthContext = createContext<AuthContextType>({
  token: "",
  email: "",
  isAuthenticated: false
});

export const AuthProvider = (props: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<String>("");

  const checkAuthStatus = () => {
    const checkToken = localStorage.getItem("token");

    console.log(checkToken);
    setIsAuthenticated(!!token);
    setToken(checkToken !== null ? checkToken : "");
  };

  useEffect(() => {
    checkAuthStatus();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        token: token,
        email: "",
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
