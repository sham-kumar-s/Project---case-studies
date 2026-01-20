import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

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

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>React UI for rendering search results</li>
          <li>Third-party image API for data</li>
          <li>Client-side state management</li>
          <li>Stateless hosting</li>
        </ul>
      </section>
    </PageTransition>
  );
}
