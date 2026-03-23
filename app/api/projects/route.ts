import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { projectSchema } from "@/lib/validations";
import { createServiceRoleClient, requireAuthenticatedUser } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    await requireAuthenticatedUser();
    const body = await request.json();
    const values = projectSchema.parse(body);
    const supabase = createServiceRoleClient();

    const payload = {
      id: randomUUID(),
      ...values,
      created_at: new Date().toISOString()
    };

    const { data, error } = await supabase.from("projects").insert(payload).select().single();

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Unable to save project." }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message }, { status: 400 });
    }

    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
