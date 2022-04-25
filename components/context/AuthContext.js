import React from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

export const AuthContext = React.createContext([null, () => {}]);

function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorage("auth", null);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
