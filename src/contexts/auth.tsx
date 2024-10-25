import { createContext, useContext, useState } from "react";

export type authProps = {
  isLoggedIn: boolean;
  currentUser: any;
};

interface AuthContextType {
  auth: authProps;
  setAuth: React.Dispatch<React.SetStateAction<undefined>>;
}

export const AuthContext = createContext<AuthContextType | any>({});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<authProps>();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used in AuthProvider");
  }

  return context;
};
