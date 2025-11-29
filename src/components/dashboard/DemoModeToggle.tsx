import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthContext";
import { Repeat } from "lucide-react";

export const DemoModeToggle = () => {
  const { userType, switchMode } = useAuth();
  const navigate = useNavigate();

  const handleSwitch = () => {
    switchMode();
    if (userType === "individual") {
      navigate("/business-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">
        Viewing as: <span className="font-semibold text-foreground">
          {userType === "individual" ? "Individual" : "Business"}
        </span>
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={handleSwitch}
        className="gap-2"
      >
        <Repeat className="h-4 w-4" />
        Switch to {userType === "individual" ? "Business" : "Individual"}
      </Button>
    </div>
  );
};
