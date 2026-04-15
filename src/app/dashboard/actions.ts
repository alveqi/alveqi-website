"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const password = formData.get("password") as string;

  if (password === process.env.DASHBOARD_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("dashboard_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/dashboard",
    });
    redirect("/dashboard");
  } else {
    redirect("/dashboard/login?error=1");
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("dashboard_auth");
  redirect("/dashboard/login");
}