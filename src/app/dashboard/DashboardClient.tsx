"use client";

import { useState } from "react";
import { logout } from "./actions";

type TabId = "overview" | "pipeline" | "systems" | "stages";

const tabs: { id: TabId; label: string; color: string; activeGlow: string }[] = [
  { id: "overview", label: "Overview", color: "#06B6D4", activeGlow: "shadow-[0_0_20px_rgba(6,182,212,0.15)]" },
  { id: "pipeline", label: "Pipeline", color: "#8B5CF6", activeGlow: "shadow-[0_0_20px_rgba(139,92,246,0.15)]" },
  { id: "systems", label: "Systems", color: "#F59E0B", activeGlow: "shadow-[0_0_20px_rgba(245,158,11,0.15)]" },
  { id: "stages", label: "Stages", color: "#10B981", activeGlow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]" },
];

const statusColors: Record<string, string> = {
  idea: "bg-[#64748B]",
  scripted: "bg-[#8B5CF6]",
  approved: "bg-[#F59E0B]",
  in_production: "bg-[#F97316]",
  published: "bg-[#10B981]",
  archived: "bg-[#2A2940]",
  pending: "bg-[#F59E0B]",
  changes_requested: "bg-[#F97316]",
  healthy: "bg-[#10B981]",
  warning: "bg-[#F59E0B]",
  error: "bg-[#EF4444]",
};

const stageData = [
  {
    stage: "Stage 0: Infrastructure",
    color: "#06B6D4",
    tasks: [
      { name: "Website deployed to Vercel with custom domain", done: true },
      { name: "Supabase project set up", done: true },
      { name: "Canva Brand Kit configured", done: true },
      { name: "Google Drive folder structure created", done: true },
      { name: "OBS Studio installed and configured", done: true },
      { name: "Social profiles branded", done: true },
      { name: "Privacy policy and terms of service", done: true },
      { name: "ImprovMX email forwarding", done: true },
      { name: "All tool accounts created", done: true },
    ],
  },
  {
    stage: "Stage 1: AI Team and Systems",
    color: "#8B5CF6",
    tasks: [
      { name: "7 skills rebuilt with brand, voice, and quality standards", done: true },
      { name: "Claude Code subagent configurations", done: false },
      { name: "Supabase backend", done: true },
      { name: "Dashboard at alveqi.com/dashboard", done: true },
      { name: "Daily 8 AM EST email briefing system", done: false },
      { name: "Automation pipeline wiring", done: false },
      { name: "Voice selection and audio branding", done: false },
    ],
  },
  {
    stage: "Stage 2: First Digital Products",
    color: "#F59E0B",
    tasks: [
      { name: "PDF product completed", done: false },
      { name: "2 additional products researched and created", done: false },
      { name: "Lead magnet defined and created", done: false },
      { name: "All products listed on Etsy, Gumroad, and Lemon Squeezy", done: false },
    ],
  },
  {
    stage: "Stage 3: YouTube Launch",
    color: "#10B981",
    tasks: [
      { name: "Channel fully optimized", done: false },
      { name: "Banner redesigned", done: false },
      { name: "First 10 videos scripted, produced, and published", done: false },
      { name: "Shorts strategy active", done: false },
      { name: "Consistent weekly rhythm running", done: false },
    ],
  },
  {
    stage: "Stage 4: Monetization Layer",
    color: "#EC4899",
    tasks: [
      { name: "Beehiiv email list active with lead magnet", done: false },
      { name: "Affiliate links integrated into content", done: false },
      { name: "Sponsorship outreach templates ready", done: false },
      { name: "Revenue tracking live on dashboard", done: false },
      { name: "ImprovMX upgraded for outbound email", done: false },
    ],
  },
  {
    stage: "Stage 5: Scale and Automate",
    color: "#F97316",
    tasks: [
      { name: "Automated content repurposing to all platforms", done: false },
      { name: "Batch production workflows running", done: false },
      { name: "Comment engagement system", done: false },
      { name: "Avatar character designed and integrated", done: false },
      { name: "Monthly review process running", done: false },
      { name: "Analytics-driven content decisions", done: false },
    ],
  },
];

interface DashboardClientProps {
  pipeline: Record<string, unknown>[];
  approvals: Record<string, unknown>[];
  toolUsage: Record<string, unknown>[];
  systemHealth: Record<string, unknown>[];
}

