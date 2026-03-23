import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = {
  title: "Admin Login"
};

export default function LoginPage() {
  return (
    <div className="wrapper section-gap">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">Admin Access</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">Sign in to manage content</h1>
      </div>
      <LoginForm />
    </div>
  );
}
