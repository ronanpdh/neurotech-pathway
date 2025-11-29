import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onStartQuiz: () => void;
}

export const FinalCTA = ({ onStartQuiz }: FinalCTAProps) => {
  return (
    <section className="relative overflow-hidden border-t-2 border-border py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute left-0 top-0 h-96 w-96 bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-accent/10 blur-3xl" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            Turn Your <span className="text-primary">Superpower</span>
            <br className="hidden md:inline" /> Into Your Next Tech Job
          </h2>
          <p className="mb-10 text-xl font-semibold text-muted-foreground">
            Get your personalized roadmap in 5 minutes.
            <br />
            No overwhelm. Just clear steps forward.
          </p>
          <Button 
            size="lg" 
            onClick={onStartQuiz} 
            className="group h-14 px-8 text-lg font-bold shadow-2xl hover:shadow-xl"
          >
            Get Your Free Career Roadmap
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
