import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function DataModelPage() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <SectionHeader
          title="Data Model"
          subtitle="How data is structured and stored"
        />

        <p className="text-neutral-300 leading-relaxed mb-6">
          The system uses MongoDB as the primary data store due to its flexible
          schema and suitability for rapidly evolving product requirements.
          Data is organized around users, rooms, and bookings.
        </p>

        <h3 className="text-lg font-semibold mb-2">Core Collections</h3>

        <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6">
          <li><strong>Users</strong> – profile, role, authentication data</li>
          <li><strong>Rooms</strong> – room details, capacity, availability</li>
          <li><strong>Bookings</strong> – user, room, time window, status</li>
        </ul>

        <p className="text-neutral-300 leading-relaxed">
          Indexes are created on frequently queried fields such as roomId,
          userId, and booking time ranges to optimize read performance.
        </p>
      </section>
    </PageTransition>
  );
}
