import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function APIs() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="API Usage"
          subtitle="Search and pagination"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>GET /search/images</li>
          <li>Query-based filtering</li>
          <li>Pagination support</li>
          <li>Debounced requests</li>
        </ul>
      </section>
    </PageTransition>
  );
}
