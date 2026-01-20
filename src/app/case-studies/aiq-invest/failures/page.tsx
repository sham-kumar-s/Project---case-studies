import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Failures() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Failures & Learnings"
          subtitle="Lessons from real data systems"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Slow analytics queries due to missing indexes</li>
          <li>Overfetching data in dashboards</li>
          <li>Complex query logic affecting maintainability</li>
        </ul>
      </section>
    </PageTransition>
  );
}
