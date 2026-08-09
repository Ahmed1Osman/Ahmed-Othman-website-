export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-ink tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
        {title}
      </h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </div>
  );
}
