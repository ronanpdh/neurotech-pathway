import { Card } from "@/components/ui/card";
import { Map, Zap, BookOpen, BarChart3, Award, Users, Clock, Heart } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Map,
      title: "Personalized Career Roadmap",
      description: "Your unique pathway from current skills to target role, tailored to your strengths",
    },
    {
      icon: Zap,
      title: "Strengths Translation Tool",
      description: "Discover how your neurodivergent traits are valuable tech skills",
    },
    {
      icon: BookOpen,
      title: "Self-paced Micro-courses",
      description: "Bite-sized learning modules you can complete at your own pace",
    },
    {
      icon: BarChart3,
      title: "Visual Progress Tracking",
      description: "See exactly where you are and what comes next",
    },
    {
      icon: Award,
      title: "Credential Validation",
      description: "Build proof of skills that matter more than traditional degrees",
    },
    {
      icon: Users,
      title: "Inclusive Employer Network",
      description: "Connect with companies that value neurodivergent thinking",
    },
    {
      icon: Clock,
      title: "Adjustable Learning Pace",
      description: "Speed up, slow down, or pause as needed—no pressure",
    },
    {
      icon: Heart,
      title: "Executive Function Support",
      description: "Built-in reminders, structure, and organization tools",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Designed for Minds That Think Differently
          </h2>
          <p className="text-lg text-muted-foreground">
            Every feature built with neurodivergent learners in mind
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="group p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
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
