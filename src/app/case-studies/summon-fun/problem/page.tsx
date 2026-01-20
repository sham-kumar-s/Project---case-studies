import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function Problem() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Problem Statement"
          subtitle="Challenges in Web3 user interaction"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          Traditional Web3 applications often suffer from poor user experience,
          complex wallet flows, and unclear feedback during on-chain actions.
          Users face uncertainty around transaction status, gas costs, and
          security risks.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Complex wallet onboarding</li>
          <li>Slow and unclear transaction feedback</li>
          <li>Lack of trust and transparency</li>
          <li>High drop-off during interactions</li>
        </ul>
      </section>
    </PageTransition>
  );
}
