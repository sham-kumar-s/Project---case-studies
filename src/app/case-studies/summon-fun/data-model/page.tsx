import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function DataModel() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Data Model"
          subtitle="On-chain and off-chain data separation"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          Critical data such as ownership and actions are stored on-chain,
          while non-critical metadata and analytics are handled off-chain.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Wallet address as primary identity</li>
          <li>Smart contract state for core logic</li>
          <li>Backend database for analytics & UI state</li>
        </ul>
      </section>
    </PageTransition>
  );
}
