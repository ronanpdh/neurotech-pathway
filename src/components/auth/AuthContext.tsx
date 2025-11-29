import { createContext, useContext, useState, ReactNode } from "react";

export interface AssessmentResults {
  learning_style: string;
  focus_preference: string;
  challenge_area: string;
  environment: string;
  strength: string;
  creative_technical: string;
  design_interest: string;
  technical_approach: string;
  work_preference: string;
  careerPath: string;
  completedAt: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  userType: "individual" | "business" | null;
  assessmentResults: AssessmentResults | null;
  login: (type: "individual" | "business") => void;
  logout: () => void;
  switchMode: () => void;
  saveAssessmentResults: (results: AssessmentResults) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<"individual" | "business" | null>(null);
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResults | null>(null);

  const login = (type: "individual" | "business") => {
    setIsAuthenticated(true);
    setUserType(type);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setAssessmentResults(null);
  };

  const switchMode = () => {
    if (userType === "individual") {
      setUserType("business");
    } else {
      setUserType("individual");
    }
  };

  const saveAssessmentResults = (results: AssessmentResults) => {
    setAssessmentResults(results);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, assessmentResults, login, logout, switchMode, saveAssessmentResults }}>
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
