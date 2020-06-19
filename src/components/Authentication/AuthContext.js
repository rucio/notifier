import React from "react";

export const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}
