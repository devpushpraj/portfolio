import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { LogoutButton } from "@/components/admin/logout-button";
import { getBlogs, getProjects } from "@/lib/data";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Admin Dashboard"
};

export default async function AdminPage() {
  if (hasSupabaseEnv()) {
    const supabase = await createServerSupabaseClient();
    const authResult = supabase ? await supabase.auth.getUser() : null;
    const user = authResult?.data.user ?? null;

    if (!user) {
      redirect("/login");
    }
  }

  const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);

  return (
    <div className="wrapper section-gap space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Dashboard</p>
          <h1 className="mt-2 font-display text-4xl font-semibold">Admin Content Manager</h1>
        </div>
        <LogoutButton />
      </div>
      <AdminDashboard initialProjects={projects} initialBlogs={blogs} />
    </div>
  );
}
