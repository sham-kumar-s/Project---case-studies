import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import Callout from "@/app/components/ui/Callout";
import SectionDivider from "@/app/components/ui/SectionDivider";

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

        <SectionDivider />

        <SubHeading>Core Data Structure</SubHeading>
        <BulletList
          items={[
            "Wallet address as primary identity",
            "Smart contract state for core logic",
            "Backend database for analytics & UI state",
          ]}
        />

        <Callout type="decision" title="Hybrid Storage Strategy">
          We decided to store only the hash of the metadata on-chain to save on gas fees, 
          while keeping the full JSON objects in a decentralized storage layer (IPFS).
        </Callout>

        <Callout type="trade-off" title="Latency vs. Consistency">
          Using off-chain indexing improves read performance significantly but introduces 
          a 2-3 second delay before on-chain actions are reflected in the UI.
        </Callout>
      </section>
    </PageTransition>
  );
}
