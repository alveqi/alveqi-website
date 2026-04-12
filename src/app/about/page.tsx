import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alveqi was built for solo entrepreneurs who are done trading time for money. Learn about our mission to help you work less and earn more with AI.",
};

const values = [
  {
    title: "Simplicity over complexity",
    description:
      "The best systems are the ones you actually use. We cut the bloat and focus on what genuinely moves the needle.",
  },
  {
    title: "Time is the ultimate asset",
    description:
      "Money can be rebuilt. Time cannot. Everything we create is designed to give you more of it.",
  },
  {
    title: "Practical over theoretical",
    description:
      "No textbook strategies. Everything you find at Alveqi has been applied in real solo businesses with real results.",
  },
  {
    title: "Leverage beats effort",
    description:
      "Working harder is not the answer. Building smarter systems with AI leverage is how one person wins against a team.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#06B6D4]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1.5 rounded-full mb-6">
            About Alveqi
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F5F4F0] leading-tight mb-6">
            Built for the era of the{" "}
            <span className="text-[#06B6D4]">one-person business</span>
          </h1>
          <p className="text-lg text-[#8B8A99] leading-relaxed max-w-2xl mx-auto">
            Alveqi exists because one person with the right AI tools can now do what used to require an entire team.
            We are here to show you how.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F4F0]">The story behind Alveqi</h2>
            <p className="text-[#8B8A99] leading-relaxed">
              Alveqi was born out of frustration. The frustration of watching talented solo entrepreneurs burn out
              trying to do everything themselves, competing against businesses with ten times the staff and budget.
            </p>
            <p className="text-[#8B8A99] leading-relaxed">
              The game changed when AI tools became accessible to everyone. Suddenly, a single focused individual
              could automate their marketing, handle customer service, create content at scale, and run their
              operations without a single hire.
            </p>
            <p className="text-[#8B8A99] leading-relaxed">
              Alveqi is the playbook for that person. We gather the best AI tools, strategies, and systems so you
              do not have to spend hundreds of hours figuring it out yourself.
            </p>
          </div>

          <div className="rounded-2xl bg-[#1A1927] border border-[#2A2940] p-8 space-y-6">
            <div className="text-4xl font-bold text-[#06B6D4]">Our mission</div>
            <p className="text-[#F5F4F0] text-lg font-medium leading-relaxed">
              To give every solo entrepreneur access to the AI knowledge, tools, and systems that
              make it possible to build a serious business without sacrificing their life.
            </p>
            <div className="pt-4 border-t border-[#2A2940]">
              <p className="text-xs font-semibold text-[#06B6D4] tracking-widest uppercase">
                Work Less. Earn More. Use AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#1A1927]/50 border-y border-[#2A2940]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#F5F4F0] mb-3">What we believe</h2>
            <p className="text-[#8B8A99] max-w-lg mx-auto">
              Our values are not just words on a page. They shape every product, resource, and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map(({ title, description }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-[#1A1927] border border-[#2A2940] hover:border-[#06B6D4]/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#06B6D4]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F5F4F0] mb-1">{title}</h3>
                    <p className="text-sm text-[#8B8A99] leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#F5F4F0] mb-8 text-center">Who Alveqi is for</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              label: "Freelancers",
              description: "Designers, developers, writers, and consultants who want to earn more from fewer clients.",
            },
            {
              label: "Content Creators",
              description: "Creators building a brand and income online who want AI to multiply their output.",
            },
            {
              label: "Online Business Owners",
              description: "Course creators, coaches, and digital product sellers who want to scale without a team.",
            },
          ].map(({ label, description }) => (
            <div
              key={label}
              className="p-6 rounded-2xl bg-[#1A1927] border border-[#2A2940] text-center"
            >
              <div className="text-[#06B6D4] font-bold text-lg mb-2">{label}</div>
              <p className="text-sm text-[#8B8A99] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#06B6D4]/15 via-[#1A1927] to-[#1A1927] border border-[#06B6D4]/20 p-8 sm:p-10 text-center">
          <p className="text-[#F5F4F0] text-lg font-medium mb-6">
            If you are building a business on your own and you want AI to work for you instead of overwhelming you,
            you are in the right place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200"
            >
              View Products
            </Link>
            <Link
              href="/resources"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#2A2940] hover:border-[#06B6D4]/30 text-[#8B8A99] hover:text-[#F5F4F0] font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200"
            >
              Browse Free Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
