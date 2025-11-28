import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, Target, Eye, Sparkles } from "lucide-react";

export const ForEmployers = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Pattern Recognition",
      description: "Spot issues others miss",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem-Solving",
      description: "Innovative approaches",
    },
    {
      icon: Target,
      title: "Hyperfocus",
      description: "Deep concentration",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Optimize systems",
    },
    {
      icon: Sparkles,
      title: "Innovative Thinking",
      description: "Drive breakthroughs",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            Hire <span className="text-accent">Neurodivergent</span> Talent
          </h2>
          <p className="mb-4 text-2xl font-bold text-foreground">
            The Competitive Advantage You're Missing
          </p>
          <p className="mb-16 text-lg font-medium text-muted-foreground">
            Research shows neurodivergent employees excel in tech roles
          </p>

          <div className="mb-12 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group rounded-2xl border-2 border-border bg-card p-6 text-center shadow-lg transition-all hover:border-accent hover:shadow-2xl"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-accent/20 bg-accent/10 transition-all group-hover:border-accent group-hover:bg-accent/20">
                    <benefit.icon className="h-8 w-8 text-accent" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-black text-foreground">{benefit.title}</h3>
                <p className="text-xs font-medium text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <Button size="lg" variant="outline" className="h-14 border-2 px-8 text-lg font-bold shadow-xl hover:shadow-2xl">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};
