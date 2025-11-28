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
    <section className="relative border-y-2 border-border py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            Designed for Minds That Think <span className="text-accent">Differently</span>
          </h2>
          <p className="text-xl font-semibold text-muted-foreground">
            Every feature built with neurodivergent learners in mind
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-2 border-border p-6 transition-all hover:border-primary hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-primary/20 bg-primary/10 transition-all group-hover:border-primary group-hover:bg-primary/20">
                <feature.icon className="h-7 w-7 text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="mb-2 text-lg font-black text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
