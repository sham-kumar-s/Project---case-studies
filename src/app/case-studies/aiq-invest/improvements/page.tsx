import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function ImprovementsPage() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Improvements & Future Work"
          subtitle="How the system can evolve"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          With additional time and resources, several improvements could
          further enhance scalability, reliability, and user experience.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Move booking logic to database-level transactions</li>
          <li>Introduce event-driven architecture</li>
          <li>Add monitoring and alerting</li>
          <li>Support multi-region deployment</li>
        </ul>
      </section>
    </PageTransition>
  );
}
