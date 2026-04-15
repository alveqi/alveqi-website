import { supabase } from "@/lib/supabase";
import DashboardClient from "./DashboardClient";

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

export default async function DashboardPage() {
  const data = await getData();
  return <DashboardClient {...data} />;
}