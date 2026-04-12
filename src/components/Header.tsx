"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/products", label: "Products" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F0E17]/90 backdrop-blur-md border-b border-[#2A2940]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-[#F5F4F0] group-hover:text-[#06B6D4] transition-colors duration-200">
            Alveqi
          </span>
          <span className="hidden sm:inline-block text-xs text-[#06B6D4] font-medium bg-[#06B6D4]/10 px-2 py-0.5 rounded-full border border-[#06B6D4]/20">
            AI
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#06B6D4] bg-[#06B6D4]/10"
                    : "text-[#8B8A99] hover:text-[#F5F4F0] hover:bg-[#1A1927]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/products"
          className="hidden md:inline-flex items-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-semibold text-sm px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Get Started
        </Link>

        <button
          className="md:hidden p-2 text-[#8B8A99] hover:text-[#F5F4F0] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[#2A2940] bg-[#0F0E17] px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#06B6D4] bg-[#06B6D4]/10"
                    : "text-[#8B8A99] hover:text-[#F5F4F0] hover:bg-[#1A1927]"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-semibold text-sm px-4 py-2.5 rounded-lg text-center transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
