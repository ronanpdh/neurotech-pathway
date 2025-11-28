import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Lightbulb, Target, Eye, Sparkles } from "lucide-react";

export const ForEmployers = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Pattern Recognition",
      description: "Spot issues and opportunities others miss",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem-Solving",
      description: "Innovative approaches to complex challenges",
    },
    {
      icon: Target,
      title: "Hyperfocus",
      description: "Deep concentration on critical tasks",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Catch errors and optimize systems",
    },
    {
      icon: Sparkles,
      title: "Innovative Thinking",
      description: "Fresh perspectives that drive breakthroughs",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-accent/5 to-primary/5 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Hire Neurodivergent Talent—The Competitive Advantage You're Missing
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Research shows neurodivergent employees excel in tech roles, bringing unique cognitive strengths that drive innovation
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="mb-2 font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <Button size="lg" variant="outline" className="shadow-md">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};
