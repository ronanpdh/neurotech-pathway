import { Brain } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-black text-foreground">
                Neuro<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Where thinking differently is your pathway to tech
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-base font-black text-foreground">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-black text-foreground">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  For Employers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-black text-foreground">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="font-medium text-muted-foreground transition-colors hover:text-primary">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-border pt-8 text-center text-sm font-medium text-muted-foreground">
          <p>© {currentYear} NeuroTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
