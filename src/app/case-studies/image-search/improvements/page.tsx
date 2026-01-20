import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Improvements() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Improvements & Future Work"
          subtitle="Enhancing UX and performance"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Infinite scrolling</li>
          <li>Image optimization via CDN</li>
          <li>Advanced filtering options</li>
          <li>Backend proxy for API aggregation</li>
        </ul>
      </section>
    </PageTransition>
  );
}
