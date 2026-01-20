import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Security() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Security"
          subtitle="Protecting financial data"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Role-based access control</li>
          <li>Encrypted data storage</li>
          <li>Secure API authentication</li>
          <li>Audit logging</li>
        </ul>
      </section>
    </PageTransition>
  );
}
