import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function ProblemPage() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Problem Statement"
          subtitle="Why this system was needed"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          Modern chat applications must support thousands of concurrent users,
          deliver messages in real time, and remain reliable under fluctuating
          traffic. Traditional HTTP-based polling solutions introduce latency,
          waste bandwidth, and fail to scale efficiently.
        </p>

        <p className="text-neutral-300 leading-relaxed mb-6">
          The challenge was to design a system that ensures low-latency message
          delivery, maintains consistent user presence, and supports horizontal
          scaling without sacrificing reliability.
        </p>

        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>Real-time message delivery</li>
          <li>High concurrency support</li>
          <li>Scalable architecture</li>
          <li>Reliable message ordering</li>
        </ul>
      </section>
    </PageTransition>
  );
}
