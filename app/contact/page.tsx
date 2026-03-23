import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <div className="wrapper section-gap">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have a project, contract role, or product idea to discuss?"
            description="Use the form for work inquiries, collaboration, or technical consulting. Messages are validated, rate limited, and stored securely in Supabase."
          />
          <div className="space-y-3 text-sm text-foreground/75">
            <p>Email: {siteConfig.email}</p>
            <p>Based in India, working remotely across time zones.</p>
            <p>Usually responding within 1-2 business days.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
