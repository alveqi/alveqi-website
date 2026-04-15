import type { Metadata } from "next";
import { login } from "../actions";

export const metadata: Metadata = {
  title: "Dashboard Login",
  robots: "noindex, nofollow",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0E17] px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#F5F4F0] mb-2">Alveqi Dashboard</h1>
          <p className="text-sm text-[#64748B]">Enter your password to continue</p>
        </div>

        <form action={login} className="space-y-4">
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoFocus
              required
              className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2A2940] rounded-lg text-[#F5F4F0] placeholder-[#64748B] focus:outline-none focus:border-[#06B6D4] transition-colors duration-200"
            />
          </div>

          {hasError && (
            <p className="text-sm text-red-400">Incorrect password. Try again.</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#06B6D4] hover:bg-[#0891B2] text-[#0F0E17] font-semibold rounded-lg transition-colors duration-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}