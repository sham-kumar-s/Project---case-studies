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
          subtitle="Client-side focused design"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          The application follows a client-heavy architecture where the frontend
          directly communicates with a third-party image API. No custom backend
          is required, simplifying deployment and reducing infrastructure cost.
        </p>

        <Mermaid
          chart={`
flowchart TD
    User -->|Search Query| Frontend
    Frontend -->|API Request| ImageAPI
    ImageAPI -->|JSON Data| Frontend
    Frontend -->|Render Images| User
          `}
        />

        <SectionDivider />

        <SubHeading>Architecture Highlights</SubHeading>
        <BulletList
          items={[
            "React UI for rendering search results",
            "Third-party image API for data",
            "Client-side state management",
            "Stateless hosting",
          ]}
        />
      </section>
    </PageTransition>
  );
}
