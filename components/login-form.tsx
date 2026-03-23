"use client";

import { type ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { loginSchema } from "@/lib/validations";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { createClient } from "@/lib/supabase/browser";

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const isConfigured = hasSupabaseEnv();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setError("");

    if (!isConfigured) {
      setError("Configure Supabase environment variables to enable admin auth.");
      return;
    }

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (signInError) {
      setError(signInError.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit} className="surface mx-auto max-w-md space-y-5 p-8">
      <Field
        label="Email"
        error={errors.email?.message}
        input={
          <input
            {...register("email")}
            type="email"
            className="h-12 w-full rounded-2xl border bg-background px-4 outline-none"
            placeholder="admin@example.com"
          />
        }
      />
      <Field
        label="Password"
        error={errors.password?.message}
        input={
          <input
            {...register("password")}
            type="password"
            className="h-12 w-full rounded-2xl border bg-background px-4 outline-none"
            placeholder="••••••••"
          />
        }
      />
      {error ? <p className="text-sm text-rose-600">{error}</p> : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white"
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

function Field({
  label,
  input,
  error
}: {
  label: string;
  input: ReactNode;
  error?: string;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      {input}
      {error ? <span className="text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}
