import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuizResults } from "./QuizResults";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
}

const questions: QuizQuestion[] = [
  {
    id: "energizes",
    question: "What energizes you most?",
    options: ["Problem-solving", "Creating", "Helping others", "Analyzing", "Leading"],
  },
  {
    id: "strengths",
    question: "Your natural strengths?",
    options: ["Detail-oriented", "Big-picture thinking", "Communication", "Logical reasoning", "Creative thinking"],
  },
  {
    id: "workStyle",
    question: "Preferred work style?",
    options: ["Independent", "Collaborative", "Mix of both", "Leading teams", "Teaching others"],
  },
  {
    id: "experience",
    question: "Experience level?",
    options: ["Career changer", "Early career", "Mid-career", "Senior level", "Student"],
  },
  {
    id: "priorities",
    question: "What matters most?",
    options: ["Flexibility", "Earnings", "Impact", "Security", "Continuous learning"],
  },
];

interface QuizProps {
  onBack: () => void;
}

export const Quiz = ({ onBack }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const canGoNext = answers[questions[currentQuestion].id];

  const handleAnswer = (option: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: option,
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

  if (showResults) {
    return <QuizResults answers={answers} />;
  }

  const question = questions[currentQuestion];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Discover Your Tech Pathway
            </h2>
            <p className="text-lg text-muted-foreground">
              Your thinking style is your advantage. Let's find where it fits best.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all hover:border-primary hover:bg-primary/5 ${
                    answers[question.id] === option
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background"
                  }`}
                >
                  <span className="text-base font-medium text-foreground">
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              className="group"
            >
              <ChevronLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!canGoNext}
              className="group"
            >
              {isLastQuestion ? "See Results" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
