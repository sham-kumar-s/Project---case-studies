import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

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

        <p className="text-neutral-300 leading-relaxed mb-6">
          A Redis-based Pub/Sub layer enables horizontal scaling by synchronizing
          messages across multiple backend instances. MongoDB is used as the
          primary data store for chat history and user metadata.
        </p>

        <h3 className="text-lg font-semibold mb-3">
          Core Components
        </h3>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Next.js frontend for UI and routing</li>
          <li>Node.js backend for APIs and sockets</li>
          <li>WebSocket layer for real-time messaging</li>
          <li>Redis for Pub/Sub and caching</li>
          <li>MongoDB for persistent storage</li>
        </ul>
      </section>
    </PageTransition>
  );
}
