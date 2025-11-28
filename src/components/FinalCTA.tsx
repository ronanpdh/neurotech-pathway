import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onStartQuiz: () => void;
}

export const FinalCTA = ({ onStartQuiz }: FinalCTAProps) => {
  return (
    <section className="border-t border-border bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Turn Your Superpower Into Your Next Tech Job
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get your personalized roadmap in 5 minutes. No overwhelm. Just clear steps forward.
          </p>
          <Button size="lg" onClick={onStartQuiz} className="group shadow-lg">
            Get Your Free Career Roadmap
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
