import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free AI tools, guides, templates, and strategies for solo entrepreneurs. Curated by Alveqi to help you work less and earn more.",
};

const categories = [
  {
    id: "getting-started",
    label: "Getting Started with AI",
    color: "#06B6D4",
  },
  {
    id: "automation",
    label: "Automation and Workflows",
    color: "#06B6D4",
  },
  {
    id: "content",
    label: "Content and Marketing",
    color: "#06B6D4",
  },
  {
    id: "revenue",
    label: "Revenue and Sales",
    color: "#06B6D4",
  },
];

const resources = [
  {
    category: "getting-started",
    type: "Guide",
    title: "The Solo Entrepreneur AI Starter Pack",
    description:
      "The exact five AI tools a one-person business needs to get started. No overwhelm, no tech degree required, just the tools that work.",
    readTime: "8 min read",
    free: true,
  },
  {
    category: "getting-started",
    type: "Checklist",
    title: "AI Audit: Is Your Business Ready to Automate?",
    description:
      "A simple checklist to identify which parts of your business will benefit most from AI right now. Start in the right place.",
    readTime: "5 min read",
    free: true,
  },
  {
    category: "automation",
    type: "Guide",
    title: "Build Your First No-Code AI Workflow",
    description:
      "A beginner-friendly guide to connecting AI tools using platforms like Make or Zapier. Automate your inbox, social posting, and client onboarding.",
    readTime: "12 min read",
    free: true,
  },
  {
    category: "automation",
    type: "Template",
    title: "AI-Powered Client Onboarding System",
    description:
      "A ready-to-use workflow template that handles new client intake, welcome emails, project setup, and task creation automatically.",
    readTime: "10 min read",
    free: true,
  },
  {
    category: "content",
    type: "Guide",
    title: "The Content Operating System for Solopreneurs",
    description:
      "How to use AI to research, write, edit, and repurpose content across every platform from a single source of truth.",
    readTime: "15 min read",
    free: true,
  },
  {
    category: "content",
    type: "Prompt Pack",
    title: "50 AI Prompts for Solopreneur Marketing",
    description:
      "Copy-paste prompts for writing emails, social captions, landing pages, sales copy, and more. Built specifically for one-person businesses.",
    readTime: "Instant use",
    free: true,
  },
  {
    category: "revenue",
    type: "Guide",
    title: "From Freelancer to Digital Product Seller",
    description:
      "How to take your expertise and package it into a digital product using AI to speed up every step of the process.",
    readTime: "18 min read",
    free: true,
  },
  {
    category: "revenue",
    type: "Framework",
    title: "The Lean Revenue Stack",
    description:
      "A breakdown of how to build multiple income streams as a solo entrepreneur without spreading yourself too thin.",
    readTime: "10 min read",
    free: true,
  },
];

const toolPicks = [
  {
    name: "ChatGPT",
    use: "Writing, brainstorming, research, and customer communication drafts.",
    tier: "Free and paid",
  },
  {
    name: "Claude",
    use: "Long-form writing, document analysis, complex reasoning, and strategy work.",
    tier: "Free and paid",
  },
  {
    name: "Make (Integromat)",
    use: "Connecting apps and automating workflows without code.",
    tier: "Free tier available",
  },
  {
    name: "Notion AI",
    use: "Project management, content planning, and knowledge base with built-in AI.",
    tier: "Paid add-on",
  },
  {
    name: "Descript",
    use: "AI-powered video and podcast editing for content creators.",
    tier: "Free and paid",
  },
  {
    name: "Perplexity",
    use: "AI-powered research and real-time web search for staying informed.",
    tier: "Free and paid",
  },
];

const typeBadgeColors: Record<string, string> = {
  Guide: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20",
  Checklist: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Template: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Prompt Pack": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Framework: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06B6D4]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-6">
            Free Resources
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F4F0] leading-tight mb-6">
            Tools and guides for the{" "}
            <span className="text-[#06B6D4]">AI-powered solopreneur</span>
          </h1>
          <p className="text-lg text-[#8B8A99] leading-relaxed max-w-2xl mx-auto">
            Practical, no-fluff resources to help you automate more, create faster,
            and earn more as a one-person business. All free, all actionable.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-[#8B8A99] hover:text-[#06B6D4] bg-[#1A1927] hover:bg-[#06B6D4]/10 border border-[#2A2940] hover:border-[#06B6D4]/30 px-4 py-1.5 rounded-full transition-all duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Resources by category */}
      {categories.map(({ id, label }) => {
        const categoryResources = resources.filter((r) => r.category === id);
        return (
          <section key={id} id={id} className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-xl font-bold text-[#F5F4F0] mb-6 flex items-center gap-3">
              <span className="w-1 h-6 bg-[#06B6D4] rounded-full inline-block" />
              {label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {categoryResources.map(({ type, title, description, readTime }) => (
                <div
                  key={title}
                  className="group p-6 rounded-2xl bg-[#1A1927] border border-[#2A2940] hover:border-[#06B6D4]/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                        typeBadgeColors[type] ?? "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20"
                      }`}
                    >
                      {type}
                    </span>
                    <span className="text-xs text-[#8B8A99]">{readTime}</span>
                  </div>
                  <h3 className="font-semibold text-[#F5F4F0] mb-2 group-hover:text-[#06B6D4] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#8B8A99] leading-relaxed">{description}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-[#06B6D4] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read now
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Tool Picks */}
      <section className="bg-[#1A1927]/50 border-y border-[#2A2940]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mb-3">Alveqi tool picks</h2>
            <p className="text-[#8B8A99] max-w-lg mx-auto">
              The AI tools that actually belong in a solo entrepreneur's stack. Chosen for impact, simplicity, and value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {toolPicks.map(({ name, use, tier }) => (
              <div
                key={name}
                className="p-5 rounded-2xl bg-[#1A1927] border border-[#2A2940] hover:border-[#06B6D4]/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-[#F5F4F0]">{name}</h3>
                  <span className="text-xs text-[#8B8A99] bg-[#0F0E17] px-2 py-1 rounded-full border border-[#2A2940]">
                    {tier}
                  </span>
                </div>
                <p className="text-sm text-[#8B8A99] leading-relaxed">{use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mb-4">
          Want more than free resources?
        </h2>
        <p className="text-[#8B8A99] text-lg max-w-lg mx-auto mb-8">
          Our products take the guesswork out of building an AI-powered solo business.
          Done-for-you systems, templates, and training included.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
        >
          View Products
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  );
}
