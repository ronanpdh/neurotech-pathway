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
    <section className="relative overflow-hidden border-y-2 border-border bg-accent/5 py-24 md:py-32">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute left-1/4 top-0 h-96 w-96 bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-accent/10 blur-3xl" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-4 py-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Early Access
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
              Join the <span className="text-primary">NeuroTech</span> Waitlist
            </h2>
            <p className="text-xl font-semibold text-muted-foreground">
              Be the first to know when we launch. Get exclusive early access and resources.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 border-2 border-border bg-background text-lg font-semibold shadow-lg"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="h-14 bg-accent px-8 text-lg font-bold shadow-xl hover:bg-accent/90 hover:shadow-2xl"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
            <p className="mt-4 text-center text-sm font-medium text-muted-foreground">
              No spam. Unsubscribe anytime. Your privacy matters.
            </p>
          </form>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border-2 border-border bg-background p-6 shadow-lg">
              <div className="mb-2 text-3xl font-black text-primary">Early</div>
              <div className="font-bold text-foreground">Access to Platform</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Be among the first to use NeuroTech
              </div>
            </div>
            <div className="rounded-lg border-2 border-border bg-background p-6 shadow-lg">
              <div className="mb-2 text-3xl font-black text-primary">Free</div>
              <div className="font-bold text-foreground">Career Resources</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Exclusive guides and templates
              </div>
            </div>
            <div className="rounded-lg border-2 border-border bg-background p-6 shadow-lg">
              <div className="mb-2 text-3xl font-black text-primary">Priority</div>
              <div className="font-bold text-foreground">Support Access</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Get help when you need it most
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
