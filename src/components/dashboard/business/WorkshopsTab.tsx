import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, Users, Clock } from "lucide-react";

const workshops = [
  {
    title: "Neurodiversity 101 for Managers",
    type: "Training",
    duration: "2 hours",
    participants: "15-20 managers",
    nextDate: "Dec 8, 2024",
    description: "Essential knowledge for leading neurodivergent team members effectively.",
    status: "upcoming",
  },
  {
    title: "Creating Neuroinclusive Workspaces",
    type: "Workshop",
    duration: "3 hours",
    participants: "Facilities team",
    nextDate: "Dec 15, 2024",
    description: "Practical strategies for designing sensory-friendly office environments.",
    status: "available",
  },
  {
    title: "Communication Strategies for Diverse Teams",
    type: "Training",
    duration: "2.5 hours",
    participants: "All teams",
    nextDate: "Jan 10, 2025",
    description: "Build better collaboration through understanding different communication styles.",
    status: "available",
  },
  {
    title: "Supporting ADHD in the Workplace",
    type: "Webinar",
    duration: "1 hour",
    participants: "HR & Managers",
    nextDate: "Dec 20, 2024",
    description: "Specific accommodations and strategies for employees with ADHD.",
    status: "available",
  },
  {
    title: "Autism-Friendly Interview Techniques",
    type: "Training",
    duration: "2 hours",
    participants: "Hiring managers",
    nextDate: "Jan 18, 2025",
    description: "Adapt your hiring process to identify autistic talent effectively.",
    status: "available",
  },
];

export const WorkshopsTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Training & Workshops</h2>
        <p className="text-muted-foreground">
          Equip your team with neuroinclusion expertise
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">24</p>
              <p className="text-sm text-muted-foreground">Managers trained</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
              <Users className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">156</p>
              <p className="text-sm text-muted-foreground">Employees reached</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Clock className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">18.5</p>
              <p className="text-sm text-muted-foreground">Training hours</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Workshops */}
      <div className="space-y-4">
        {workshops.map((workshop, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold text-primary">{workshop.type}</span>
                  {workshop.status === "upcoming" && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                      Upcoming
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground">{workshop.title}</h3>
                <p className="text-sm text-muted-foreground">{workshop.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {workshop.nextDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {workshop.participants}
                  </div>
                </div>
              </div>

              <Button>
                {workshop.status === "upcoming" ? "View Details" : "Schedule"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
