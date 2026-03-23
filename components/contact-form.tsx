"use client";

import { type ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validations";
import type { z } from "zod";

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [serverState, setServerState] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      company: ""
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerState({ type: null, message: "" });

    const request = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const result = await request.json();

    if (!request.ok) {
      setServerState({
        type: "error",
        message: result.error || "Something went wrong. Try again."
      });
      return;
    }

    setServerState({
      type: "success",
      message: "Message received. I’ll get back to you soon."
    });
    reset();
  });

  return (
    <form onSubmit={onSubmit} className="surface space-y-5 p-6 sm:p-8">
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("company")} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          error={errors.name?.message}
          input={
            <input
              {...register("name")}
              className="h-12 w-full rounded-2xl border bg-background px-4 outline-none transition focus:border-primary"
              placeholder="Your name"
            />
          }
        />
        <Field
          label="Email"
          error={errors.email?.message}
          input={
            <input
              {...register("email")}
              className="h-12 w-full rounded-2xl border bg-background px-4 outline-none transition focus:border-primary"
              placeholder="you@example.com"
              type="email"
            />
          }
        />
      </div>
      <Field
        label="Message"
        error={errors.message?.message}
        input={
          <textarea
            {...register("message")}
            className="min-h-40 w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
            placeholder="Tell me about your project."
          />
        }
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {serverState.type ? (
        <p
          className={
            serverState.type === "success"
              ? "text-sm text-emerald-600"
              : "text-sm text-rose-600"
          }
        >
          {serverState.message}
        </p>
      ) : null}
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
