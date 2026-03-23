import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { createServiceRoleClient, requireAuthenticatedUser } from "@/lib/supabase/server";

const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
const maxFileSize = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    await requireAuthenticatedUser();
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Only PNG, JPG, and WEBP images are allowed." }, { status: 400 });
    }

    if (file.size > maxFileSize) {
      return NextResponse.json({ error: "Image must be 5MB or smaller." }, { status: 400 });
    }

    const supabase = createServiceRoleClient();
    const path = `portfolio/${randomUUID()}-${file.name}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error } = await supabase.storage
      .from("portfolio")
      .upload(path, arrayBuffer, { contentType: file.type, upsert: false });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Upload failed." }, { status: 500 });
    }

    const { data } = supabase.storage.from("portfolio").getPublicUrl(path);
    return NextResponse.json({ url: data.publicUrl });
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(
      { error: "Configure Supabase storage to enable uploads." },
      { status: 500 }
    );
  }
}
