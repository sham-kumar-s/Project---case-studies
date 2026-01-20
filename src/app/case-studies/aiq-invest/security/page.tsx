import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

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

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>JWT-based authentication</li>
          <li>Role-based access control</li>
          <li>Input validation and sanitization</li>
          <li>Rate limiting and abuse prevention</li>
        </ul>
      </section>
    </PageTransition>
  );
}
