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
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            From Chaos to Clarity
          </h2>
          <p className="text-lg text-muted-foreground">
            The difference a structured approach makes
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-destructive/20 bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Before</h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-success/20 bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                <Check className="h-6 w-6 text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">After</h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
