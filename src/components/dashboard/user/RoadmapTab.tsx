import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth/AuthContext";
import { CheckCircle2, Circle, Clock, Sparkles, Brain, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const roadmapPhases = [
  {
    id: 1,
    title: "Assessment & Discovery",
    status: "completed",
    progress: 100,
    tasks: [
      { name: "Complete cognitive profile assessment", done: true },
      { name: "Identify learning preferences", done: true },
      { name: "Set initial career goals", done: true },
    ],
  },
  {
    id: 2,
    title: "Skill Building",
    status: "current",
    progress: 65,
    tasks: [
      { name: "Complete Python fundamentals course", done: true },
      { name: "Build first portfolio project", done: true },
      { name: "Learn data structures", done: false },
      { name: "Practice coding challenges", done: false },
    ],
  },
  {
    id: 3,
    title: "Real-World Projects",
    status: "upcoming",
    progress: 0,
    tasks: [
      { name: "Contribute to open source", done: false },
      { name: "Build capstone project", done: false },
      { name: "Create case studies", done: false },
    ],
  },
  {
    id: 4,
    title: "Career Ready",
    status: "upcoming",
    progress: 0,
    tasks: [
      { name: "Optimize portfolio", done: false },
      { name: "Practice interviews", done: false },
      { name: "Apply to neurodiversity-friendly companies", done: false },
    ],
  },
];

export const RoadmapTab = () => {
  const navigate = useNavigate();
  const { assessmentResults } = useAuth();

  // Helper function to get personalized message
  const getPersonalizedMessage = () => {
    if (!assessmentResults) return null;
    
    const messages: Record<string, string> = {
      visual: "video tutorials and diagram-based learning",
      "hands-on": "interactive coding exercises and project-based learning",
      auditory: "lecture-style content and discussion forums",
      reading: "comprehensive documentation and written guides",
    };

    return messages[assessmentResults.learning_style] || "personalized content";
  };

  // If no assessment completed, prompt user
  if (!assessmentResults) {
    return (
      <div className="space-y-6">
        <Card className="p-8 text-center bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Brain className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Complete Your Assessment First
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            To create your personalized roadmap, we need to understand your learning style and preferences.
          </p>
          <Button size="lg" onClick={() => navigate("/dashboard")} className="gap-2">
            <Sparkles className="h-5 w-5" />
            Start Assessment
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Assessment Results Banner */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary flex-shrink-0">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Your Personalized Roadmap
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Based on your assessment, this roadmap is optimized for {getPersonalizedMessage()} and your unique strengths.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/60">
                  <Brain className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Learning Style</p>
                  <p className="font-semibold text-foreground capitalize">{assessmentResults.learning_style}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/60">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Focus Style</p>
                  <p className="font-semibold text-foreground capitalize">{assessmentResults.focus_preference}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/60">
                  <Target className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Challenge</p>
                  <p className="font-semibold text-foreground capitalize">{assessmentResults.challenge_area}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/60">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Strength</p>
                  <p className="font-semibold text-foreground capitalize">{assessmentResults.strength}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-foreground">Your Career Roadmap</h2>
        <p className="text-muted-foreground">
          Phase 2 of 4 • 65% complete overall
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Overall Progress</span>
            <span className="text-sm font-semibold text-primary">41%</span>
          </div>
          <Progress value={41} className="h-3" />
        </div>
      </Card>

      {/* Phases */}
      <div className="space-y-4">
        {roadmapPhases.map((phase, index) => (
          <Card key={phase.id} className="p-6">
            <div className="space-y-4">
              {/* Phase Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="h-6 w-6 text-success mt-0.5" />
                  ) : phase.status === "current" ? (
                    <Clock className="h-6 w-6 text-primary mt-0.5" />
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground mt-0.5" />
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Phase {phase.id}: {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {phase.status === "completed" && "Completed"}
                      {phase.status === "current" && "In Progress"}
                      {phase.status === "upcoming" && "Coming Soon"}
                    </p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">{phase.progress}%</span>
              </div>

              {/* Progress Bar */}
              {phase.status !== "upcoming" && (
                <Progress value={phase.progress} className="h-2" />
              )}

              {/* Tasks */}
              <div className="ml-9 space-y-2">
                {phase.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center gap-2">
                    {task.done ? (
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        task.done ? "text-muted-foreground line-through" : "text-foreground"
                      }`}
                    >
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
