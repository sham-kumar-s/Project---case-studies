export default function SectionDivider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <div className="h-px flex-1 bg-linear-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
      <div className="h-px flex-1 bg-linear-to-r from-transparent via-neutral-800 to-transparent" />
    </div>
  );
}
