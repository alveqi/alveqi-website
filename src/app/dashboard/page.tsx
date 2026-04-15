import { supabase } from "@/lib/supabase";
import { logout } from "./actions";

export const dynamic = "force-dynamic";

async function getData() {
  const [pipeline, approvals, toolUsage, systemHealth] = await Promise.all([
    supabase
      .from("content_pipeline")
      .select("*")
      .order("created_at", { ascending: false }),
    supabase
      .from("approvals")
      .select("*, content_pipeline(title)")
      .order("submitted_at", { ascending: false }),
    supabase
      .from("tool_usage")
      .select("*")
      .order("tool_name", { ascending: true }),
    supabase
      .from("system_health")
      .select("*")
      .order("occurred_at", { ascending: false })
      .limit(10),
  ]);

  return {
    pipeline: pipeline.data || [],
    approvals: approvals.data || [],
    toolUsage: toolUsage.data || [],
    systemHealth: systemHealth.data || [],
  };
}

const statusColors: Record<string, string> = {
  idea: "bg-[#64748B]",
  scripted: "bg-blue-500",
  approved: "bg-yellow-500",
  in_production: "bg-orange-500",
  published: "bg-green-500",
  archived: "bg-[#2A2940]",
  pending: "bg-yellow-500",
  changes_requested: "bg-orange-500",
  healthy: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

const stageData = [
  {
    stage: "Stage 0: Infrastructure",
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
    tasks: [
      { name: "7 skills rebuilt with brand, voice, and quality standards", done: true },
      { name: "Claude Code subagent configurations", done: false },
      { name: "Supabase backend", done: true },
      { name: "Dashboard at alveqi.com/dashboard", done: false },
      { name: "Daily 8 AM EST email briefing system", done: false },
      { name: "Automation pipeline wiring", done: false },
      { name: "Voice selection and audio branding", done: false },
    ],
  },
  {
    stage: "Stage 2: First Digital Products",
    tasks: [
      { name: "PDF product completed", done: false },
      { name: "2 additional products researched and created", done: false },
      { name: "Lead magnet defined and created", done: false },
      { name: "All products listed on Etsy, Gumroad, and Lemon Squeezy", done: false },
    ],
  },
  {
    stage: "Stage 3: YouTube Launch",
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

export default async function DashboardPage() {
  const { pipeline, approvals, toolUsage, systemHealth } = await getData();

  const pendingApprovals = approvals.filter(
    (a: Record<string, unknown>) => a.status === "pending"
  );
  const activeContent = pipeline.filter(
    (p: Record<string, unknown>) =>
      p.status !== "archived" && p.status !== "published"
  );

  const overallHealth =
    systemHealth.length === 0
      ? "healthy"
      : systemHealth.some((s: Record<string, unknown>) => s.status === "error")
        ? "error"
        : systemHealth.some(
              (s: Record<string, unknown>) => s.status === "warning"
            )
          ? "warning"
          : "healthy";

  const now = new Date();
  const greeting =
    now.getHours() < 12
      ? "Good morning"
      : now.getHours() < 17
        ? "Good afternoon"
        : "Good evening";

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayNames[now.getDay()];

  const weeklyContext: Record<string, string> = {
    Monday: "Screen recording day. Check Jordan's shot list.",
    Tuesday:
      "Video assembly day. Jordan assembles, Maya delivers thumbnail, Riley delivers SEO.",
    Wednesday: "Publish day. Video goes live at 2 PM EST.",
    Thursday: "New cycle begins. Alex delivers the weekly trends report.",
    Friday: "Script day. Sam drafts the next script.",
    Saturday: "Script review day.",
    Sunday: "Script review day.",
  };

  return (
    <div className="min-h-screen bg-[#0F0E17] text-[#F5F4F0]">
      <header className="border-b border-[#2A2940] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Alveqi</h1>
            <span className="text-xs text-[#64748B] bg-[#1a1a2e] px-2 py-1 rounded">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${statusColors[overallHealth]}`}
              ></span>
              <span className="text-xs text-[#64748B]">
                System {overallHealth}
              </span>
            </div>
            <form action={logout}>
              <button
                type="submit"
                className="text-xs text-[#64748B] hover:text-[#F5F4F0] transition-colors duration-200"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              {greeting}, Michelle.
            </h2>
            <p className="text-[#64748B] mt-1">
              It&apos;s {dayName}. {weeklyContext[dayName]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-5">
              <p className="text-xs text-[#64748B] uppercase tracking-wider mb-1">
                Pending Approvals
              </p>
              <p className="text-3xl font-bold text-[#06B6D4]">
                {pendingApprovals.length}
              </p>
            </div>
            <div className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-5">
              <p className="text-xs text-[#64748B] uppercase tracking-wider mb-1">
                Active Content
              </p>
              <p className="text-3xl font-bold text-[#06B6D4]">
                {activeContent.length}
              </p>
            </div>
            <div className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-5">
              <p className="text-xs text-[#64748B] uppercase tracking-wider mb-1">
                System Status
              </p>
              <p className="text-3xl font-bold flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${statusColors[overallHealth]}`}
                ></span>
                <span className="capitalize">{overallHealth}</span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Approvals Queue</h3>
          {pendingApprovals.length === 0 ? (
            <div className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-6 text-center">
              <p className="text-[#64748B]">
                No items waiting for approval. You&apos;re all caught up.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {pendingApprovals.map((item: Record<string, unknown>) => (
                <div
                  key={item.id as string}
                  className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">
                      {(item.content_pipeline as Record<string, unknown>)
                        ?.title as string || "Untitled"}
                    </p>
                    <p className="text-sm text-[#64748B] capitalize">
                      {item.type as string}
                    </p>
                  </div>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Content Pipeline</h3>
          {pipeline.length === 0 ? (
            <div className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-6 text-center">
              <p className="text-[#64748B]">
                No content in the pipeline yet. Ideas will show up here once
                Alex starts delivering research.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {pipeline.map((item: Record<string, unknown>) => (
                <div
                  key={item.id as string}
                  className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${statusColors[(item.status as string) || "idea"]}`}
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
                  <span className="text-xs text-[#64748B] capitalize">
                    {(item.status as string)?.replace("_", " ")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Tool Usage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolUsage.map((tool: Record<string, unknown>) => {
              const percentage = Number(tool.usage_percentage) || 0;
              const barColor =
                percentage >= 95
                  ? "bg-red-500"
                  : percentage >= 80
                    ? "bg-yellow-500"
                    : "bg-[#06B6D4]";

              return (
                <div
                  key={tool.id as string}
                  className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium">
                      {tool.tool_name as string}
                    </p>
                    {(tool.alert_triggered as boolean) && (
                      <span className="text-xs text-yellow-400">Alert</span>
                    )}
                  </div>
                  <div className="w-full bg-[#2A2940] rounded-full h-2 mb-2">
                    <div
                      className={`h-2 rounded-full ${barColor} transition-all duration-500`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-[#64748B]">
                    {Number(tool.current_usage)} / {Number(tool.free_limit)} (
                    {percentage.toFixed(0)}%)
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">System Health</h3>
          {systemHealth.length === 0 ? (
            <div className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-6 text-center">
              <p className="text-[#64748B]">
                No system events logged. All systems operational.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {systemHealth.map((event: Record<string, unknown>) => (
                <div
                  key={event.id as string}
                  className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-4 flex items-center gap-3"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${statusColors[(event.status as string) || "healthy"]}`}
                  ></span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {event.component as string}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      {event.message as string}
                    </p>
                  </div>
                  <span className="text-xs text-[#64748B]">
                    {event.occurred_at
                      ? new Date(
                          event.occurred_at as string
                        ).toLocaleDateString()
                      : ""}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Project Stages</h3>
          <div className="space-y-6">
            {stageData.map((stage) => {
              const done = stage.tasks.filter((t) => t.done).length;
              const total = stage.tasks.length;
              const percentage = Math.round((done / total) * 100);
              const isComplete = done === total;

              return (
                <div
                  key={stage.stage}
                  className="bg-[#1a1a2e] border border-[#2A2940] rounded-lg p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{stage.stage}</h4>
                    <span
                      className={`text-xs px-2 py-1 rounded ${isComplete ? "bg-green-500/20 text-green-400" : "bg-[#2A2940] text-[#64748B]"}`}
                    >
                      {done}/{total} ({percentage}%)
                    </span>
                  </div>

                  <div className="w-full bg-[#2A2940] rounded-full h-1.5 mb-4">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${isComplete ? "bg-green-500" : "bg-[#06B6D4]"}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>

                  <div className="space-y-2">
                    {stage.tasks.map((task) => (
                      <div
                        key={task.name}
                        className="flex items-center gap-2 text-sm"
                      >
                        {task.done ? (
                          <svg
                            className="w-4 h-4 text-green-400 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-[#64748B] flex-shrink-0"></span>
                        )}
                        <span
                          className={
                            task.done ? "text-[#64748B]" : "text-[#F5F4F0]"
                          }
                        >
                          {task.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2A2940] px-6 py-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-[#64748B]">
            Alveqi Dashboard. For your eyes only.
          </p>
        </div>
      </footer>
    </div>
  );
}