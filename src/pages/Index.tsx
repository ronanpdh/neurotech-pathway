import { useState, useRef } from "react";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { EmailSignup } from "@/components/EmailSignup";
import { Quiz } from "@/components/Quiz";
import { Features } from "@/components/Features";
import { ForEmployers } from "@/components/ForEmployers";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBackFromQuiz = () => {
    setShowQuiz(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {!showQuiz ? (
        <>
          <Hero onStartQuiz={handleStartQuiz} />
          <ProblemSolution />
          <HowItWorks />
          <Features />
          <EmailSignup />
          <ForEmployers />
          <FinalCTA onStartQuiz={handleStartQuiz} />
          <Footer />
        </>
      ) : (
        <div ref={quizRef}>
          <Quiz onBack={handleBackFromQuiz} />
        </div>
      )}
    </div>
  );
};

export default Index;
