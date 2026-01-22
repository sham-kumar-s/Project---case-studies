"use client";

import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Mermaid from "@/app/components/ui/Mermaid";

export default function RoomBookingOverview() {
  return (
    <PageTransition>
      <div className="max-w-4xl space-y-24">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Room Booking Application
          </h1>

          <p className="text-lg text-neutral-300 leading-relaxed mb-8">
            This case study documents the design and implementation of a
            production-grade room booking system. The focus is on scalability,
            low-latency messaging, system design decisions, and real-world trade-offs.
          </p>

          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="font-semibold mb-2">Tech Stack</h3>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>Frontend: Next.js, React</li>
                <li>Backend: Node.js, Express</li>
                <li>Database: MongoDB</li>
                <li>Real-Time: WebSockets</li>
                <li>Cache / PubSub: Redis</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="font-semibold mb-2">What This Covers</h3>
              <ul className="text-sm text-neutral-400 space-y-1">
                <li>System architecture & data flow</li>
                <li>Database and API design</li>
                <li>Scaling strategies</li>
                <li>Security considerations</li>
                <li>Failures and improvements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="scroll-mt-20">
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

        {/* Architecture Section */}
        <section id="architecture" className="scroll-mt-20">
          <SectionHeader
            title="System Architecture"
            subtitle="High-level design and data flow"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            The system follows a service-oriented architecture where the frontend
            communicates with the backend over WebSockets for real-time events and
            REST APIs for standard operations.
          </p>

          <Mermaid
            chart={`
flowchart TD
    User -->|HTTP| Frontend
    Frontend -->|REST API| Backend
    Backend -->|Check Availability| Database
    Backend -->|Create Booking| Database
    Backend -->|Notify| Redis
    Redis --> Backend
            `}
          />

          <SectionDivider />

          <p className="text-neutral-300 leading-relaxed mb-6">
            A Redis-based Pub/Sub layer enables horizontal scaling by synchronizing
            messages across multiple backend instances. MongoDB is used as the
            primary data store for chat history and user metadata.
          </p>

          <SubHeading>Core Components</SubHeading>
          <BulletList
            items={[
              "Next.js frontend for UI and routing",
              "Node.js backend for APIs and sockets",
              "WebSocket layer for real-time messaging",
              "Redis for Pub/Sub and caching",
              "MongoDB for persistent storage",
            ]}
          />
        </section>

        {/* Data Model Section */}
        <section id="data-model" className="scroll-mt-20">
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

        {/* APIs Section */}
        <section id="apis" className="scroll-mt-20">
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

        {/* Security Section */}
        <section id="security" className="scroll-mt-20">
          <SectionHeader
            title="Security"
            subtitle="Protecting data and access"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            Security is enforced through authentication, authorization, and
            request validation at multiple layers of the system.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>JWT-based authentication</li>
            <li>Role-based access control</li>
            <li>Input validation and sanitization</li>
            <li>Rate limiting and abuse prevention</li>
          </ul>
        </section>

        {/* Scaling Section */}
        <section id="scaling" className="scroll-mt-20">
          <SectionHeader
            title="Scaling Strategy"
            subtitle="How the system handles growth"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            The backend exposes RESTful APIs for booking management and uses
            WebSockets for real-time availability updates.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key Strategies</h3>

          <ul className="list-disc list-inside text-neutral-400 space-y-2 mb-6">
            <li>Horizontal scaling with load balancers</li>
            <li>Redis for distributed caching</li>
            <li>Database replication and sharding</li>
            <li>CDN for static assets</li>
          </ul>

          <p className="text-neutral-300 leading-relaxed">
            The system is designed to scale horizontally, allowing for easy
            addition of new instances to handle increased load.
          </p>
        </section>

        {/* Failures Section */}
        <section id="failures" className="scroll-mt-20">
          <SectionHeader
            title="Failures & Learnings"
            subtitle="What went wrong and what was learned"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            During development, several issues were encountered, including race
            conditions in booking creation and inefficient database queries.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Overbooking due to missing atomic operations</li>
            <li>Slow queries caused by missing indexes</li>
            <li>Improper WebSocket cleanup leading to memory leaks</li>
          </ul>

          <p className="text-neutral-300 leading-relaxed mt-6">
            These failures guided improvements in transaction handling,
            indexing strategies, and connection lifecycle management.
          </p>
        </section>

        {/* Improvements Section */}
        <section id="improvements" className="scroll-mt-20">
          <SectionHeader
            title="Improvements & Future Work"
            subtitle="How the system can evolve"
          />

          <p className="text-neutral-300 leading-relaxed mb-6">
            With additional time and resources, several improvements could
            further enhance scalability, reliability, and user experience.
          </p>

          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Move booking logic to database-level transactions</li>
            <li>Introduce event-driven architecture</li>
            <li>Add monitoring and alerting</li>
            <li>Support multi-region deployment</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  );
}
