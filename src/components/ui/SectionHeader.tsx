interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-3">
      <p className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
        {description}
      </p>
    </div>
  );
}
