import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Bold geometric accents */}
      <div className="absolute right-0 top-0 h-96 w-96 bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 md:px-6">
        {/* Brand */}
        <div className="mb-8 flex items-center gap-3 animate-fade-in">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-xl">
            <Brain className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-black tracking-tighter md:text-6xl lg:text-7xl">
            Neuro<span className="text-primary">Tech</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-12 max-w-4xl text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <p className="mb-6 text-xl font-semibold text-muted-foreground md:text-2xl lg:text-3xl">
            Where Thinking Differently Is More Than Your <span className="text-accent">Superpower</span>-
            <br className="hidden md:inline" />
            It's Your Pathway to Your Next Tech Job
          </p>
          <p className="text-lg text-muted-foreground md:text-xl">
            Get a personalized roadmap that works with your brain, not against it.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Button
            size="lg"
            className="group h-14 px-8 text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
            onClick={onStartQuiz}
          >
            Get Your Free Career Roadmap
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Stats grid - minimized */}
        <div
          className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="rounded-xl border-2 border-border bg-card p-4 text-center shadow-md">
            <div className="text-3xl font-black text-primary">2.5K+</div>
            <div className="text-xs font-medium text-muted-foreground">Learners</div>
          </div>
          <div className="rounded-xl border-2 border-border bg-card p-4 text-center shadow-md">
            <div className="text-3xl font-black text-primary">5K+</div>
            <div className="text-xs font-medium text-muted-foreground">Roadmaps</div>
          </div>
          <div className="rounded-xl border-2 border-border bg-card p-4 text-center shadow-md">
            <div className="text-3xl font-black text-primary">150+</div>
            <div className="text-xs font-medium text-muted-foreground">Employers</div>
          </div>
        </div>
      </div>
    </section>
  );
};
