import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Clock } from "lucide-react";

const resources = [
  {
    title: "ADHD and Programming: A Complete Guide",
    category: "Article",
    readTime: "8 min read",
    description: "Learn strategies to leverage your ADHD traits in coding work.",
    link: "#",
  },
  {
    title: "Understanding Autism in Tech Careers",
    category: "Guide",
    readTime: "12 min read",
    description: "Navigate the tech industry with insights specific to autistic professionals.",
    link: "#",
  },
  {
    title: "Sensory-Friendly Workspace Setup",
    category: "Tutorial",
    readTime: "5 min read",
    description: "Create an environment that reduces sensory overwhelm.",
    link: "#",
  },
  {
    title: "Communication Strategies for Neurodivergent Devs",
    category: "Article",
    readTime: "10 min read",
    description: "Effective communication techniques for team collaboration.",
    link: "#",
  },
  {
    title: "Time Management Without Burnout",
    category: "Guide",
    readTime: "15 min read",
    description: "Sustainable productivity systems for neurodivergent minds.",
    link: "#",
  },
  {
    title: "Interview Prep for Neurodivergent Candidates",
    category: "Tutorial",
    readTime: "20 min read",
    description: "Ace technical interviews while being your authentic self.",
    link: "#",
  },
];

export const ResourcesTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Resources</h2>
        <p className="text-muted-foreground">
          Curated articles, guides, and tools for your success
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource, index) => (
          <Card key={index} className="p-6 hover:border-primary transition-colors">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold text-primary">{resource.category}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {resource.readTime}
                </div>
              </div>
              
              <h3 className="font-semibold text-foreground">{resource.title}</h3>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
              
              <Button variant="outline" size="sm" className="w-full gap-2">
                Read More
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
