import { X, Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProblemSolution = () => {
  const individualBefore = [
    "Fragmented tools across multiple platforms",
    "Unclear career paths and next steps",
    "Cognitive overload from too much information",
    "Systems built for neurotypical minds",
  ];

  const individualAfter = [
    "One clear, personalized roadmap",
    "Predictable steps with clear milestones",
    "Adjustable pacing that respects your energy",
    "Built for how you think and learn best",
  ];

  const businessBefore = [
    "High turnover among neurodivergent staff",
    "Untapped employee potential",
    "One-size-fits-all management approach",
    "Difficulty attracting diverse talent",
  ];

  const businessAfter = [
    "Retain and grow diverse talent",
    "Maximize unique cognitive strengths",
    "Tailored support strategies for teams",
    "Pipeline of pre-vetted candidates",
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            From Chaos to <span className="text-primary">Clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The difference a structured approach makes
          </p>
        </div>

        <Tabs defaultValue="individuals" className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="individuals">For Individuals</TabsTrigger>
            <TabsTrigger value="businesses">For Businesses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="individuals">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Before */}
              <div className="rounded-xl border border-destructive/20 bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <X className="h-6 w-6 text-destructive" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Before</h3>
                </div>
                <ul className="space-y-3">
                  {individualBefore.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive/60" strokeWidth={2} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="rounded-xl border border-success/20 bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                    <Check className="h-6 w-6 text-success" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">After</h3>
                </div>
                <ul className="space-y-3">
                  {individualAfter.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success/60" strokeWidth={2} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="businesses">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Before */}
              <div className="rounded-xl border border-destructive/20 bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <X className="h-6 w-6 text-destructive" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Before</h3>
                </div>
                <ul className="space-y-3">
                  {businessBefore.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="mt-1 h-5 w-5 flex-shrink-0 text-destructive/60" strokeWidth={2} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="rounded-xl border border-success/20 bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
                    <Check className="h-6 w-6 text-success" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">After</h3>
                </div>
                <ul className="space-y-3">
                  {businessAfter.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success/60" strokeWidth={2} />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
