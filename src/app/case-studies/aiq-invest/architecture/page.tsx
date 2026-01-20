import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Architecture() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="System Architecture"
          subtitle="Data-centric and service-oriented design"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          The platform follows a layered architecture separating data ingestion,
          analytics processing, and presentation. This ensures scalability and
          maintainability as data volume grows.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Frontend dashboard for visualization</li>
          <li>Backend services for analytics logic</li>
          <li>PostgreSQL for structured financial data</li>
          <li>Batch and near-real-time data pipelines</li>
        </ul>
      </section>
    </PageTransition>
  );
}
