export const SocialProof = () => {
  const stats = [
    { value: "2,500+", label: "Neurodivergent learners supported" },
    { value: "5,000+", label: "Personalized roadmaps created" },
    { value: "150+", label: "Inclusive employers" },
  ];

  return (
    <section className="border-b border-border bg-card py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
