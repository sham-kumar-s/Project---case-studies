export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && (
        <p className="mt-1 text-sm text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
