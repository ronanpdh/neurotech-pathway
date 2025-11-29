import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowRight, ArrowLeft, Brain } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: { value: string; label: string; description: string }[];
}

const assessmentQuestions: Question[] = [
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
    id: "environment",
    question: "What environment helps you work best?",
    options: [
      { value: "quiet", label: "Complete quiet", description: "No background noise or distractions" },
      { value: "music", label: "Music/ambient sound", description: "Background music or white noise" },
      { value: "social", label: "With others", description: "Co-working or study groups" },
      { value: "varied", label: "Varied settings", description: "Different locations for different tasks" },
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

export const AssessmentTab = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentAnswer = answers[assessmentQuestions[currentQuestion].id];
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

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
            Based on your responses, we've created a personalized roadmap tailored to your learning style and strengths.
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Your Learning Profile</h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Learning Style</p>
                <p className="text-foreground capitalize">{answers.learning_style?.replace("-", " ")}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Focus Preference</p>
                <p className="text-foreground capitalize">{answers.focus_preference?.replace("-", " ")}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Primary Challenge</p>
                <p className="text-foreground capitalize">{answers.challenge_area?.replace("-", " ")}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Best Environment</p>
                <p className="text-foreground capitalize">{answers.environment?.replace("-", " ")}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Greatest Strength</p>
                <p className="text-foreground capitalize">{answers.strength?.replace("-", " ")}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-foreground mb-2">Personalized Recommendations:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Courses adapted to your {answers.learning_style} learning style</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Study sessions optimized for {answers.focus_preference} intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Tools and strategies to address {answers.challenge_area}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Projects that leverage your {answers.strength} abilities</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="flex justify-center">
          <Button size="lg" className="gap-2" onClick={() => window.location.href = "/dashboard"}>
            View Your Personalized Roadmap
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  const question = assessmentQuestions[currentQuestion];

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
              Question {currentQuestion + 1} of {assessmentQuestions.length}
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
              <h3 className="text-xl font-semibold text-foreground mb-6">{question.question}</h3>
              
              <RadioGroup value={currentAnswer} onValueChange={(value) => handleAnswer(question.id, value)}>
                <div className="space-y-3">
                  {question.options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-start space-x-3 rounded-lg border p-4 transition-colors cursor-pointer hover:border-primary/50 ${
                        currentAnswer === option.value ? "border-primary bg-primary/5" : "border-border"
                      }`}
                      onClick={() => handleAnswer(question.id, option.value)}
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
          disabled={currentQuestion === 0}
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
          {currentQuestion === assessmentQuestions.length - 1 ? "Complete Assessment" : "Next Question"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
