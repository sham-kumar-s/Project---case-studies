import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Failures() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Failures & Learnings"
          subtitle="Lessons from frontend-heavy apps"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Excessive API calls due to missing debounce</li>
          <li>Layout shifts during image loading</li>
          <li>Poor performance on mobile devices</li>
        </ul>
      </section>
    </PageTransition>
  );
}
