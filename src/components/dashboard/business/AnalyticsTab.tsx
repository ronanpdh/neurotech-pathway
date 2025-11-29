import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, CheckCircle2, AlertCircle } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const inclusionData = [
  { month: "Jun", score: 58 },
  { month: "Jul", score: 62 },
  { month: "Aug", score: 65 },
  { month: "Sep", score: 68 },
  { month: "Oct", score: 70 },
  { month: "Nov", score: 72 },
];

const accommodationData = [
  { type: "Flexible Hours", count: 12 },
  { type: "Quiet Space", count: 8 },
  { type: "Remote Work", count: 15 },
  { type: "Task Management", count: 6 },
];

const teamData = [
  { name: "ADHD", value: 18, color: "hsl(185, 80%, 35%)" },
  { name: "Autism", value: 12, color: "hsl(280, 70%, 50%)" },
  { name: "Dyslexia", value: 8, color: "hsl(145, 70%, 40%)" },
  { name: "Other", value: 5, color: "hsl(220, 20%, 70%)" },
];

export const AnalyticsTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Track your workplace neuroinclusion metrics
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Inclusion Score</p>
              <p className="text-3xl font-bold text-foreground">72</p>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +8 from last month
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Employee Satisfaction</p>
              <p className="text-3xl font-bold text-foreground">85%</p>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                +5% this quarter
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <Users className="h-6 w-6 text-success" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Accommodations</p>
              <p className="text-3xl font-bold text-foreground">41</p>
              <p className="text-xs text-muted-foreground mt-1">
                Across 28 employees
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <AlertCircle className="h-6 w-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Retention Rate</p>
              <p className="text-3xl font-bold text-foreground">94%</p>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" />
                Above industry avg
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Inclusion Score Trend */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Neuroinclusion Score Trend
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={inclusionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Accommodation Types */}
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Accommodation Requests by Type
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accommodationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
              <Bar dataKey="count" fill="hsl(var(--accent))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Team Composition */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-foreground">
          Neurodivergent Team Composition
        </h3>
        <div className="flex items-center gap-8">
          <ResponsiveContainer width="50%" height={300}>
            <PieChart>
              <Pie
                data={teamData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {teamData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem"
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-3">
            {teamData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="h-4 w-4 rounded-sm" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <span className="text-sm text-muted-foreground">({item.value} employees)</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
