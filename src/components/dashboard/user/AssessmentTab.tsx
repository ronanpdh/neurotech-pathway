import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/components/auth/AuthContext";
import { CheckCircle2, ArrowRight, ArrowLeft, Brain } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; description: string }[];
  condition?: (answers: Record<string, string>) => boolean;
}

interface CareerPath {
  id: string;
  title: string;
  description: string;
  matchScore: number;
}

const allQuestions: Question[] = [
  {
    id: "learning_style",
    question: "How do you learn best?",
    options: [
      { value: "visual", label: "Visual", description: "Diagrams, videos, and written instructions" },
      { value: "hands-on", label: "Hands-on", description: "Building projects and experimenting" },
      { value: "auditory", label: "Auditory", description: "Lectures, discussions, and verbal explanations" },
      { value: "reading", label: "Reading/Writing", description: "Documentation, articles, and taking notes" },
    ],
  },
  {
    id: "creative_technical",
    question: "What excites you more?",
    options: [
      { value: "creative", label: "Creative expression", description: "Art, design, and visual storytelling" },
      { value: "technical", label: "Technical problem-solving", description: "Logic, systems, and how things work" },
      { value: "both", label: "Both equally", description: "I enjoy the intersection of creativity and technology" },
      { value: "people", label: "Working with people", description: "Communication, teaching, and collaboration" },
    ],
  },
  {
    id: "design_interest",
    question: "Do you find yourself interested in art or design?",
    options: [
      { value: "visual_design", label: "Yes, visual design", description: "Colors, layouts, and aesthetics" },
      { value: "ux_design", label: "Yes, user experience", description: "How people interact with products" },
      { value: "not_really", label: "Not particularly", description: "I prefer other aspects of technology" },
      { value: "some_interest", label: "Somewhat interested", description: "It's nice but not my main focus" },
    ],
  },
  {
    id: "technical_approach",
    question: "How do you prefer to work with technology?",
    options: [
      { value: "coding", label: "Writing code", description: "Programming and building from scratch" },
      { value: "tools", label: "Using tools", description: "Working with no-code/low-code platforms" },
      { value: "both", label: "Both approaches", description: "Comfortable with code and visual tools" },
      { value: "learning", label: "Still exploring", description: "Want to learn what works best for me" },
    ],
  },
  {
    id: "work_preference",
    question: "What type of work appeals to you most?",
    options: [
      { value: "frontend", label: "User-facing work", description: "What people see and interact with" },
      { value: "backend", label: "Behind-the-scenes", description: "Databases, APIs, and system logic" },
      { value: "fullstack", label: "End-to-end", description: "Complete features from database to interface" },
      { value: "data", label: "Data and analysis", description: "Working with data, patterns, and insights" },
    ],
    condition: (answers) => answers.creative_technical === "technical" || answers.creative_technical === "both",
  },
  {
    id: "focus_preference",
    question: "What's your ideal work session?",
    options: [
      { value: "short", label: "Short bursts", description: "15-25 minutes with frequent breaks" },
      { value: "medium", label: "Medium sessions", description: "45-60 minutes with breaks" },
      { value: "long", label: "Deep focus", description: "2+ hours when in the zone" },
      { value: "flexible", label: "Flexible", description: "Varies based on task and energy" },
    ],
  },
  {
    id: "challenge_area",
    question: "What's your biggest challenge in learning?",
    options: [
      { value: "focus", label: "Maintaining focus", description: "Getting distracted or losing concentration" },
      { value: "organization", label: "Staying organized", description: "Tracking tasks and managing time" },
      { value: "overwhelm", label: "Information overload", description: "Too much information at once" },
      { value: "memory", label: "Retaining information", description: "Remembering what I've learned" },
    ],
  },
  {
    id: "strength",
    question: "What's your greatest strength?",
    options: [
      { value: "pattern", label: "Pattern recognition", description: "Seeing connections and systems" },
      { value: "creative", label: "Creative problem-solving", description: "Thinking outside the box" },
      { value: "detail", label: "Attention to detail", description: "Noticing small important things" },
      { value: "persistence", label: "Hyperfocus/persistence", description: "Deep diving into topics" },
    ],
  },
];

