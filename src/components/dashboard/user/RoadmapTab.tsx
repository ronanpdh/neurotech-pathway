import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock } from "lucide-react";

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
  return (
    <div className="space-y-6">
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
