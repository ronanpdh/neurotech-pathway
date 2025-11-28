import { X, Check } from "lucide-react";

export const ProblemSolution = () => {
  const before = [
    "Fragmented tools across multiple platforms",
    "Unclear career paths and next steps",
    "Cognitive overload from too much information",
    "Systems built for neurotypical minds",
  ];

  const after = [
    "One clear, personalized roadmap",
    "Predictable steps with clear milestones",
    "Adjustable pacing that respects your energy",
    "Built for how you think and learn best",
  ];

  return (
    <section className="relative border-y-2 border-border py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
            From Chaos to <span className="text-primary">Clarity</span>
          </h2>
          <p className="text-xl font-semibold text-muted-foreground">
            The difference a structured approach makes
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="group relative overflow-hidden rounded-2xl border-4 border-destructive/30 bg-card p-8 shadow-xl transition-all hover:border-destructive/50 hover:shadow-2xl">
            <div className="absolute right-0 top-0 h-32 w-32 bg-destructive/5 blur-2xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10">
                  <X className="h-8 w-8 text-destructive" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black text-foreground">Before</h3>
              </div>
              <ul className="space-y-4">
                {before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" strokeWidth={2.5} />
                    <span className="text-base font-medium text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After */}
          <div className="group relative overflow-hidden rounded-2xl border-4 border-success/30 bg-card p-8 shadow-xl transition-all hover:border-success/50 hover:shadow-2xl">
            <div className="absolute right-0 top-0 h-32 w-32 bg-success/5 blur-2xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10">
                  <Check className="h-8 w-8 text-success" strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black text-foreground">After</h3>
              </div>
              <ul className="space-y-4">
                {after.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="mt-1 h-6 w-6 flex-shrink-0 text-success" strokeWidth={2.5} />
                    <span className="text-base font-medium text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
