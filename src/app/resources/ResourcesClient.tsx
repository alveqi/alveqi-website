"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "all", label: "All Resources" },
  { id: "getting-started", label: "Getting Started" },
  { id: "automation", label: "Automation and Workflows" },
  { id: "content", label: "Content and Marketing" },
  { id: "revenue", label: "Revenue and Sales" },
];

const resources = [
  {
    category: "getting-started",
    type: "Guide",
    title: "The Solo Entrepreneur AI Starter Pack",
    description: "The exact five AI tools a one-person business needs to get started. No overwhelm, no tech degree required, just the tools that work.",
    readTime: "8 min read",
    live: true,
  },
  {
    category: "getting-started",
    type: "Checklist",
    title: "AI Audit: Is Your Business Ready to Automate?",
    description: "A simple checklist to identify which parts of your business will benefit most from AI right now. Start in the right place.",
    readTime: "5 min read",
    live: false,
  },
  {
    category: "automation",
    type: "Guide",
    title: "Build Your First No-Code AI Workflow",
    description: "A beginner-friendly guide to connecting AI tools using platforms like Make or Zapier. Automate your inbox, social posting, and client onboarding.",
    readTime: "12 min read",
    live: false,
  },
  {
    category: "automation",
    type: "Template",
    title: "AI-Powered Client Onboarding System",
    description: "A ready-to-use workflow template that handles new client intake, welcome emails, project setup, and task creation automatically.",
    readTime: "10 min read",
    live: false,
  },
  {
    category: "content",
    type: "Guide",
    title: "The Content Operating System for Solopreneurs",
    description: "How to use AI to research, write, edit, and repurpose content across every platform from a single source of truth.",
    readTime: "15 min read",
    live: false,
  },
  {
    category: "content",
    type: "Prompt Pack",
    title: "50 AI Prompts for Solopreneur Marketing",
    description: "Copy-paste prompts for writing emails, social captions, landing pages, sales copy, and more. Built specifically for one-person businesses.",
    readTime: "Instant use",
    live: true,
  },
  {
    category: "revenue",
    type: "Guide",
    title: "From Freelancer to Digital Product Seller",
    description: "How to take your expertise and package it into a digital product using AI to speed up every step of the process.",
    readTime: "18 min read",
    live: false,
  },
  {
    category: "revenue",
    type: "Framework",
    title: "The Lean Revenue Stack",
    description: "A breakdown of how to build multiple income streams as a solo entrepreneur without spreading yourself too thin.",
    readTime: "10 min read",
    live: false,
  },
];

const toolPicks = [
  {
    name: "ElevenLabs",
    use: "AI voice generation for faceless videos, voiceovers, and audio content at scale.",
    tier: "Free and paid",
    affiliate: true,
    href: "https://try.elevenlabs.io/moewigvrfrs3",
  },
  {
    name: "Make.com",
    use: "Connect your apps and automate workflows without writing a single line of code.",
    tier: "Free tier available",
    affiliate: true,
    href: "https://www.make.com/en/register?pc=alveqi",
  },
  {
    name: "InVideo",
    use: "Create faceless AI videos for YouTube and social media in minutes.",
    tier: "Free and paid",
    affiliate: true,
    href: "https://invideo.sjv.io/c/7185174/883681/12258",
  },
  {
    name: "Canva",
    use: "Design everything from social graphics to lead magnets without a designer.",
    tier: "Free and paid",
    affiliate: false,
    href: "https://canva.com",
  },
  {
    name: "ConvertKit",
    use: "Build and grow your email list with automations built for creators and solopreneurs.",
    tier: "Free and paid",
    affiliate: false,
    href: "https://convertkit.com",
  },
  {
    name: "ChatGPT",
    use: "Writing, brainstorming, research, customer emails, and strategy work.",
    tier: "Free and paid",
    affiliate: false,
    href: "https://chat.openai.com",
  },
];

const typeBadgeColors: Record<string, string> = {
  Guide: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20",
  Checklist: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Template: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Prompt Pack": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Framework: "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

export default function ResourcesClient() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? resources
    : resources.filter((r) => r.category === active);

  return (
    <>
      {/* Filter tabs */}
      <section className="max-w-6xl mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${
                active === id
                  ? "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/40 font-semibold"
                  : "text-[#8B8A99] hover:text-[#06B6D4] bg-[#1A1927] hover:bg-[#06B6D4]/10 border-[#2A2940] hover:border-[#06B6D4]/30"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* Resource cards */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(({ type, title, description, readTime, live }) => (
            <div
              key={title}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                live
                  ? "bg-[#1A1927] border-[#2A2940] hover:border-[#06B6D4]/40 cursor-pointer"
                  : "bg-[#1A1927]/50 border-[#2A2940]/50"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  typeBadgeColors[type] ?? "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20"
                }`}>
                  {type}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#8B8A99]">{readTime}</span>
                  {!live && (
                    <span className="text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
              <h3 className={`font-semibold mb-2 transition-colors ${
                live ? "text-[#F5F4F0] group-hover:text-[#06B6D4]" : "text-[#F5F4F0]/50"
              }`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${live ? "text-[#8B8A99]" : "text-[#8B8A99]/40"}`}>
                {description}
              </p>
              {live && (
                <div className="mt-4 flex items-center gap-1 text-xs text-[#06B6D4] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read now
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tool picks */}
      <section className="bg-[#1A1927]/50 border-y border-[#2A2940]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-4">
              Alveqi recommended
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mb-3">
              Tools we build with
            </h2>
            <p className="text-[#8B8A99] max-w-lg mx-auto">
              The AI tools that actually belong in a solo entrepreneur's stack. Chosen for impact, simplicity, and value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {toolPicks.map(({ name, use, tier, affiliate, href }) => (
              <div
                key={name}
                className="group relative p-5 rounded-2xl bg-[#1A1927] border border-[#2A2940] hover:border-[#06B6D4]/40 transition-all duration-300 flex flex-col"
              >
                {affiliate && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20 px-2 py-0.5 rounded-full">
                      Affiliate
                    </span>
                  </div>
                )}
                <div className="mb-3">
                  <h3 className="font-bold text-[#F5F4F0] mb-0.5">{name}</h3>
                  <span className="text-xs text-[#8B8A99]">{tier}</span>
                </div>
                <p className="text-sm text-[#8B8A99] leading-relaxed flex-1 mb-4">{use}</p>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#06B6D4]/10 hover:bg-[#06B6D4] border border-[#06B6D4]/30 hover:border-[#06B6D4] text-[#06B6D4] hover:text-[#0F0E17] font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200"
                >
                  Try it free
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mb-4">
          Want the complete system?
        </h2>
        <p className="text-[#8B8A99] text-lg max-w-lg mx-auto mb-8">
          The AI Solo Stack Playbook gives you every tool, workflow, and framework in one place. No more piecing things together.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
        >
          Get the Playbook
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  );
}