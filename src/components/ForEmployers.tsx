import { Button } from "@/components/ui/button";
import { Brain, Target, Sparkles, ClipboardCheck, Users, Lightbulb, UserPlus } from "lucide-react";

export const ForEmployers = () => {
  const strengths = [
    {
      icon: Brain,
      title: "Pattern Recognition",
      description: "Spot issues others miss",
    },
    {
      icon: Target,
      title: "Deep Focus",
      description: "Sustained attention on complex tasks",
    },
    {
      icon: Sparkles,
      title: "Innovative Thinking",
      description: "Novel approaches to problem-solving",
    },
  ];

  const services = [
    {
      icon: ClipboardCheck,
      title: "Workplace Assessment",
      description: "Evaluate your environment for neuroinclusion and identify optimization opportunities",
    },
    {
      icon: Users,
      title: "Manager Training",
      description: "Equip leaders with strategies to support and maximize neurodivergent team members",
    },
    {
      icon: Lightbulb,
      title: "Accommodation Consulting",
      description: "Implement practical changes that boost productivity and employee satisfaction",
    },
    {
      icon: UserPlus,
      title: "Talent Pipeline",
      description: "Connect with pre-vetted neurodivergent candidates ready for tech roles",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-background to-primary/10 py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
              Build a <span className="text-accent">Neuroinclusive</span> Workplace
            </h2>
            <p className="text-xl font-medium text-muted-foreground">
              Hire neurodivergent talent AND get the most from your existing team
            </p>
          </div>

          {/* Why Neurodivergent Talent */}
          <div className="mb-20">
            <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
              Why Neurodivergent Talent?
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {strengths.map((strength, index) => (
                <div 
                  key={index} 
                  className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent hover:shadow-lg"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 transition-all group-hover:border-accent group-hover:bg-accent/20">
                      <strength.icon className="h-7 w-7 text-accent" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h4 className="mb-2 text-base font-bold text-foreground">{strength.title}</h4>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How We Help Your Business */}
          <div className="mb-12">
            <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
              How We Help Your Business
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <service.icon className="h-6 w-6 text-accent" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-base font-bold text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl hover:shadow-2xl bg-accent text-accent-foreground hover:bg-accent/90">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
