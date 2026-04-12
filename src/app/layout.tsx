import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alveqi | Work Less. Earn More. Use AI.",
    template: "%s | Alveqi",
  },
  description:
    "Alveqi helps solo entrepreneurs work less and earn more using AI tools, systems, and strategies built for the modern one-person business.",
  keywords: ["AI productivity", "solo entrepreneur", "work less earn more", "AI tools", "solopreneur"],
  openGraph: {
    title: "Alveqi | Work Less. Earn More. Use AI.",
    description:
      "Alveqi helps solo entrepreneurs work less and earn more using AI tools, systems, and strategies built for the modern one-person business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0F0E17] text-[#F5F4F0]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      <ScrollToTop />
    </body>
    </html>
  );
}