const matchCareerPath = (answers: Record<string, string>): CareerPath[] => {
  const careers: CareerPath[] = [
    {
      id: "ui_ux_designer",
      title: "UI/UX Designer",
      description: "Design beautiful, user-friendly interfaces and experiences",
      matchScore: 0,
    },
    {
      id: "frontend_developer",
      title: "Frontend Developer",
      description: "Build interactive web applications users love",
      matchScore: 0,
    },
    {
      id: "fullstack_developer",
      title: "Full Stack Developer",
      description: "Create complete applications from database to interface",
      matchScore: 0,
    },
    {
      id: "backend_developer",
      title: "Backend Developer",
      description: "Build powerful APIs and server-side systems",
      matchScore: 0,
    },
    {
      id: "data_analyst",
      title: "Data Analyst",
      description: "Analyze data to uncover insights and drive decisions",
      matchScore: 0,
    },
    {
      id: "product_manager",
      title: "Product Manager",
      description: "Guide product development and strategy",
      matchScore: 0,
    },
  ];

  // UI/UX Designer scoring
  if (answers.creative_technical === "creative") careers[0].matchScore += 30;
  if (answers.design_interest === "visual_design" || answers.design_interest === "ux_design") careers[0].matchScore += 25;
  if (answers.technical_approach === "tools") careers[0].matchScore += 15;
  if (answers.learning_style === "visual") careers[0].matchScore += 10;

  // Frontend Developer scoring
  if (answers.creative_technical === "both") careers[1].matchScore += 25;
  if (answers.technical_approach === "coding" || answers.technical_approach === "both") careers[1].matchScore += 25;
  if (answers.work_preference === "frontend") careers[1].matchScore += 30;
  if (answers.design_interest === "ux_design" || answers.design_interest === "some_interest") careers[1].matchScore += 10;

  // Full Stack Developer scoring
  if (answers.creative_technical === "both" || answers.creative_technical === "technical") careers[2].matchScore += 20;
  if (answers.technical_approach === "coding" || answers.technical_approach === "both") careers[2].matchScore += 25;
  if (answers.work_preference === "fullstack") careers[2].matchScore += 35;
  if (answers.learning_style === "hands-on") careers[2].matchScore += 10;

  // Backend Developer scoring
  if (answers.creative_technical === "technical") careers[3].matchScore += 30;
  if (answers.technical_approach === "coding") careers[3].matchScore += 25;
  if (answers.work_preference === "backend") careers[3].matchScore += 35;
  if (answers.strength === "pattern" || answers.strength === "detail") careers[3].matchScore += 10;

  // Data Analyst scoring
  if (answers.creative_technical === "technical") careers[4].matchScore += 25;
  if (answers.work_preference === "data") careers[4].matchScore += 40;
  if (answers.strength === "pattern" || answers.strength === "detail") careers[4].matchScore += 20;
  if (answers.learning_style === "reading") careers[4].matchScore += 10;

  // Product Manager scoring
  if (answers.creative_technical === "people") careers[5].matchScore += 35;
  if (answers.creative_technical === "both") careers[5].matchScore += 15;
  if (answers.strength === "creative") careers[5].matchScore += 20;
  if (answers.work_preference === "fullstack") careers[5].matchScore += 15;

  // Sort by match score and return top 3
  return careers.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3);
};

