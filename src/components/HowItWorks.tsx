import { Search, FileText, BookOpen, Users } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Assess",
      description: "Understand your unique strengths",
      detail: "5-minute quiz",
    },
    {
      icon: FileText,
      title: "Receive",
      description: "Get your personalized career roadmap",
      detail: "Tailored to your brain",
    },
    {
      icon: BookOpen,
      title: "Learn",
      description: "Follow structured micro-courses",
      detail: "At your own pace",
    },
    {
      icon: Users,
      title: "Connect",
      description: "Match with employers",
      detail: "Who value diverse thinking",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Your Superpower, Structured
          </h2>
          <p className="text-lg text-muted-foreground">
            Four clear steps to your tech career
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Step number */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-md">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mb-1 text-base text-muted-foreground">
                  {step.description}
                </p>
                <p className="text-sm font-medium text-primary">
                  {step.detail}
                </p>
              </div>

              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-8 hidden h-0.5 w-8 bg-border lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
