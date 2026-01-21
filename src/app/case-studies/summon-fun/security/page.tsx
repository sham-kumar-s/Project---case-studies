import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import Callout from "@/app/components/ui/Callout";
import SectionDivider from "@/app/components/ui/SectionDivider";

export default function SecurityPage() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
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
    </PageTransition>
  );
}
