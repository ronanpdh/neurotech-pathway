import { Search, FileText, BookOpen, Users, Briefcase, Settings, TrendingUp } from "lucide-react";

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
    <section className="bg-muted/20 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Your <span className="text-primary">Superpower</span>, Structured
          </h2>
          <p className="text-lg text-muted-foreground">
            Four clear steps to your tech career
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-full top-16 hidden h-0.5 w-full bg-gradient-to-r from-primary/40 to-transparent lg:block" style={{ width: 'calc(100% - 1.5rem)' }} />
              )}
              
              <div className="relative flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary">
                {/* Step number */}
                <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-lg border-2 border-background bg-primary text-lg font-bold text-primary-foreground">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-4 mt-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mb-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
                <p className="text-xs font-semibold text-primary">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Section */}
        <div className="mx-auto mt-20 max-w-4xl border-t border-border pt-16">
          <div className="mb-10 text-center">
            <h3 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
              For <span className="text-accent">Businesses</span>
            </h3>
            <p className="text-muted-foreground">
              Build a neuroinclusive workplace in three simple steps
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-accent">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <Briefcase className="h-7 w-7 text-accent" strokeWidth={2} />
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold text-foreground">Consult</h4>
              <p className="text-sm text-muted-foreground">
                We assess your workplace needs and goals
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-accent">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <Settings className="h-7 w-7 text-accent" strokeWidth={2} />
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold text-foreground">Implement</h4>
              <p className="text-sm text-muted-foreground">
                Custom accommodations and team training
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-accent">
              <div className="mb-4 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <TrendingUp className="h-7 w-7 text-accent" strokeWidth={2} />
                </div>
              </div>
              <h4 className="mb-2 text-lg font-bold text-foreground">Thrive</h4>
              <p className="text-sm text-muted-foreground">
                Unlock your team's full potential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
