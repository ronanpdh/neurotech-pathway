import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Accommodation Request Template",
    category: "Template",
    format: "DOCX",
    description: "Standardized form for employees to request workplace accommodations.",
    downloads: 45,
  },
  {
    title: "Manager's Guide to Neurodiversity",
    category: "Guide",
    format: "PDF",
    description: "Comprehensive handbook covering common neurodivergent traits and support strategies.",
    downloads: 128,
  },
  {
    title: "Inclusive Job Description Checklist",
    category: "Checklist",
    format: "PDF",
    description: "Ensure your job postings attract neurodivergent candidates.",
    downloads: 76,
  },
  {
    title: "Sensory Audit Worksheet",
    category: "Worksheet",
    format: "PDF",
    description: "Evaluate your workspace for sensory accessibility.",
    downloads: 52,
  },
  {
    title: "Performance Review Adaptations",
    category: "Guide",
    format: "PDF",
    description: "Modify your review process to be more inclusive and effective.",
    downloads: 89,
  },
  {
    title: "Onboarding Best Practices",
    category: "Guide",
    format: "PDF",
    description: "Create a welcoming first experience for neurodivergent hires.",
    downloads: 103,
  },
  {
    title: "Communication Preference Card",
    category: "Template",
    format: "DOCX",
    description: "Help employees communicate their preferred work styles.",
    downloads: 67,
  },
  {
    title: "Legal Compliance Overview",
    category: "Reference",
    format: "PDF",
    description: "Understand ADA and other legal requirements for accommodations.",
    downloads: 92,
  },
];

export const ResourcesTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Business Resources</h2>
        <p className="text-muted-foreground">
          Templates, guides, and tools for building a neuroinclusive workplace
        </p>
      </div>

      {/* Popular Resources Banner */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-primary/20">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              🎉 New Resource: Neuroinclusion Action Plan Template
            </h3>
            <p className="text-sm text-muted-foreground">
              A step-by-step guide to implementing neuroinclusion initiatives in your organization.
            </p>
          </div>
          <Button className="flex-shrink-0">
            Download
          </Button>
        </div>
      </Card>

      {/* Resources Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource, index) => (
          <Card key={index} className="p-6 hover:border-primary transition-colors">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold text-primary">{resource.category}</span>
                </div>
                <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {resource.format}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground">{resource.title}</h3>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">
                  {resource.downloads} downloads
                </span>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-3 w-3" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* External Resources */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          External Resources
        </h3>
        <div className="space-y-3">
          <a 
            href="#" 
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
          >
            <div>
              <p className="font-medium text-foreground">ADA National Network</p>
              <p className="text-sm text-muted-foreground">Legal requirements and compliance</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
          <a 
            href="#" 
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
          >
            <div>
              <p className="font-medium text-foreground">Neurodiversity Hub</p>
              <p className="text-sm text-muted-foreground">Latest research and best practices</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </Card>
    </div>
  );
};
