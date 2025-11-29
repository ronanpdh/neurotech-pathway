import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, User, Send } from "lucide-react";

const demoMessages = [
  {
    role: "user",
    content: "I'm struggling with staying focused during long coding sessions. Any tips?",
  },
  {
    role: "assistant",
    content: "I understand that can be challenging! Based on your cognitive profile, I'd recommend trying the Pomodoro Technique with 25-minute focused sessions followed by 5-minute breaks. Also, consider using noise-canceling headphones or background white noise. Would you like me to suggest some specific focus tools?",
  },
  {
    role: "user",
    content: "Yes, that would be helpful!",
  },
  {
    role: "assistant",
    content: "Great! Here are some tools that work well for neurodivergent developers:\n\n1. **Forest App** - Gamifies focus time\n2. **Brain.fm** - Scientifically designed focus music\n3. **Cold Turkey** - Blocks distracting websites\n4. **Notion** - Helps organize thoughts and tasks\n\nI've also added a workshop on 'Focus Strategies for Neurodivergent Developers' to your recommended courses. It's starting next week!",
  },
];

export const AIMentorTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">AI Career Mentor</h2>
        <p className="text-muted-foreground">
          Get personalized guidance for your career journey
        </p>
      </div>

      {/* Chat Container */}
      <Card className="flex flex-col h-[600px]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {demoMessages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary flex-shrink-0">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
              )}
              <div
                className={`max-w-[70%] rounded-lg px-4 py-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent flex-shrink-0">
                  <User className="h-5 w-5 text-accent-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex gap-2">
            <Input
              placeholder="Ask your AI mentor anything... (Demo mode)"
              disabled
              className="flex-1"
            />
            <Button size="icon" disabled>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Demo mode: This is a preview of how the AI mentor will work
          </p>
        </div>
      </Card>
    </div>
  );
};
