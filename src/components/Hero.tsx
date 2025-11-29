import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onStartQuiz: () => void;
}
export const Hero = ({
  onStartQuiz
}: HeroProps) => {
  const navigate = useNavigate();

  return <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Subtle accent */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto flex min-h-[90vh] flex-col items-center justify-center px-4 py-20 md:px-6">
        {/* Login Button */}
        <div className="absolute top-6 right-6">
          <Button 
            variant="outline" 
            onClick={() => navigate("/login")}
            className="gap-2"
          >
            <LogIn className="h-4 w-4" />
            Login
          </Button>
        </div>
        {/* Brand */}
        <div className="mb-12 flex items-center gap-3 animate-fade-in">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
            <Brain className="h-8 w-8 text-primary-foreground" />
          </div>
          <span className="text-3xl font-bold text-foreground md:text-4xl">
            Adaptive<span className="text-primary">Mind</span>
          </span>
        </div>

        {/* Tagline */}
        <div className="mb-12 max-w-3xl text-center animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-xs font-semibold tracking-wide text-primary">
              For Individuals & Businesses
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Where Thinking Differently Is Your <span className="text-primary">Pathway</span> to Tech
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Get a personalized roadmap that works with your brain, not against it.
          </p>
        </div>

        {/* CTA */}
        <div className="animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
        <Button size="lg" className="group h-16 px-10 text-lg font-black shadow-2xl hover:shadow-xl transition-all bg-accent text-accent-foreground hover:bg-accent/90" onClick={onStartQuiz}>
            Get Your Free Career Roadmap
            <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>;
};