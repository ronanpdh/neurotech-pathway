import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onStartQuiz: () => void;
}

export const FinalCTA = ({ onStartQuiz }: FinalCTAProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-20 md:py-28">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-primary/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Turn Your <span className="text-primary">Superpower</span>
            <br className="hidden md:inline" /> Into Your Next Tech Job
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Get your personalized roadmap in 5 minutes.
            <br />
            No overwhelm. Just clear steps forward.
          </p>
          <Button 
            size="lg" 
            onClick={onStartQuiz} 
            className="group h-16 px-10 text-lg font-black shadow-2xl hover:shadow-xl bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Get Your Free Career Roadmap
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
          
          {/* Business CTA */}
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Looking for workplace solutions?{" "}
              <a href="#" className="font-semibold text-accent hover:underline inline-flex items-center gap-1">
                Talk to Us
                <ArrowRight className="h-4 w-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
