import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function FailuresPage() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Failures & Learnings"
          subtitle="What went wrong and what was learned"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          During development, several issues were encountered, including race
          conditions in booking creation and inefficient database queries.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Overbooking due to missing atomic operations</li>
          <li>Slow queries caused by missing indexes</li>
          <li>Improper WebSocket cleanup leading to memory leaks</li>
        </ul>

        <p className="text-neutral-300 leading-relaxed mt-6">
          These failures guided improvements in transaction handling,
          indexing strategies, and connection lifecycle management.
        </p>
      </section>
    </PageTransition>
  );
}
