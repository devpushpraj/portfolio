import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/env";

export async function POST(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const limit = rateLimit(`contact:${ip}`, 5, 60_000);

  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many requests. Please wait and try again." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const values = contactSchema.parse(body);

    if (values.company) {
      return NextResponse.json({ success: true });
    }

    if (hasSupabaseEnv()) {
      const supabase = createServiceRoleClient();
      const { error } = await supabase.from("contacts").insert({
        name: values.name,
        email: values.email,
        message: values.message
      });

      if (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to store message." }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message }, { status: 400 });
    }

    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
