import { Card } from "@/components/ui/card";
import { Map, Zap, BookOpen, BarChart3, Award, Users, Clock, Heart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Map,
      title: "Personalized Career Roadmap",
      description: "Your unique pathway from current skills to target role",
    },
    {
      icon: Zap,
      title: "Strengths Translation Tool",
      description: "Neurodivergent traits as valuable tech skills",
    },
    {
      icon: BookOpen,
      title: "Self-paced Micro-courses",
      description: "Bite-sized learning at your own pace",
    },
    {
      icon: BarChart3,
      title: "Visual Progress Tracking",
      description: "See where you are and what's next",
    },
    {
      icon: Award,
      title: "Credential Validation",
      description: "Skills matter more than degrees",
    },
    {
      icon: Users,
      title: "Inclusive Employer Network",
      description: "Companies that value diverse thinking",
    },
    {
      icon: Clock,
      title: "Adjustable Learning Pace",
      description: "Speed up, slow down, or pause—no pressure",
    },
    {
      icon: Heart,
      title: "Executive Function Support",
      description: "Built-in structure and organization",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Designed for Minds That Think <span className="text-accent">Differently</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature built with neurodivergent learners in mind
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border border-border p-5 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="mb-1.5 text-base font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
