import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Problem() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Problem Statement"
          subtitle="Challenges in image search interfaces"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          Image search applications must deliver fast, visually rich results
          while minimizing API calls and handling unpredictable user queries.
          Poorly optimized search can lead to slow load times and rate limit
          issues.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>High latency image loading</li>
          <li>API rate limiting</li>
          <li>Poor mobile responsiveness</li>
          <li>Unclear search feedback</li>
        </ul>
      </section>
    </PageTransition>
  );
}
