import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Card from "@/app/components/ui/Card";
import Callout from "@/app/components/ui/Callout";
import Mermaid from "@/app/components/ui/Mermaid";

export default function SummonOverview() {
  return (
    <PageTransition>
      <div className="max-w-4xl space-y-24">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Summon.fun
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            Summon.fun is a Web3-based interactive platform that allows users to
            trigger on-chain and off-chain actions through wallet-based identity.
            The project focuses on seamless blockchain UX, secure interactions,
            and responsive frontend design.
          </p>

          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <SubHeading className="mt-0">Tech Stack</SubHeading>
              <BulletList
                items={[
                  "Frontend: React / Next.js",
                  "Wallets: MetaMask / WalletConnect",
                  "Blockchain: EVM-compatible chain",
                  "Backend: Node.js (off-chain logic)",
                ]}
              />
            </Card>

            <Card>
              <SubHeading className="mt-0">Key Focus Areas</SubHeading>
              <BulletList
                items={[
                  "Web3 authentication",
                  "Smart contract interaction",
                  "Frontend UX performance",
                  "Security & trust",
                ]}
              />
            </Card>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="scroll-mt-20">
          <SectionHeader
            title="Problem Statement"
            subtitle="Challenges in Web3 user interaction"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            Traditional Web3 applications often suffer from poor user experience,
            complex wallet flows, and unclear feedback during on-chain actions.
            Users face uncertainty around transaction status, gas costs, and
            security risks.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Complex wallet onboarding</li>
            <li>Slow and unclear transaction feedback</li>
            <li>Lack of trust and transparency</li>
            <li>High drop-off during interactions</li>
          </ul>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="scroll-mt-20">
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

        {/* Data Model Section */}
        <section id="data-model" className="scroll-mt-20">
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

        {/* APIs Section */}
        <section id="apis" className="scroll-mt-20">
          <SectionHeader
            title="API Design"
            subtitle="How clients interact with the system"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            The backend exposes RESTful APIs for booking management and uses
            WebSockets for real-time availability updates.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key Endpoints</h3>

          <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6">
            <li><code>POST /bookings</code> – create a booking</li>
            <li><code>GET /rooms</code> – list available rooms</li>
            <li><code>GET /bookings/:id</code> – booking details</li>
            <li><code>DELETE /bookings/:id</code> – cancel booking</li>
          </ul>

          <p className="text-neutral-300 leading-relaxed">
            APIs are versioned and include proper validation, error handling,
            and idempotency where required.
          </p>
        </section>

        {/* Security Section */}
        <section id="security" className="scroll-mt-20">
          <SectionHeader
            title="Security"
            subtitle="Protecting data and access"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            Security is enforced through authentication, authorization, and
            request validation at multiple layers of the system.
          </p>

          <SectionDivider />

          <SubHeading>Security Layers</SubHeading>
          <BulletList
            items={[
              "JWT-based authentication for off-chain services",
              "Role-based access control (RBAC) for admin actions",
              "Input validation and sanitization on all endpoints",
              "Rate limiting and abuse prevention",
            ]}
          />

          <Callout type="decision" title="Stateless Authentication">
            We chose JWTs over session-based auth to ensure the backend remains stateless, 
            allowing for easier horizontal scaling across multiple regions.
          </Callout>

          <Callout type="trade-off" title="Security vs. UX">
            Implementing strict rate limiting protects against DDoS but can occasionally 
            trigger false positives for power users. We mitigated this with a grace period.
          </Callout>
        </section>

        {/* Scaling Section */}
        <section id="scaling" className="scroll-mt-20">
          <SectionHeader
            title="Scaling Strategy"
            subtitle="How the system handles growth"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            The backend exposes RESTful APIs for booking management and uses
            WebSockets for real-time availability updates.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key Endpoints</h3>

          <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6">
            <li><code>POST /bookings</code> – create a booking</li>
            <li><code>GET /rooms</code> – list available rooms</li>
            <li><code>GET /bookings/:id</code> – booking details</li>
            <li><code>DELETE /bookings/:id</code> – cancel booking</li>
          </ul>

          <p className="text-neutral-300 leading-relaxed">
            APIs are versioned and include proper validation, error handling,
            and idempotency where required.
          </p>
        </section>

        {/* Failures Section */}
        <section id="failures" className="scroll-mt-20">
          <SectionHeader
            title="Failures & Learnings"
            subtitle="What went wrong and what was learned"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            During development, several issues were encountered, including race
            conditions in booking creation and inefficient database queries.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Overbooking due to missing atomic operations</li>
            <li>Slow queries caused by missing indexes</li>
            <li>Improper WebSocket cleanup leading to memory leaks</li>
          </ul>

          <p className="text-neutral-300 leading-relaxed mt-6">
            These failures guided improvements in transaction handling,
            indexing strategies, and connection lifecycle management.
          </p>
        </section>

        {/* Improvements Section */}
        <section id="improvements" className="scroll-mt-20">
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
      </div>
    </PageTransition>
  );
}
