import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { AssessmentTab } from "@/components/dashboard/user/AssessmentTab";
import { RoadmapTab } from "@/components/dashboard/user/RoadmapTab";
import { AIMentorTab } from "@/components/dashboard/user/AIMentorTab";
import { ResourcesTab } from "@/components/dashboard/user/ResourcesTab";
import { CoursesTab } from "@/components/dashboard/user/CoursesTab";
import { ClipboardCheck, Map, Bot, BookOpen, GraduationCap } from "lucide-react";

const navItems = [
  { title: "Assessment", path: "", icon: ClipboardCheck },
  { title: "My Roadmap", path: "/roadmap", icon: Map },
  { title: "AI Mentor", path: "/mentor", icon: Bot },
  { title: "Resources", path: "/resources", icon: BookOpen },
  { title: "Workshops & Courses", path: "/courses", icon: GraduationCap },
];

export default function Dashboard() {
  return (
    <DashboardLayout sidebar={<DashboardSidebar items={navItems} basePath="/dashboard" />}>
      <Routes>
        <Route index element={<AssessmentTab />} />
        <Route path="roadmap" element={<RoadmapTab />} />
        <Route path="mentor" element={<AIMentorTab />} />
        <Route path="resources" element={<ResourcesTab />} />
        <Route path="courses" element={<CoursesTab />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
