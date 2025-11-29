import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userType: "individual" | "business" | null;
  login: (type: "individual" | "business") => void;
  logout: () => void;
  switchMode: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<"individual" | "business" | null>(null);

  const login = (type: "individual" | "business") => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
  };

  const switchMode = () => {
    if (userType === "individual") {
      setUserType("business");
    } else {
      setUserType("individual");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout, switchMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
