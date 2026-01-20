import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function DataModel() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Data Model"
          subtitle="Handling API response data"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          Since the application consumes a third-party API, the data model
          mirrors the API response structure. Only the necessary fields are
          extracted and stored in client-side state.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Image ID</li>
          <li>Preview URL</li>
          <li>Full-size image URL</li>
          <li>Metadata (author, tags)</li>
        </ul>
      </section>
    </PageTransition>
  );
}
