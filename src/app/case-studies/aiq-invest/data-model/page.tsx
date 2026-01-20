import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function DataModel() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Data Model"
          subtitle="Structured financial data storage"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          The system uses a relational data model to ensure consistency and
          enforce strong relationships between financial entities.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Users – roles and permissions</li>
          <li>Assets – instruments and identifiers</li>
          <li>Transactions – historical records</li>
          <li>Analytics – computed metrics</li>
        </ul>
      </section>
    </PageTransition>
  );
}
