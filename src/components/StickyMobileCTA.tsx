import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StickyMobileCTAProps {
  onStartQuiz: () => void;
}

export const StickyMobileCTA = ({ onStartQuiz }: StickyMobileCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 90vh (hero section)
      const heroHeight = window.innerHeight * 0.9;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        size="lg"
        className="w-full h-14 text-base font-black shadow-2xl bg-accent text-accent-foreground hover:bg-accent/90"
        onClick={onStartQuiz}
      >
        Get Your Free Roadmap
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};
