import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Architecture() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="System Architecture"
          subtitle="On-chain + off-chain coordination"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          The system follows a hybrid Web3 architecture where the frontend
          interacts directly with smart contracts while also communicating with
          backend services for indexing, validation, and analytics.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Frontend triggers wallet interactions</li>
          <li>Smart contracts handle trust-critical logic</li>
          <li>Backend indexes blockchain events</li>
          <li>UI updates through event-driven state</li>
        </ul>
      </section>
    </PageTransition>
  );
}
