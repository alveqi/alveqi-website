import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free AI tools, guides, templates, and strategies for solo entrepreneurs. Curated by Alveqi to help you work less and earn more.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06B6D4]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center relative">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-6">
            Free Resources
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F4F0] leading-tight mb-6">
            Tools and guides for the{" "}
            <span className="text-[#06B6D4]">AI-powered solopreneur</span>
          </h1>
          <p className="text-lg text-[#8B8A99] leading-relaxed max-w-2xl mx-auto">
            Practical, no-fluff resources to help you automate more, create faster, and earn more as a one-person business. All free, all actionable.
          </p>
        </div>
      </section>

      <ResourcesClient />
    </>
  );
}