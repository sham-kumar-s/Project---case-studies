import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function APIsPage() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="API Design"
          subtitle="How clients interact with the system"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          The backend exposes RESTful APIs for booking management and uses
          WebSockets for real-time availability updates.
        </p>

        <h3 className="text-lg font-semibold mb-2">Key Endpoints</h3>

        <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6">
          <li><code>POST /bookings</code> – create a booking</li>
          <li><code>GET /rooms</code> – list available rooms</li>
          <li><code>GET /bookings/:id</code> – booking details</li>
          <li><code>DELETE /bookings/:id</code> – cancel booking</li>
        </ul>

        <p className="text-neutral-300 leading-relaxed">
          APIs are versioned and include proper validation, error handling,
          and idempotency where required.
        </p>
      </section>
    </PageTransition>
  );
}
