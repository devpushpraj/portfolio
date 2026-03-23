import { z } from "zod";
import { slugify } from "@/lib/utils";

const urlSchema = z.string().url("Enter a valid URL").or(z.literal(""));

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  company: z.string().max(0).optional().default("")
});

export const projectSchema = z.object({
  title: z.string().min(2).max(120),
  description: z.string().min(10).max(500),
  tech_stack: z.array(z.string().min(1)).min(1),
  image_url: z.string().url(),
  github_url: urlSchema,
  live_url: urlSchema
});

export const blogSchema = z.object({
  title: z.string().min(4).max(160),
  slug: z
    .string()
    .min(4)
    .max(180)
    .transform((value) => slugify(value)),
  content: z.string().min(40),
  tags: z.array(z.string().min(1)).min(1)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});
