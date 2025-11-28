import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Sparkles, Target, TrendingUp, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuizResultsProps {
  answers: Record<string, string>;
}

// Career matching logic
const matchCareer = (answers: Record<string, string>) => {
  const energizes = answers.energizes?.toLowerCase() || "";
  const strengths = answers.strengths?.toLowerCase() || "";
  
  if (energizes.includes("problem") || strengths.includes("logical")) {
    return {
      role: "Software Engineer",
      why: "Your logical thinking and problem-solving skills align perfectly with software engineering. Your ability to see patterns and debug complex systems is a significant advantage.",
      strengths: ["Pattern recognition", "Attention to detail", "Systematic thinking"],
    };
  } else if (energizes.includes("creating") || strengths.includes("creative")) {
    return {
      role: "UX Designer",
      why: "Your creative thinking and user empathy make you ideal for UX design. Your unique perspective helps create more inclusive, accessible products.",
      strengths: ["Creative problem-solving", "Empathy for users", "Visual thinking"],
    };
  } else if (energizes.includes("analyzing") || strengths.includes("detail")) {
    return {
      role: "Data Analyst",
      why: "Your detail-oriented nature and analytical skills are perfect for data analysis. Your ability to hyperfocus on patterns others miss is invaluable.",
      strengths: ["Deep focus", "Pattern recognition", "Analytical thinking"],
    };
  } else if (energizes.includes("helping") || strengths.includes("communication")) {
    return {
      role: "Product Manager",
      why: "Your ability to understand diverse perspectives and communicate effectively makes you an excellent product manager. You bridge technical and human needs naturally.",
      strengths: ["Cross-functional thinking", "User advocacy", "Clear communication"],
    };
  } else {
    return {
      role: "DevOps Engineer",
      why: "Your systematic approach and attention to detail make you ideal for DevOps. You excel at creating reliable, automated systems.",
      strengths: ["Systems thinking", "Process optimization", "Reliability focus"],
    };
  }
};

export const QuizResults = ({ answers }: QuizResultsProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const career = matchCareer(answers);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please enter your name and email.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would send to backend
    console.log("Form submitted:", { ...formData, answers, career });
    
    setSubmitted(true);
    toast({
      title: "Success!",
      description: "Check your email for your complete personalized roadmap.",
    });
  };

  if (submitted) {
    return (
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-success/10">
                <CheckCircle2 className="h-12 w-12 text-success" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Check Your Email!
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We've sent your complete personalized roadmap with detailed learning resources, timelines, and next steps to <span className="font-medium text-foreground">{formData.email}</span>.
            </p>
            <p className="text-muted-foreground">
              Don't see it? Check your spam folder or contact us at support@techpathway.com
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 flex justify-center">
              <Sparkles className="h-12 w-12 text-accent" />
            </div>
            <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
              Your Personalized Tech Career Roadmap
            </h2>
            <p className="text-lg text-muted-foreground">
              Based on your unique strengths and thinking style
            </p>
          </div>

          {/* Career Match */}
          <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Your Best Fit: {career.role}
              </h3>
            </div>
            <p className="mb-6 text-lg text-muted-foreground">{career.why}</p>
            
            <div>
              <h4 className="mb-3 font-semibold text-foreground">Your Superpowers for This Role:</h4>
              <ul className="space-y-2">
                {career.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success" />
                    <span className="text-muted-foreground">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Roadmap Preview */}
          <Card className="mb-8 p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Your Roadmap Preview
              </h3>
            </div>

            <div className="space-y-6">
              {/* Timeline visualization */}
              <div className="relative pl-8">
                <div className="absolute bottom-0 left-3 top-0 w-0.5 bg-border" />
                
                <div className="relative mb-6">
                  <div className="absolute -left-[29px] top-1 h-6 w-6 rounded-full bg-primary" />
                  <div>
                    <h4 className="mb-2 font-bold text-foreground">Starting Point</h4>
                    <p className="text-sm text-muted-foreground">
                      {career.strengths.join(" • ")}
                    </p>
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute -left-[29px] top-1 h-6 w-6 rounded-full bg-primary/60" />
                  <div>
                    <h4 className="mb-2 font-bold text-foreground">Learning Phase</h4>
                    <p className="text-sm text-muted-foreground">
                      2-3 months: Master core technical skills through structured micro-courses
                    </p>
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute -left-[29px] top-1 h-6 w-6 rounded-full bg-primary/40" />
                  <div>
                    <h4 className="mb-2 font-bold text-foreground">Project Building</h4>
                    <p className="text-sm text-muted-foreground">
                      1-2 months: Build portfolio projects with guidance and support
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-[29px] top-1 h-6 w-6 rounded-full bg-success" />
                  <div>
                    <h4 className="mb-2 font-bold text-foreground">Ready for {career.role}</h4>
                    <p className="text-sm text-muted-foreground">
                      Start applying to neurodiversity-friendly tech companies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Email Form */}
          <Card className="p-8 shadow-lg">
            <div className="mb-6 flex items-center gap-3">
              <Mail className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Get Your Complete Roadmap
              </h3>
            </div>
            <p className="mb-6 text-muted-foreground">
              Receive your full personalized roadmap with detailed learning resources, timeline estimates, and employer matches.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="linkedin">LinkedIn (optional)</Label>
                <Input
                  id="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="linkedin.com/in/yourprofile"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send My Full Career Roadmap
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
