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
    <section className="relative bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            Your <span className="text-primary">Superpower</span>, Structured
          </h2>
          <p className="text-xl font-semibold text-muted-foreground">
            Four clear steps to your tech career
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-full top-20 hidden h-1 w-full bg-gradient-to-r from-primary to-transparent lg:block" style={{ width: 'calc(100% - 1.5rem)' }} />
              )}
              
              <div className="relative flex h-full flex-col rounded-2xl border-2 border-border bg-card p-8 shadow-lg transition-all hover:border-primary hover:shadow-2xl">
                {/* Step number - bold */}
                <div className="absolute -left-4 -top-4 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-background bg-primary text-3xl font-black text-primary-foreground shadow-xl">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6 mt-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <step.icon className="h-10 w-10 text-primary" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-black text-foreground">
                  {step.title}
                </h3>
                <p className="mb-2 text-base font-medium text-muted-foreground">
                  {step.description}
                </p>
                <p className="text-sm font-bold text-primary">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