export const AssessmentTab = () => {
  const navigate = useNavigate();
  const { saveAssessmentResults } = useAuth();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [suggestedCareers, setSuggestedCareers] = useState<CareerPath[]>([]);
  const [selectedCareer, setSelectedCareer] = useState<string>("");

  // Get questions that should be shown based on conditions
  const getAvailableQuestions = (): Question[] => {
    return allQuestions.filter(q => !q.condition || q.condition(answers));
  };

  const availableQuestions = getAvailableQuestions();
  const currentQuestion = availableQuestions[currentQuestionIndex];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < availableQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate career matches
      const careers = matchCareerPath(answers);
      setSuggestedCareers(careers);
      setSelectedCareer(careers[0].id);
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleGenerateRoadmap = () => {
    // Save results with selected career path
    const results = {
      learning_style: answers.learning_style || "",
      focus_preference: answers.focus_preference || "",
      challenge_area: answers.challenge_area || "",
      environment: answers.environment || "",
      strength: answers.strength || "",
      creative_technical: answers.creative_technical || "",
      design_interest: answers.design_interest || "",
      technical_approach: answers.technical_approach || "",
      work_preference: answers.work_preference || "",
      careerPath: selectedCareer,
      completedAt: new Date().toISOString(),
    };
    saveAssessmentResults(results);
    navigate("/dashboard/roadmap");
  };

  const currentAnswer = answers[currentQuestion?.id];
  const progress = ((currentQuestionIndex + 1) / availableQuestions.length) * 100;

  if (isComplete) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Assessment Complete!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here are the career paths that match your profile best.
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Recommended Career Paths</h3>
            <p className="text-sm text-muted-foreground">
              Select the career path you'd like to explore, and we'll create a personalized roadmap for you.
            </p>
            
            <RadioGroup value={selectedCareer} onValueChange={setSelectedCareer}>
              <div className="space-y-3">
                {suggestedCareers.map((career) => (
                  <div
                    key={career.id}
                    className={`flex items-start space-x-3 rounded-lg border p-4 transition-colors cursor-pointer hover:border-primary/50 ${
                      selectedCareer === career.id ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => setSelectedCareer(career.id)}
                  >
                    <RadioGroupItem value={career.id} id={career.id} className="mt-1" />
                    <Label htmlFor={career.id} className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">{career.title}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success font-medium">
                          {career.matchScore}% Match
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">{career.description}</div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-foreground mb-2">Your Learning Profile:</h4>
              <div className="grid gap-3 md:grid-cols-2 text-sm">
                {answers.learning_style && (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">Learning Style:</span> {answers.learning_style}
                    </span>
                  </div>
                )}
                {answers.creative_technical && (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">Preference:</span> {answers.creative_technical}
                    </span>
                  </div>
                )}
                {answers.strength && (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">Strength:</span> {answers.strength}
                    </span>
                  </div>
                )}
                {answers.technical_approach && (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <span className="font-medium text-foreground">Approach:</span> {answers.technical_approach}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center">
          <Button onClick={handleGenerateRoadmap} size="lg" className="gap-2">
            Generate My Custom Roadmap
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Learning Style Assessment</h2>
        <p className="text-muted-foreground">
          Help us understand how you learn best so we can create your personalized roadmap
        </p>
      </div>

      {/* Progress */}
      <Card className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Question {currentQuestionIndex + 1} of {availableQuestions.length}
            </span>
            <span className="font-semibold text-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </Card>

      {/* Question Card */}
      <Card className="p-8">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
              <Brain className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-6">{currentQuestion.question}</h3>
              
              <RadioGroup value={currentAnswer} onValueChange={(value) => handleAnswer(currentQuestion.id, value)}>
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-start space-x-3 rounded-lg border p-4 transition-colors cursor-pointer hover:border-primary/50 ${
                        currentAnswer === option.value ? "border-primary bg-primary/5" : "border-border"
                      }`}
                      onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        <div className="font-semibold text-foreground">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.description}</div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={!currentAnswer}
          className="gap-2"
        >
          {currentQuestionIndex === availableQuestions.length - 1 ? "Complete Assessment" : "Next Question"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
