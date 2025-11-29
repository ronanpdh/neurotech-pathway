import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/components/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  Target, 
  BookOpen, 
  Code, 
  Briefcase, 
  CheckCircle2, 
  Lock,
  TrendingUp,
  Brain,
  Sparkles,
  Palette,
  Database,
  Layout,
  Circle
} from "lucide-react";

const careerRoadmaps: Record<string, any> = {
  ui_ux_designer: {
    title: "UI/UX Designer",
    icon: Palette,
    phases: [
      {
        id: 1,
        title: "Design Fundamentals",
        description: "Master the principles of design",
        status: "completed",
        progress: 100,
        milestones: ["Color Theory", "Typography", "Layout & Composition", "Design Tools (Figma)"],
      },
      {
        id: 2,
        title: "User Research & Testing",
        description: "Learn to understand user needs",
        status: "current",
        progress: 60,
        milestones: ["User Interviews", "Personas & Journey Maps", "Usability Testing", "Analytics"],
      },
      {
        id: 3,
        title: "Advanced UI/UX",
        description: "Create sophisticated experiences",
        status: "upcoming",
        progress: 0,
        milestones: ["Interaction Design", "Design Systems", "Prototyping", "Accessibility"],
      },
      {
        id: 4,
        title: "Portfolio & Career",
        description: "Launch your design career",
        status: "upcoming",
        progress: 0,
        milestones: ["Portfolio Projects", "Case Studies", "Freelance/Job Ready", "Design Community"],
      },
    ],
  },
  frontend_developer: {
    title: "Frontend Developer",
    icon: Layout,
    phases: [
      {
        id: 1,
        title: "Web Fundamentals",
        description: "HTML, CSS, and JavaScript basics",
        status: "completed",
        progress: 100,
        milestones: ["HTML5 & Semantic Markup", "CSS3 & Flexbox/Grid", "JavaScript ES6+", "Responsive Design"],
      },
      {
        id: 2,
        title: "Modern Frontend",
        description: "React and modern tooling",
        status: "current",
        progress: 65,
        milestones: ["React Fundamentals", "State Management", "API Integration", "Build Tools"],
      },
      {
        id: 3,
        title: "Advanced Skills",
        description: "Performance and best practices",
        status: "upcoming",
        progress: 0,
        milestones: ["TypeScript", "Testing", "Performance Optimization", "Accessibility"],
      },
      {
        id: 4,
        title: "Career Ready",
        description: "Build portfolio and land jobs",
        status: "upcoming",
        progress: 0,
        milestones: ["Portfolio Website", "3 Major Projects", "Git & Collaboration", "Interview Prep"],
      },
    ],
  },
  fullstack_developer: {
    title: "Full Stack Developer",
    icon: Code,
    phases: [
      {
        id: 1,
        title: "Frontend Foundations",
        description: "Client-side development",
        status: "completed",
        progress: 100,
        milestones: ["HTML/CSS/JavaScript", "React", "State Management", "Responsive Design"],
      },
      {
        id: 2,
        title: "Backend Development",
        description: "Server-side programming",
        status: "current",
        progress: 50,
        milestones: ["Node.js/Python", "APIs & REST", "Authentication", "Server Architecture"],
      },
      {
        id: 3,
        title: "Database & DevOps",
        description: "Data and deployment",
        status: "upcoming",
        progress: 0,
        milestones: ["SQL & NoSQL", "Cloud Platforms", "CI/CD", "Containerization"],
      },
      {
        id: 4,
        title: "Full Stack Projects",
        description: "End-to-end applications",
        status: "upcoming",
        progress: 0,
        milestones: ["E-commerce App", "Social Platform", "SaaS Product", "Job Ready"],
      },
    ],
  },
  backend_developer: {
    title: "Backend Developer",
    icon: Database,
    phases: [
      {
        id: 1,
        title: "Programming Fundamentals",
        description: "Core backend languages",
        status: "completed",
        progress: 100,
        milestones: ["Python/Node.js/Java", "Data Structures", "Algorithms", "OOP Principles"],
      },
      {
        id: 2,
        title: "APIs & Databases",
        description: "Build robust services",
        status: "current",
        progress: 70,
        milestones: ["RESTful APIs", "SQL & PostgreSQL", "NoSQL Databases", "Authentication"],
      },
      {
        id: 3,
        title: "Advanced Backend",
        description: "Scalable systems",
        status: "upcoming",
        progress: 0,
        milestones: ["Microservices", "Caching", "Message Queues", "System Design"],
      },
      {
        id: 4,
        title: "Production Ready",
        description: "Deploy and optimize",
        status: "upcoming",
        progress: 0,
        milestones: ["AWS/GCP/Azure", "Monitoring", "Security", "Performance Tuning"],
      },
    ],
  },
  data_analyst: {
    title: "Data Analyst",
    icon: TrendingUp,
    phases: [
      {
        id: 1,
        title: "Data Fundamentals",
        description: "Core analysis skills",
        status: "completed",
        progress: 100,
        milestones: ["Excel & Spreadsheets", "SQL", "Statistics Basics", "Data Visualization"],
      },
      {
        id: 2,
        title: "Tools & Techniques",
        description: "Professional analytics",
        status: "current",
        progress: 55,
        milestones: ["Python/R", "Pandas & NumPy", "Tableau/Power BI", "Data Cleaning"],
      },
      {
        id: 3,
        title: "Advanced Analytics",
        description: "Deeper insights",
        status: "upcoming",
        progress: 0,
        milestones: ["A/B Testing", "Predictive Analytics", "Machine Learning Basics", "Business Intelligence"],
      },
      {
        id: 4,
        title: "Career Launch",
        description: "Professional analyst",
        status: "upcoming",
        progress: 0,
        milestones: ["Portfolio Projects", "Domain Expertise", "Storytelling with Data", "Job Ready"],
      },
    ],
  },
  product_manager: {
    title: "Product Manager",
    icon: Briefcase,
    phases: [
      {
        id: 1,
        title: "Product Basics",
        description: "Understanding products",
        status: "completed",
        progress: 100,
        milestones: ["Product Lifecycle", "User Research", "Market Analysis", "Roadmapping"],
      },
      {
        id: 2,
        title: "Technical Skills",
        description: "Work with engineers",
        status: "current",
        progress: 45,
        milestones: ["Tech Fundamentals", "Agile/Scrum", "APIs & Architecture", "Data Analytics"],
      },
      {
        id: 3,
        title: "Strategy & Leadership",
        description: "Lead product vision",
        status: "upcoming",
        progress: 0,
        milestones: ["Product Strategy", "Stakeholder Management", "Metrics & KPIs", "Go-to-Market"],
      },
      {
        id: 4,
        title: "PM Career",
        description: "Land PM roles",
        status: "upcoming",
        progress: 0,
        milestones: ["Case Studies", "Product Portfolio", "Interview Prep", "Networking"],
      },
    ],
  },
};

