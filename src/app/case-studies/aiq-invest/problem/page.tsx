import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Problem() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Problem Statement"
          subtitle="Challenges in investment analytics platforms"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          Investors require accurate, real-time insights derived from large
          volumes of financial data. Traditional tools often lack flexibility,
          transparency, and performance when handling complex analytics.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Handling large financial datasets</li>
          <li>Ensuring data accuracy and consistency</li>
          <li>Delivering fast and interactive dashboards</li>
          <li>Securing sensitive financial information</li>
        </ul>
      </section>
    </PageTransition>
  );
}
