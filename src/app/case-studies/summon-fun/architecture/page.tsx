import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import Callout from "@/app/components/ui/Callout";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Mermaid from "@/app/components/ui/Mermaid";

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

        <Mermaid
          chart={`
flowchart TD
    User -->|Wallet Connect| Frontend
    Frontend -->|Tx Request| Blockchain
    Blockchain -->|Events| Indexer
    Indexer --> Backend
    Backend --> Frontend
          `}
        />

        <SectionDivider />

        <SubHeading>Key Components</SubHeading>
        <BulletList
          items={[
            "Frontend triggers wallet interactions",
            "Smart contracts handle trust-critical logic",
            "Backend indexes blockchain events",
            "UI updates through event-driven state",
          ]}
        />

        <Callout type="decision" title="Event-Driven Indexing">
          We implemented a custom event listener service instead of relying on direct RPC polling. 
          This reduced infrastructure costs by 40% and improved data freshness.
        </Callout>

        <Callout type="trade-off" title="Direct RPC vs. Indexed Data">
          While direct RPC calls are more accurate for real-time state, they are slow for complex queries. 
          We use RPC for &quot;Write&quot; actions and Indexed data for &quot;Read&quot; views.
        </Callout>
      </section>
    </PageTransition>
  );
}
