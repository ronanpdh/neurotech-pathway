import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Calendar, Users } from "lucide-react";

const courses = [
  {
    title: "Python Fundamentals for Neurodivergent Learners",
    type: "Course",
    progress: 100,
    status: "completed",
    duration: "6 weeks",
    enrolled: 234,
  },
  {
    title: "Building Your First Web Application",
    type: "Workshop",
    progress: 65,
    status: "in-progress",
    duration: "4 weeks",
    enrolled: 156,
  },
  {
    title: "Focus Strategies for Developers",
    type: "Workshop",
    progress: 0,
    status: "upcoming",
    duration: "2 hours",
    enrolled: 89,
    startDate: "Starts Dec 15",
  },
  {
    title: "Data Structures Made Simple",
    type: "Course",
    progress: 0,
    status: "available",
    duration: "8 weeks",
    enrolled: 412,
  },
  {
    title: "Interview Preparation Masterclass",
    type: "Workshop",
    progress: 0,
    status: "available",
    duration: "3 hours",
    enrolled: 278,
  },
];

export const CoursesTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Workshops & Courses</h2>
        <p className="text-muted-foreground">
          Learn at your own pace with courses designed for neurodivergent learners
        </p>
      </div>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-xs font-semibold text-primary">{course.type}</span>
                  {course.status === "completed" && (
                    <span className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
                      Completed
                    </span>
                  )}
                  {course.status === "in-progress" && (
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      In Progress
                    </span>
                  )}
                  {course.status === "upcoming" && (
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                      {course.startDate}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.enrolled} enrolled
                  </div>
                </div>

                {course.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-foreground">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                {course.status === "completed" && (
                  <Button variant="outline">Review</Button>
                )}
                {course.status === "in-progress" && (
                  <Button>Continue</Button>
                )}
                {(course.status === "available" || course.status === "upcoming") && (
                  <Button variant="outline">Enroll</Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
