import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Mermaid from "@/app/components/ui/Mermaid";

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

        <Mermaid
          chart={`
flowchart TD
    DataSource --> IngestionService
    IngestionService --> Database
    Database --> AnalyticsService
    AnalyticsService --> API
    API --> Dashboard
          `}
        />

        <SectionDivider />

        <SubHeading>Key Architecture Layers</SubHeading>
        <BulletList
          items={[
            "Frontend dashboard for visualization",
            "Backend services for analytics logic",
            "PostgreSQL for structured financial data",
            "Batch and near-real-time data pipelines",
          ]}
        />
      </section>
    </PageTransition>
  );
}