export const RoadmapTab = () => {
  const navigate = useNavigate();
  const { assessmentResults } = useAuth();

  if (!assessmentResults) {
    return (
      <Card className="p-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground">Complete Your Assessment First</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Take our learning style assessment to get your personalized roadmap tailored to how you learn best.
          </p>
          <Button className="mt-4" onClick={() => navigate("/dashboard")}>
            <Sparkles className="h-4 w-4 mr-2" />
            Start Assessment
          </Button>
        </div>
      </Card>
    );
  }

  const careerPath = assessmentResults.careerPath || "frontend_developer";
  const roadmap = careerRoadmaps[careerPath] || careerRoadmaps.frontend_developer;
  const RoadmapIcon = roadmap.icon;
  const phases = roadmap.phases;

  // Calculate overall progress
  const overallProgress = Math.round(
    phases.reduce((sum: number, phase: any) => sum + phase.progress, 0) / phases.length
  );

  return (
    <div className="space-y-6">
      {/* Career Path Banner */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <RoadmapIcon className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">Your Career Path: {roadmap.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              This roadmap is tailored to your learning style ({assessmentResults.learning_style}) and strengths ({assessmentResults.strength})
            </p>
            <div className="flex flex-wrap gap-2">
              {assessmentResults.creative_technical && (
                <Badge variant="secondary" className="text-xs">
                  {assessmentResults.creative_technical} focused
                </Badge>
              )}
              {assessmentResults.technical_approach && (
                <Badge variant="secondary" className="text-xs">
                  {assessmentResults.technical_approach}
                </Badge>
              )}
              {assessmentResults.work_preference && (
                <Badge variant="secondary" className="text-xs">
                  {assessmentResults.work_preference} work
                </Badge>
              )}
            </div>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-foreground">Your Career Roadmap</h2>
        <p className="text-muted-foreground">
          {overallProgress}% complete overall
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Overall Progress</span>
            <span className="text-sm font-semibold text-primary">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>
      </Card>

      {/* Phases */}
      <div className="space-y-4">
        {phases.map((phase: any) => (
          <Card key={phase.id} className="p-6">
            <div className="space-y-4">
              {/* Phase Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="h-6 w-6 text-success mt-0.5" />
                  ) : phase.status === "current" ? (
                    <Target className="h-6 w-6 text-primary mt-0.5" />
                  ) : (
                    <Lock className="h-6 w-6 text-muted-foreground mt-0.5" />
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Phase {phase.id}: {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-foreground">{phase.progress}%</span>
              </div>

              {/* Progress Bar */}
              {phase.status !== "upcoming" && (
                <Progress value={phase.progress} className="h-2" />
              )}

              {/* Milestones */}
              <div className="ml-9 space-y-2">
                {phase.milestones.map((milestone: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    {phase.status === "completed" || (phase.status === "current" && index < 2) ? (
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        phase.status === "completed" || (phase.status === "current" && index < 2)
                          ? "text-muted-foreground line-through"
                          : "text-foreground"
                      }`}
                    >
                      {milestone}
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
