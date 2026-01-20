import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Scaling() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Scaling Strategy"
          subtitle="Frontend and API limits"
        />

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Client-side caching of search results</li>
          <li>Lazy loading images</li>
          <li>Debouncing user input</li>
          <li>Respecting API rate limits</li>
        </ul>
      </section>
    </PageTransition>
  );
}
