import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function APIs() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="API Design"
          subtitle="Data access and analytics endpoints"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>GET /assets – list financial instruments</li>
          <li>GET /analytics – computed metrics</li>
          <li>POST /reports – generate insights</li>
        </ul>
      </section>
    </PageTransition>
  );
}
