import Link from "next/link";

const socialLinks = [
  {
    label: "YouTube",
    href: "https://youtube.com/@alveqi",
    icon: "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/alveqi",
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@alveqi",
    icon: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z",
  },
  {
    label: "X",
    href: "https://x.com/alveqi",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/alveqi",
    icon: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2940] bg-[#0F0E17]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#F5F4F0]">Alveqi</span>
              <span className="text-xs text-[#06B6D4] font-medium bg-[#06B6D4]/10 px-2 py-0.5 rounded-full border border-[#06B6D4]/20">
                AI
              </span>
            </div>
            <p className="text-sm text-[#8B8A99] leading-relaxed max-w-xs">
              Built for solo entrepreneurs who want to grow smarter, not harder, using the power of AI.
            </p>
            <p className="text-xs font-semibold text-[#06B6D4] tracking-wide uppercase">
              Work Less. Earn More. Use AI.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#1A1927] border border-[#2A2940] hover:border-[#06B6D4]/40 hover:bg-[#06B6D4]/10 flex items-center justify-center transition-all duration-200 group"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#8B8A99] group-hover:text-[#06B6D4] transition-colors duration-200">
                    <path d={icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#F5F4F0] uppercase tracking-wider">Navigate</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/resources", label: "Resources" },
                { href: "/products", label: "Products" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#8B8A99] hover:text-[#06B6D4] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#F5F4F0] uppercase tracking-wider">Get Started</h3>
            <p className="text-sm text-[#8B8A99] leading-relaxed">
              Ready to build a smarter, leaner business? Explore our tools and resources.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Get the Playbook
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2A2940] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8B8A99]">
            &copy; {new Date().getFullYear()} Alveqi. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-[#8B8A99] hover:text-[#06B6D4] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#8B8A99] hover:text-[#06B6D4] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs text-[#8B8A99]">
            Designed for solo entrepreneurs who use AI.
          </p>
        </div>
      </div>
    </footer>
  );
}