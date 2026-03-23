import { NextResponse } from "next/server";
import { z } from "zod";
import { projectSchema } from "@/lib/validations";
import { createServiceRoleClient, requireAuthenticatedUser } from "@/lib/supabase/server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuthenticatedUser();
    const { id } = await params;
    const body = await request.json();
    const values = projectSchema.parse(body);
    const supabase = createServiceRoleClient();

    const { data, error } = await supabase
      .from("projects")
      .update(values)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: "Unable to update project." }, { status: 500 });
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

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuthenticatedUser();
    const { id } = await params;
    const supabase = createServiceRoleClient();
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: "Unable to delete project." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
