import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Mermaid from "@/app/components/ui/Mermaid";

export default function ArchitecturePage() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="System Architecture"
          subtitle="High-level design and data flow"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          The system follows a service-oriented architecture where the frontend
          communicates with the backend over WebSockets for real-time events and
          REST APIs for standard operations.
        </p>

        <Mermaid
          chart={`
flowchart TD
    User -->|HTTP| Frontend
    Frontend -->|REST API| Backend
    Backend -->|Check Availability| Database
    Backend -->|Create Booking| Database
    Backend -->|Notify| Redis
    Redis --> Backend
          `}
        />

        <SectionDivider />

        <p className="text-neutral-300 leading-relaxed mb-6">
          A Redis-based Pub/Sub layer enables horizontal scaling by synchronizing
          messages across multiple backend instances. MongoDB is used as the
          primary data store for chat history and user metadata.
        </p>

        <SubHeading>Core Components</SubHeading>
        <BulletList
          items={[
            "Next.js frontend for UI and routing",
            "Node.js backend for APIs and sockets",
            "WebSocket layer for real-time messaging",
            "Redis for Pub/Sub and caching",
            "MongoDB for persistent storage",
          ]}
        />
      </section>
    </PageTransition>
  );
}
