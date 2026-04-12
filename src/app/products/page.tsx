import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI systems, templates, and training for solo entrepreneurs. Explore Alveqi products built to help you work less and earn more.",
};

const products = [
  {
    badge: "Most Popular",
    badgeColor: "bg-[#06B6D4] text-[#0F0E17]",
    name: "The Solopreneur AI OS",
    tagline: "Your complete AI operating system for a one-person business",
    price: "$97",
    priceNote: "one-time",
    description:
      "A done-for-you system that wires up your entire business using AI. Includes templates, automation blueprints, workflow guides, and a step-by-step setup process designed for solo entrepreneurs.",
    features: [
      "50+ plug-and-play AI prompt templates",
      "Automation workflow blueprints for Make and Zapier",
      "Content creation system with AI integration",
      "Client management and onboarding automation",
      "Weekly planning and review framework",
      "Private community access",
      "Lifetime updates included",
    ],
    cta: "Get the AI OS",
    highlight: true,
  },
  {
    badge: "Quick Win",
    badgeColor: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    name: "AI Content Engine",
    tagline: "Create a month of content in a single day",
    price: "$47",
    priceNote: "one-time",
    description:
      "A focused content system that uses AI to research, outline, write, and repurpose content across every platform you use. Stop staring at a blank page and start publishing consistently.",
    features: [
      "Content calendar template for 90 days",
      "AI prompt library for 8 content formats",
      "Repurposing workflow: one piece to ten",
      "Video script and short-form templates",
      "Email newsletter framework",
      "Notion workspace included",
    ],
    cta: "Get the Content Engine",
    highlight: false,
  },
  {
    badge: "New",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    name: "Lean Revenue Blueprint",
    tagline: "Build your first AI-assisted digital product",
    price: "$67",
    priceNote: "one-time",
    description:
      "A step-by-step guide to identifying, creating, and launching a digital product using AI to handle research, writing, design briefs, and sales copy. Go from idea to income in weeks, not months.",
    features: [
      "Digital product validation framework",
      "AI-assisted product creation roadmap",
      "Sales page copywriting with AI prompts",
      "Launch email sequence templates",
      "Pricing strategy guide for solopreneurs",
      "Post-launch automation setup",
    ],
    cta: "Get the Blueprint",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Do I need to be technical to use these products?",
    a: "Not at all. Every product is designed for non-technical solo entrepreneurs. If you can copy and paste and follow a checklist, you can implement everything included.",
  },
  {
    q: "Are these one-time purchases or subscriptions?",
    a: "All current products are one-time purchases with no ongoing fees. You buy it once and own it forever, including all future updates.",
  },
  {
    q: "What AI tools do I need to use these products?",
    a: "Most workflows are built around free or low-cost AI tools like ChatGPT, Claude, and Make. Specific requirements are listed inside each product before you purchase.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. If you purchase a product and feel it did not deliver value, reach out within 14 days and we will make it right. No hoops, no hassle.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06B6D4]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-6">
            Alveqi Products
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F4F0] leading-tight mb-6">
            Systems built for{" "}
            <span className="text-[#06B6D4]">solo entrepreneur results</span>
          </h1>
          <p className="text-lg text-[#8B8A99] leading-relaxed max-w-2xl mx-auto">
            Stop piecing things together from blog posts and YouTube videos. Get a complete, proven system
            that is already built for how a one-person business actually operates.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-6 py-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {products.map(({ badge, badgeColor, name, tagline, price, priceNote, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl border p-7 flex flex-col ${
                highlight
                  ? "bg-gradient-to-b from-[#06B6D4]/10 to-[#1A1927] border-[#06B6D4]/40 shadow-xl shadow-[#06B6D4]/5"
                  : "bg-[#1A1927] border-[#2A2940]"
              }`}
            >
              {highlight && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent rounded-t-2xl" />
              )}

              <div className="mb-5">
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${badgeColor}`}>
                  {badge}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#F5F4F0] mb-1">{name}</h2>
              <p className="text-sm text-[#8B8A99] mb-5">{tagline}</p>

              <div className="flex items-baseline gap-1.5 mb-5">
                <span className="text-4xl font-bold text-[#F5F4F0]">{price}</span>
                <span className="text-sm text-[#8B8A99]">{priceNote}</span>
              </div>

              <p className="text-sm text-[#8B8A99] leading-relaxed mb-6">{description}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="mt-0.5 flex-shrink-0 text-[#06B6D4]"
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[#8B8A99]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] ${
                  highlight
                    ? "bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17]"
                    : "bg-[#232234] hover:bg-[#2A2940] text-[#F5F4F0] border border-[#2A2940] hover:border-[#06B6D4]/30"
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#8B8A99] mt-8">
          All products include a 14-day satisfaction guarantee. Questions?{" "}
          <Link href="/about" className="text-[#06B6D4] hover:underline">
            Learn more about Alveqi.
          </Link>
        </p>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-[#1A1927]/50 border-y border-[#2A2940]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "The AI OS completely changed how I run my freelance business. I got back at least 15 hours a week and my income went up because I could take on better clients.",
                name: "Freelance Designer",
              },
              {
                quote:
                  "I was skeptical, but the Content Engine helped me go from posting once a week to every single day without burning out. My audience has grown by 3x.",
                name: "Online Course Creator",
              },
              {
                quote:
                  "The Lean Revenue Blueprint walked me through launching my first digital product step by step. It made $1,200 in the first week.",
                name: "Business Coach",
              },
            ].map(({ quote, name }) => (
              <div
                key={name}
                className="p-6 rounded-2xl bg-[#1A1927] border border-[#2A2940]"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" fill="#06B6D4" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#8B8A99] leading-relaxed mb-4">{quote}</p>
                <p className="text-xs font-semibold text-[#F5F4F0]">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0] mb-10 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="p-6 rounded-2xl bg-[#1A1927] border border-[#2A2940]">
              <h3 className="font-semibold text-[#F5F4F0] mb-2">{q}</h3>
              <p className="text-sm text-[#8B8A99] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#06B6D4]/15 via-[#1A1927] to-[#1A1927] border border-[#06B6D4]/20 p-10 sm:p-14 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F4F0] mb-4">
              Your business deserves better systems
            </h2>
            <p className="text-[#8B8A99] text-lg max-w-lg mx-auto mb-8">
              Stop piecing together free content and hoping something sticks.
              Get a complete, AI-powered system built for solo entrepreneurs.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-[#8B8A99] hover:text-[#06B6D4] font-medium text-sm transition-colors duration-200"
            >
              Not ready yet? Start with our free resources
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
