import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Security() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Security"
          subtitle="Safe client-side access"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>API key stored securely (env variables)</li>
          <li>Read-only API permissions</li>
          <li>Input sanitization</li>
        </ul>
      </section>
    </PageTransition>
  );
}
