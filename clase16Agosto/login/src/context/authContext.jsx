import { createContext, useState } from "react";
import {
  isAuthenticaded,
  removeToken,
  setToken,
} from "../services/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(isAuthenticaded());

  const login = (token) => {
    setToken(token);
    setAuth(true);
  };

  const logout = () => {
    removeToken();
    setAuth(false);
  };

  const valuesToShare = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valuesToShare}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
