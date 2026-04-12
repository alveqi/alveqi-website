import Link from "next/link";
import type { Metadata } from "next";
import ParticleCanvas from "../components/ParticleCanvas";

export const metadata: Metadata = {
  title: "Alveqi | Work Less. Earn More. Use AI.",
  description:
    "Alveqi equips solo entrepreneurs with AI systems and tools to build a lean, profitable business without burning out.",
};

const features = [
  {
    title: "AI-Powered Automation",
    description:
      "Replace repetitive tasks with smart workflows so you can focus on what actually moves the needle in your business.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Systems That Scale",
    description:
      "Build once, benefit forever. Our frameworks help you create systems that grow your revenue without adding to your workload.",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
  {
    title: "Revenue Without Hustle",
    description:
      "Stop trading hours for dollars. Learn how to create income streams that work while you rest, travel, or build something new.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Time as a Priority",
    description:
      "Your time is your most valuable asset. Every tool, resource, and strategy we share is built to give you more of it.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Built for Solo Entrepreneurs",
    description:
      "No fluff for large teams or enterprises. Everything here is designed for one-person businesses that want big results.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    title: "Proven Frameworks",
    description:
      "Cut through the noise with strategies tested by real solopreneurs running real businesses with real results.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
];

const stats = [
  { value: "10x", label: "Faster content production" },
  { value: "80%", label: "Less time on admin tasks" },
  { value: "3x", label: "Revenue growth potential" },
  { value: "1", label: "Person needed to run it all" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[620px] flex flex-col">
        <canvas
          id="alveqi-particles"
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 w-full flex flex-col md:flex-row items-center gap-12">

          {/* Left: copy */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full animate-pulse" />
              AI and Productivity for Solo Entrepreneurs
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F5F4F0] leading-[1.1] tracking-tight mb-6">
              Work Less.{" "}
              <span className="text-[#06B6D4]">Earn More.</span>
              <br />
              Use AI.
            </h1>

            <p className="text-lg text-[#8B8A99] max-w-lg leading-relaxed mb-10 mx-auto md:mx-0">
              Alveqi is your home base for AI tools, systems, and strategies built to help solo entrepreneurs run leaner, more profitable businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
              >
                Explore Products
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#1A1927] text-[#F5F4F0] font-semibold text-base px-8 py-3.5 rounded-xl border border-[#2A2940] hover:border-[#06B6D4]/30 transition-all duration-200"
              >
                Free Resources
              </Link>
            </div>
          </div>

          {/* Right: workflow card */}
          <div className="flex-shrink-0 w-full md:w-[380px]">
            <div className="rounded-2xl border border-[#06B6D4]/20 bg-[#1A1927]/80 backdrop-blur-sm p-5">
              <p className="text-[10px] font-semibold tracking-widest text-[#8B8A99] uppercase mb-4">
                Your AI solo workflow
              </p>

              {/* Row 1 */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 text-center text-xs text-[#8B8A99] bg-[#0F0E17]/60 border border-[#2A2940] rounded-lg py-2 px-3">
                  Content idea
                </div>
                <svg width="14" height="14" fill="none" stroke="#06B6D4" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0 opacity-60">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="flex-1 text-center text-xs text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-lg py-2 px-3">
                  AI draft
                </div>
                <svg width="14" height="14" fill="none" stroke="#06B6D4" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0 opacity-60">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="flex-1 text-center text-xs text-[#F5F4F0] bg-[#0F0E17]/60 border border-[#2A2940] rounded-lg py-2 px-3">
                  Published
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 text-center text-xs text-[#8B8A99] bg-[#0F0E17]/60 border border-[#2A2940] rounded-lg py-2 px-3">
                  Client email
                </div>
                <svg width="14" height="14" fill="none" stroke="#06B6D4" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0 opacity-60">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="flex-1 text-center text-xs text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/30 rounded-lg py-2 px-3">
                  Auto-reply
                </div>
                <svg width="14" height="14" fill="none" stroke="#06B6D4" strokeWidth="2" viewBox="0 0 24 24" className="flex-shrink-0 opacity-60">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="flex-1 text-center text-xs text-[#F5F4F0] bg-[#0F0E17]/60 border border-[#2A2940] rounded-lg py-2 px-3">
                  Closed
                </div>
              </div>

              {/* Processing indicator */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" style={{ animationDelay: "0.3s" }} />
                <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" style={{ animationDelay: "0.6s" }} />
                <span className="text-[11px] text-[#8B8A99]/50 ml-1">Processing in real time</span>
              </div>

              <div className="border-t border-[#2A2940] pt-4 mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "10x faster content",
                    "80% less admin",
                    "Revenue on autopilot",
                    "1 person. Full stack.",
                  ].map((label) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-[#06B6D4]/06 border border-[#06B6D4]/20 rounded-lg px-3 py-2"
                    >
                      <svg width="10" height="10" fill="none" stroke="#06B6D4" strokeWidth="2.5" viewBox="0 0 12 12" className="flex-shrink-0">
                        <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[11px] text-[#06B6D4]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { num: "10x", label: "Faster output" },
                  { num: "80%", label: "Less admin" },
                  { num: "1", label: "Person needed" },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-[#0F0E17]/60 border border-[#2A2940] rounded-lg py-3 text-center">
                    <div className="text-lg font-bold text-[#06B6D4]">{num}</div>
                    <div className="text-[10px] text-[#8B8A99] mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Particle animation */}
       <ParticleCanvas />
      </section>

{/* Social proof bar */}
      <section className="border-y border-[#2A2940] bg-[#1A1927]/30 py-4">
        <p className="text-center text-[11px] font-semibold tracking-widest text-[#8B8A99] uppercase mb-4">
          Inside the Alveqi stack
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[
              { name: "ElevenLabs", desc: "AI Voice" },
              { name: "Make.com", desc: "Automation" },
              { name: "InVideo", desc: "AI Video" },
              { name: "Canva", desc: "Design" },
              { name: "ConvertKit", desc: "Email" },
              { name: "ChatGPT", desc: "AI Writing" },
              { name: "Notion", desc: "Workspace" },
              { name: "ElevenLabs", desc: "AI Voice" },
              { name: "Make.com", desc: "Automation" },
              { name: "InVideo", desc: "AI Video" },
              { name: "Canva", desc: "Design" },
              { name: "ConvertKit", desc: "Email" },
              { name: "ChatGPT", desc: "AI Writing" },
              { name: "Notion", desc: "Workspace" },
            ].map((tool, i) => (
              <div key={i} className="inline-flex items-center gap-3 flex-shrink-0">
                <div className="w-7 h-7 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#06B6D4]/60" />
                </div>
                <div>
                  <span className="text-sm font-medium text-[#F5F4F0]/70">{tool.name}</span>
                  <span className="text-xs text-[#8B8A99] ml-2">{tool.desc}</span>
                </div>
                <div className="w-px h-4 bg-[#2A2940] ml-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#2A2940] bg-[#1A1927]/50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10x", label: "Faster content production", context: "Using AI writing workflows" },
              { value: "80%", label: "Less time on admin tasks", context: "Automation handles the rest" },
              { value: "3x", label: "Revenue growth potential", context: "With AI-powered systems" },
              { value: "1", label: "Person needed to run it all", context: "That person is you" },
            ].map(({ value, label, context }) => (
              <div key={label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#06B6D4] mb-1">{value}</div>
                <div className="text-sm font-medium text-[#F5F4F0]/80 mb-1">{label}</div>
                <div className="text-xs text-[#8B8A99]">{context}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-4">
            What you get
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F4F0] mb-4">
            Everything you need to run a lean AI business
          </h2>
          <p className="text-[#8B8A99] text-lg max-w-xl mx-auto">
            Built from the ground up for solo operators who want to compete at a higher level without hiring a team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group relative p-6 rounded-2xl bg-[#1A1927] border border-[#2A2940] hover:border-[#06B6D4]/40 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.05) 0%, transparent 70%)" }}
              />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] flex items-center justify-center mb-5 group-hover:bg-[#06B6D4]/20 group-hover:border-[#06B6D4]/40 transition-all duration-300">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d={icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#F5F4F0] mb-2 text-base">{title}</h3>
                <p className="text-sm text-[#8B8A99] leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1A1927]/50 border-y border-[#2A2940]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-4">
              How it works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F4F0] mb-4">
              The Alveqi approach
            </h2>
            <p className="text-[#8B8A99] text-lg max-w-xl mx-auto">
              A simple three-step framework for building a smarter solo business.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-10 left-[calc(16.666%+16px)] right-[calc(16.666%+16px)] h-px">
              <div className="w-full h-full bg-gradient-to-r from-[#06B6D4]/40 via-[#06B6D4]/20 to-[#06B6D4]/40" />
            </div>

            {[
              {
                step: "01",
                title: "Learn",
                description: "Discover AI tools and strategies purpose-built for solo entrepreneurs. No jargon, no fluff, just practical knowledge you can apply today.",
              },
              {
                step: "02",
                title: "Implement",
                description: "Put the systems into place using our done-for-you frameworks, templates, and step-by-step guides tailored for one-person operations.",
              },
              {
                step: "03",
                title: "Scale",
                description: "Watch your business grow while your workload shrinks. Reinvest your time into what you love and what creates the most value.",
              },
            ].map(({ step, title, description }) => (
              <div key={step} className="relative text-center px-4">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="absolute inset-0 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20" />
                  <div className="absolute inset-2 rounded-full bg-[#06B6D4]/5" />
                  <span className="relative text-2xl font-bold text-[#06B6D4]">{step}</span>
                </div>
                <h3 className="text-xl font-bold text-[#F5F4F0] mb-3">{title}</h3>
                <p className="text-[#8B8A99] leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Email capture */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#1A1927] border border-[#2A2940] p-10 sm:p-14">
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{ background: "radial-gradient(circle at 100% 0%, rgba(6,182,212,0.08) 0%, transparent 60%)" }}
          />
          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-5">
              Free resource
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F4F0] mb-4">
              Get the AI Solo Starter Kit
            </h2>
            <p className="text-[#8B8A99] text-lg leading-relaxed mb-3">
              The exact AI tools and setup a one-person business needs to automate faster, create more, and earn without burning out. Free, no fluff, ready to use today.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "7 must-have AI tools with specific use cases",
                "Quick-start prompts for each tool",
                "A simple stack that costs under $50/month",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#8B8A99]">
                  <svg width="16" height="16" fill="none" stroke="#06B6D4" strokeWidth="2.5" viewBox="0 0 24 24" className="flex-shrink-0">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#0F0E17] border border-[#2A2940] text-[#F5F4F0] placeholder-[#8B8A99] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#06B6D4]/50 transition-colors"
              />
              <button className="bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-bold text-sm px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
                Send it to me
              </button>
            </div>
            <p className="text-xs text-[#8B8A99]/60 mt-3">No spam. Unsubscribe any time.</p>
          </div>
        </div>
      </section>

      {/* Product spotlight */}
      <section className="bg-[#1A1927]/50 border-y border-[#2A2940]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: product visual */}
            <div className="relative">
              <div className="rounded-2xl border border-[#06B6D4]/20 bg-[#0F0E17] p-6 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 30% 30%, rgba(6,182,212,0.06) 0%, transparent 60%)" }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center">
                      <svg width="20" height="20" fill="none" stroke="#06B6D4" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-[#8B8A99] uppercase tracking-widest">Alveqi Product</div>
                      <div className="text-sm font-semibold text-[#F5F4F0]">AI Solo Stack Playbook</div>
                    </div>
                    <div className="ml-auto bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-semibold px-3 py-1 rounded-full">
                      $47
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "The exact AI stack for solo entrepreneurs",
                      "Step-by-step setup for each tool",
                      "Automation workflows you can copy today",
                      "Content system to publish without burnout",
                      "Revenue frameworks built for one person",
                      "Notion workspace template included",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 bg-[#1A1927] border border-[#2A2940] rounded-xl px-4 py-3">
                        <svg width="14" height="14" fill="none" stroke="#06B6D4" strokeWidth="2.5" viewBox="0 0 24 24" className="flex-shrink-0">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm text-[#F5F4F0]/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-[#06B6D4]/5 blur-xl pointer-events-none" />
            </div>

            {/* Right: copy */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-5">
                Featured product
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F4F0] mb-4 leading-tight">
                The AI Solo Stack Playbook
              </h2>
              <p className="text-[#8B8A99] text-lg leading-relaxed mb-6">
                Stop piecing things together from YouTube videos and blog posts. This is the complete, done-for-you system for running a one-person business with AI. Every tool, every workflow, every framework in one place.
              </p>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-5xl font-bold text-[#F5F4F0]">$47</span>
                <span className="text-[#8B8A99] text-sm">one-time payment</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  Get the Playbook
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <p className="text-xs text-[#8B8A99]/60 mt-4">14-day satisfaction guarantee. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
