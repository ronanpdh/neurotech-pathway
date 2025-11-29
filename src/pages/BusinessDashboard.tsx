import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { AnalyticsTab } from "@/components/dashboard/business/AnalyticsTab";
import { WorkshopsTab } from "@/components/dashboard/business/WorkshopsTab";
import { ResourcesTab } from "@/components/dashboard/business/ResourcesTab";
import { BarChart3, GraduationCap, FolderOpen } from "lucide-react";

const navItems = [
  { title: "Analytics", path: "", icon: BarChart3 },
  { title: "Workshops", path: "/workshops", icon: GraduationCap },
  { title: "Resources", path: "/resources", icon: FolderOpen },
];

export default function BusinessDashboard() {
  return (
    <DashboardLayout sidebar={<DashboardSidebar items={navItems} basePath="/business-dashboard" />}>
      <Routes>
        <Route index element={<AnalyticsTab />} />
        <Route path="workshops" element={<WorkshopsTab />} />
        <Route path="resources" element={<ResourcesTab />} />
        <Route path="*" element={<Navigate to="/business-dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
}
