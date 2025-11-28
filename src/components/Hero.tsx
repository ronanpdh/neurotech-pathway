import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-light to-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Where Thinking Differently Is More Than Your Superpower—It's Your Pathway to Your Next Tech Job
          </h1>
          <h2 className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Get a personalized roadmap that works with your brain, not against it. Clear steps. No overwhelm. Your skills already belong in tech.
          </h2>
          <Button 
            size="lg" 
            className="group text-lg shadow-lg hover:shadow-xl transition-all"
            onClick={onStartQuiz}
          >
            Get Your Free Career Roadmap
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
    </section>
  );
};
