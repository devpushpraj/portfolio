export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border/70 bg-card/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
      {label}
    </span>
  );
}