export default function DashboardClient({
  pipeline,
  approvals,
  toolUsage,
  systemHealth,
}: DashboardClientProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const pendingApprovals = approvals.filter((a) => a.status === "pending");
  const activeContent = pipeline.filter(
    (p) => p.status !== "archived" && p.status !== "published"
  );

  const overallHealth =
    systemHealth.length === 0
      ? "healthy"
      : systemHealth.some((s) => s.status === "error")
        ? "error"
        : systemHealth.some((s) => s.status === "warning")
          ? "warning"
          : "healthy";

  const now = new Date();
  const greeting =
    now.getHours() < 12
      ? "Good morning"
      : now.getHours() < 17
        ? "Good afternoon"
        : "Good evening";

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = dayNames[now.getDay()];

  const weeklyContext: Record<string, string> = {
    Monday: "Screen recording day. Check Jordan's shot list.",
    Tuesday: "Video assembly day. Jordan assembles, Maya delivers thumbnail, Riley delivers SEO.",
    Wednesday: "Publish day. Video goes live at 2 PM EST.",
    Thursday: "New cycle begins. Alex delivers the weekly trends report.",
    Friday: "Script day. Sam drafts the next script.",
    Saturday: "Script review day.",
    Sunday: "Script review day.",
  };

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen bg-[#0F0E17] text-[#F5F4F0]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0F0E17]/95 backdrop-blur-sm border-b border-[#2A2940]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <h1 className="text-lg font-bold tracking-tight">Alveqi</h1>
              <nav className="flex items-center gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? "font-semibold"
                        : "text-[#64748B] hover:text-[#F5F4F0]"
                    }`}
                    style={
                      activeTab === tab.id
                        ? { color: tab.color, backgroundColor: `${tab.color}15` }
                        : undefined
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${statusColors[overallHealth]}`}></span>
                <span className="text-xs text-[#64748B]">{overallHealth}</span>
              </div>
              <form action={logout}>
                <button
                  type="submit"
                  className="text-xs text-[#64748B] hover:text-[#F5F4F0] transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-[#1a1a2e]"
                >
                  Log out
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <main className={`max-w-7xl mx-auto px-6 py-8 ${currentTab.activeGlow}`}>
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold">{greeting}, Michelle.</h2>
              <p className="text-[#64748B] mt-1">
                It&apos;s {dayName}. {weeklyContext[dayName]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#06B6D4]/10 to-[#06B6D4]/5 border border-[#06B6D4]/20 rounded-xl p-5">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#06B6D4]/5 rounded-full -translate-y-6 translate-x-6"></div>
                <p className="text-xs text-[#06B6D4] uppercase tracking-wider mb-1 font-medium">
                  Pending Approvals
                </p>
                <p className="text-3xl font-bold text-[#F5F4F0]">
                  {pendingApprovals.length}
                </p>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#8B5CF6]/10 to-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-xl p-5">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#8B5CF6]/5 rounded-full -translate-y-6 translate-x-6"></div>
                <p className="text-xs text-[#8B5CF6] uppercase tracking-wider mb-1 font-medium">
                  Active Content
                </p>
                <p className="text-3xl font-bold text-[#F5F4F0]">
                  {activeContent.length}
                </p>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#10B981]/10 to-[#10B981]/5 border border-[#10B981]/20 rounded-xl p-5">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#10B981]/5 rounded-full -translate-y-6 translate-x-6"></div>
                <p className="text-xs text-[#10B981] uppercase tracking-wider mb-1 font-medium">
                  System Status
                </p>
                <p className="text-3xl font-bold text-[#F5F4F0] flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${statusColors[overallHealth]}`}></span>
                  <span className="capitalize">{overallHealth}</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#06B6D4] rounded-full"></span>
                Approvals Queue
              </h3>
              {pendingApprovals.length === 0 ? (
                <div className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-8 text-center">
                  <p className="text-[#64748B]">
                    No items waiting for approval. You&apos;re all caught up.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingApprovals.map((item) => (
                    <div
                      key={item.id as string}
                      className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-4 flex items-center justify-between hover:border-[#06B6D4]/30 transition-colors duration-200"
                    >
                      <div>
                        <p className="font-medium">
                          {(item.content_pipeline as Record<string, unknown>)?.title as string || "Untitled"}
                        </p>
                        <p className="text-sm text-[#64748B] capitalize">{item.type as string}</p>
                      </div>
                      <span className="text-xs bg-[#F59E0B]/15 text-[#F59E0B] px-3 py-1 rounded-full font-medium">
                        Pending
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pipeline Tab */}
        {activeTab === "pipeline" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-1.5 h-7 bg-[#8B5CF6] rounded-full"></span>
                Content Pipeline
              </h2>
              <p className="text-[#64748B] mt-1 ml-5">Track every piece of content from idea to published.</p>
            </div>

            {/* Status legend */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Idea", color: "#64748B" },
                { label: "Scripted", color: "#8B5CF6" },
                { label: "Approved", color: "#F59E0B" },
                { label: "In Production", color: "#F97316" },
                { label: "Published", color: "#10B981" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }}></span>
                  <span className="text-xs text-[#64748B]">{s.label}</span>
                </div>
              ))}
            </div>

            {pipeline.length === 0 ? (
              <div className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-12 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <p className="text-[#64748B]">No content in the pipeline yet.</p>
                <p className="text-[#64748B] text-sm mt-1">Ideas will show up here once Alex starts delivering research.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {pipeline.map((item) => (
                  <div
                    key={item.id as string}
                    className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-4 flex items-center justify-between hover:border-[#8B5CF6]/30 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: statusColors[(item.status as string) || "idea"]?.replace("bg-[", "").replace("]", "") }}
                      ></span>
                      <div>
                        <p className="font-medium">{item.title as string}</p>
                        {(item.assigned_to as string) && (
                          <p className="text-sm text-[#64748B]">
                            Assigned to {item.assigned_to as string}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#64748B] capitalize bg-[#2A2940] px-3 py-1 rounded-full">
                      {(item.status as string)?.replace("_", " ")}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Systems Tab */}
        {activeTab === "systems" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-1.5 h-7 bg-[#F59E0B] rounded-full"></span>
                Tool Usage
              </h2>
              <p className="text-[#64748B] mt-1 ml-5">Free tier consumption and alerts.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {toolUsage.map((tool) => {
                const percentage = Number(tool.usage_percentage) || 0;
                const barColor =
                  percentage >= 95
                    ? "#EF4444"
                    : percentage >= 80
                      ? "#F59E0B"
                      : "#06B6D4";

                return (
                  <div
                    key={tool.id as string}
                    className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-4 hover:border-[#F59E0B]/20 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-medium">{tool.tool_name as string}</p>
                      {(tool.alert_triggered as boolean) && (
                        <span className="text-xs bg-[#F59E0B]/15 text-[#F59E0B] px-2 py-0.5 rounded-full font-medium">
                          Alert
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-[#2A2940] rounded-full h-2 mb-2">
                      <div
                        className="h-2 rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min(percentage, 100)}%`,
                          backgroundColor: barColor,
                          boxShadow: percentage >= 80 ? `0 0 8px ${barColor}40` : "none",
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-[#64748B]">
                      {Number(tool.current_usage)} / {Number(tool.free_limit)} ({percentage.toFixed(0)}%)
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3 mt-12">
                <span className="w-1.5 h-7 bg-[#F59E0B] rounded-full"></span>
                System Health
              </h2>
              <p className="text-[#64748B] mt-1 ml-5">Recent events and component status.</p>
            </div>

            {systemHealth.length === 0 ? (
              <div className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-[#64748B]">All systems operational. No events logged.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {systemHealth.map((event) => (
                  <div
                    key={event.id as string}
                    className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-4 flex items-center gap-3"
                  >
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${statusColors[(event.status as string) || "healthy"]}`}></span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.component as string}</p>
                      <p className="text-xs text-[#64748B]">{event.message as string}</p>
                    </div>
                    <span className="text-xs text-[#64748B]">
                      {event.occurred_at ? new Date(event.occurred_at as string).toLocaleDateString() : ""}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Stages Tab */}
        {activeTab === "stages" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-1.5 h-7 bg-[#10B981] rounded-full"></span>
                Project Stages
              </h2>
              <p className="text-[#64748B] mt-1 ml-5">Full project progress across all stages.</p>
            </div>

            {/* Overall progress */}
            <div className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-[#64748B]">Overall Progress</p>
                <p className="text-sm font-medium">
                  {stageData.reduce((acc, s) => acc + s.tasks.filter((t) => t.done).length, 0)}/
                  {stageData.reduce((acc, s) => acc + s.tasks.length, 0)} tasks
                </p>
              </div>
              <div className="flex gap-1 h-2">
                {stageData.map((stage) => {
                  const done = stage.tasks.filter((t) => t.done).length;
                  const total = stage.tasks.length;
                  return (
                    <div key={stage.stage} className="flex-1 bg-[#2A2940] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${(done / total) * 100}%`,
                          backgroundColor: stage.color,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-1 mt-2">
                {stageData.map((stage) => (
                  <div key={stage.stage} className="flex-1 text-center">
                    <span className="text-[10px] text-[#64748B]">S{stageData.indexOf(stage)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {stageData.map((stage) => {
                const done = stage.tasks.filter((t) => t.done).length;
                const total = stage.tasks.length;
                const percentage = Math.round((done / total) * 100);
                const isComplete = done === total;

                return (
                  <div
                    key={stage.stage}
                    className="bg-[#1a1a2e]/50 border border-[#2A2940] rounded-xl p-5 hover:border-opacity-50 transition-colors duration-200"
                    style={{ borderColor: isComplete ? `${stage.color}40` : undefined }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: stage.color }}
                        ></span>
                        <h4 className="font-medium">{stage.stage}</h4>
                      </div>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={
                          isComplete
                            ? { backgroundColor: `${stage.color}20`, color: stage.color }
                            : { backgroundColor: "#2A2940", color: "#64748B" }
                        }
                      >
                        {done}/{total} ({percentage}%)
                      </span>
                    </div>

                    <div className="w-full bg-[#2A2940] rounded-full h-1.5 mb-4">
                      <div
                        className="h-1.5 rounded-full transition-all duration-700"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: stage.color,
                          boxShadow: isComplete ? `0 0 8px ${stage.color}40` : "none",
                        }}
                      ></div>
                    </div>

                    <div className="space-y-2">
                      {stage.tasks.map((task) => (
                        <div key={task.name} className="flex items-center gap-2.5 text-sm">
                          {task.done ? (
                            <svg
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: stage.color }}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-[#64748B]/50 flex-shrink-0"></span>
                          )}
                          <span className={task.done ? "text-[#64748B]" : "text-[#F5F4F0]"}>
                            {task.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}