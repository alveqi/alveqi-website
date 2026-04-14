import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using alveqi.com and purchasing Alveqi digital products.",
};

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#F5F4F0] mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-[#8B8A99] mb-12">Last updated: April 14, 2026</p>

      <div className="space-y-10 text-[#8B8A99] leading-relaxed">
        <p>
          Welcome to alveqi.com, operated by Alveqi (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By using this website, you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.
        </p>
        <p>We wrote this in plain language because nobody reads legal walls of text.</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">What We Do</h2>
          <p>
            Alveqi provides educational content about AI tools, productivity, and automation through YouTube videos, free resources, and digital products. Our website serves as a hub for this content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Digital Products</h2>
          <p>
            <strong className="text-[#F5F4F0]">What you&apos;re buying.</strong> Our digital products are downloadable resources like templates, guides, and toolkits. All sales are final unless otherwise stated at the time of purchase.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Delivery.</strong> Digital products are delivered instantly after purchase through the platform you bought from (Lemon Squeezy, Gumroad, or Etsy). If you have trouble accessing your purchase, email us at hello@alveqi.com.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Refunds.</strong> Because digital products can be downloaded and used immediately, we generally do not offer refunds. If you experience a technical issue that prevents you from using the product, contact us at hello@alveqi.com and we will work with you to resolve it.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">License.</strong> When you buy a digital product, you get a personal, non-transferable license to use it for your own business or personal purposes. You may not resell, redistribute, or share the files with others. You may not claim the content as your own.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Free Content and Resources</h2>
          <p>
            Our YouTube videos, blog posts, social media content, and free downloads are provided for educational purposes. We do our best to keep information accurate and up to date, but we make no guarantees about specific results.
          </p>
          <p>
            Results depend on many factors, including your effort, experience, and circumstances. We share what works for us and others, but we cannot promise the same outcomes for you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Affiliate Links</h2>
          <p>
            Some links on this website and in our content are affiliate links. This means we may earn a small commission if you purchase through them, at no extra cost to you. We only recommend tools we personally use and believe in. Affiliate relationships never influence our honest opinions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Your Responsibilities</h2>
          <p>By using this site, you agree to use the content and products for lawful purposes only, not copy, redistribute, or resell our digital products, not scrape, reproduce, or republish our website content without permission, and provide accurate information when making purchases or subscribing.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Intellectual Property</h2>
          <p>
            All content on alveqi.com, including text, graphics, logos, videos, and digital products, is owned by Alveqi unless otherwise noted. You may not reproduce, distribute, or create derivative works from our content without written permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Disclaimer</h2>
          <p>
            Our content is educational and informational. It is not professional financial, legal, or business advice. Always do your own research and consult qualified professionals for decisions that could significantly impact your finances or business.
          </p>
          <p>
            We are not responsible for the products, services, or policies of third-party tools and platforms we mention or link to. Use third-party services at your own discretion.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Alveqi is not liable for any indirect, incidental, or consequential damages arising from your use of this website, our content, or our digital products. Our total liability for any claim related to our products or services is limited to the amount you paid for the specific product in question.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Third-Party Platforms</h2>
          <p>
            When you purchase through Etsy, Gumroad, or Lemon Squeezy, those platforms have their own terms of service that also apply to your transaction. We encourage you to review their terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. If we make significant changes, we will update the &quot;Last updated&quot; date at the top. Continued use of the site after changes means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Governing Law</h2>
          <p>These terms are governed by the laws of the Province of Ontario, Canada.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Contact</h2>
          <p>
            Questions about these terms? Email us at{" "}
            <a href="mailto:hello@alveqi.com" className="text-[#06B6D4] hover:underline">
              hello@alveqi.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}