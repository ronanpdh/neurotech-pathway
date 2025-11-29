import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. Check your email soon!",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/5 py-20 md:py-28">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-accent/5 blur-3xl" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                Early Access
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Join the <span className="text-primary">AdaptiveMind</span> Waitlist
            </h2>
            <p className="text-lg text-muted-foreground">
              Be the first to know when we launch. Get exclusive early access and resources.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
            <div className="flex flex-col gap-3 md:flex-row">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 border border-border bg-background text-base"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-14 bg-accent px-8 text-base font-black shadow-lg hover:bg-accent/90"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No spam. Unsubscribe anytime. Your privacy matters.
            </p>
          </form>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <div className="mb-1 text-2xl font-bold text-primary">Early</div>
              <div className="text-sm font-semibold text-foreground">Access to Platform</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Be among the first to use AdaptiveMind
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <div className="mb-1 text-2xl font-bold text-primary">Free</div>
              <div className="text-sm font-semibold text-foreground">Career Resources</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Exclusive guides and templates
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <div className="mb-1 text-2xl font-bold text-primary">Priority</div>
              <div className="text-sm font-semibold text-foreground">Support Access</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Get help when you need it most
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
