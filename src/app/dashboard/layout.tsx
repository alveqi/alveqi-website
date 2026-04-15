export const metadata = {
  robots: "noindex, nofollow",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        body > header {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}