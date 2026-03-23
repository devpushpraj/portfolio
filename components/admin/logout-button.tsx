"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/browser";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export function LogoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        if (!hasSupabaseEnv()) {
          router.push("/");
          return;
        }

        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/login");
        router.refresh();
      }}
      className="rounded-full border border-border/70 px-4 py-2 text-sm"
    >
      Logout
    </button>
  );
}
