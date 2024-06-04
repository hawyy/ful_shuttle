import { createContext } from "react";
import { Auth } from "../../models/authModel";
import { PropsWithChildren } from "react";


export const AuthContext = createContext<Auth | null>(null);

export const AuthProvider = (props: PropsWithChildren) => {
  // implement the authentication logic 
}