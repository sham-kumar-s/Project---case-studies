import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Scaling() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Scaling Strategy"
          subtitle="Growing with data volume"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Database indexing and query optimization</li>
          <li>Read replicas for analytics queries</li>
          <li>Caching computed metrics</li>
        </ul>
      </section>
    </PageTransition>
  );
}
