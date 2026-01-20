import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Improvements() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Improvements & Future Work"
          subtitle="Next phase of evolution"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Stream-based data ingestion</li>
          <li>Advanced visualization tools</li>
          <li>AI-driven insights</li>
          <li>Multi-tenant support</li>
        </ul>
      </section>
    </PageTransition>
  );
}
