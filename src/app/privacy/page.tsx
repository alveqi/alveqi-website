import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Alveqi collects, uses, and protects your information. Written in plain language.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#F5F4F0] mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-[#8B8A99] mb-12">Last updated: April 14, 2026</p>

      <div className="space-y-10 text-[#8B8A99] leading-relaxed">
        <p>
          Alveqi (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates the website alveqi.com. This policy explains what information we collect, how we use it, and your rights.
        </p>
        <p>We keep this simple and honest. No walls of legal jargon.</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">What We Collect</h2>
          <p>
            <strong className="text-[#F5F4F0]">Email address.</strong> If you subscribe to our newsletter or download a free resource, we collect your email address through Beehiiv, our email platform.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Website analytics.</strong> We use Vercel Analytics to understand how visitors use our site. This includes general information like page views, traffic sources, geographic region, and referring websites. Vercel Analytics is privacy-focused and does not use cookies for tracking.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Payment information.</strong> We do not collect or store your payment details directly. When you purchase a digital product, the transaction is handled entirely by our third-party payment processors: Lemon Squeezy, Etsy, or Gumroad. These platforms collect your payment and billing information under their own privacy policies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">How We Use Your Information</h2>
          <p>
            <strong className="text-[#F5F4F0]">Email address:</strong> To send you newsletters, product updates, and free resources you requested. We will never sell or share your email with third parties.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Analytics data:</strong> To understand which content is helpful and improve the website experience.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Purchase data:</strong> To deliver your digital products and provide customer support.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Third-Party Services</h2>
          <p>We use the following services that may collect data according to their own privacy policies:</p>
          <ul className="space-y-2 list-none">
            <li><strong className="text-[#F5F4F0]">Beehiiv</strong> (email platform)</li>
            <li><strong className="text-[#F5F4F0]">Vercel</strong> (website hosting and analytics)</li>
            <li><strong className="text-[#F5F4F0]">Lemon Squeezy</strong> (payment processing)</li>
            <li><strong className="text-[#F5F4F0]">Gumroad</strong> (payment processing)</li>
            <li><strong className="text-[#F5F4F0]">Etsy</strong> (marketplace)</li>
            <li><strong className="text-[#F5F4F0]">YouTube</strong> (embedded videos)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Cookies</h2>
          <p>
            We do not use cookies for advertising or tracking. Vercel Analytics is cookie-free. Third-party embeds (like YouTube videos) may set their own cookies when you interact with them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Your Rights</h2>
          <p>
            <strong className="text-[#F5F4F0]">Unsubscribe</strong> from our email list at any time using the unsubscribe link in any email.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Request deletion</strong> of your data by emailing us at hello@alveqi.com.
          </p>
          <p>
            <strong className="text-[#F5F4F0]">Ask questions</strong> about what data we have by emailing hello@alveqi.com.
          </p>
          <p>
            If you are located in Canada, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA), including the right to access and correct your personal information.
          </p>
          <p>
            If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, delete, and port your data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Data Retention</h2>
          <p>
            We keep your email address for as long as you remain subscribed. If you unsubscribe, your email is removed from our active list. Analytics data is aggregated and does not identify you personally.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Children&apos;s Privacy</h2>
          <p>
            We do not knowingly collect information from anyone under the age of 16. If you believe we have collected information from a minor, please contact us at hello@alveqi.com and we will delete it promptly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Changes to This Policy</h2>
          <p>
            If we make meaningful changes to this policy, we will update the &quot;Last updated&quot; date at the top and, if appropriate, notify subscribers by email.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#F5F4F0]">Contact</h2>
          <p>
            If you have questions about this privacy policy, email us at{" "}
            <a href="mailto:hello@alveqi.com" className="text-[#06B6D4] hover:underline">
              hello@alveqi.com
            </a>.
          </p>
          <p>Alveqi is operated from Ontario, Canada.</p>
        </section>
      </div>
    </div>
  );
}