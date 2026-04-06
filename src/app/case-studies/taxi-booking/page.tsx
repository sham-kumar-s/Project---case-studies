import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Card from "@/app/components/ui/Card";
import Callout from "@/app/components/ui/Callout";
import Mermaid from "@/app/components/ui/Mermaid";

export default function TaxiBookingOverview() {
  return (
    <PageTransition>
      <div className="max-w-4xl space-y-24">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Taxi Booking Platform
          </h1>

          <p className="text-lg text-black leading-relaxed mb-8">
            A real-time ride-hailing platform connecting passengers with drivers
            through intelligent matching algorithms. The system handles geolocation,
            dynamic pricing, real-time tracking, and payment processing at scale.
          </p>

          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <SubHeading className="mt-0">Tech Stack</SubHeading>
              <BulletList
                items={[
                  "Frontend: React Native / Next.js",
                  "Backend: Node.js / Go",
                  "Database: PostgreSQL + MongoDB",
                  "Real-time: WebSockets / Redis Pub/Sub",
                ]}
              />
            </Card>

            <Card>
              <SubHeading className="mt-0">Key Focus Areas</SubHeading>
              <BulletList
                items={[
                  "Real-time location tracking",
                  "Intelligent driver matching",
                  "Dynamic surge pricing",
                  "Payment processing",
                ]}
              />
            </Card>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="scroll-mt-20">
          <SectionHeader
            title="Problem Statement"
            subtitle="Challenges in ride-hailing systems"
          />

          <p className="text-black leading-relaxed mb-6">
            Traditional taxi services suffer from inefficient dispatch, lack of
            transparency, and poor user experience. Passengers face long wait times,
            uncertain pricing, and limited payment options.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Inefficient driver-passenger matching</li>
            <li>No real-time location tracking or ETA</li>
            <li>Unpredictable pricing and payment friction</li>
            <li>Poor communication between drivers and passengers</li>
            <li>Difficulty handling peak demand periods</li>
          </ul>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="scroll-mt-20">
          <SectionHeader
            title="System Architecture"
            subtitle="Real-time distributed system design"
          />

          <p className="text-black leading-relaxed mb-6">
            The platform uses a microservices architecture with specialized services
            for matching, tracking, pricing, and payments. Real-time communication
            is handled through WebSockets and Redis Pub/Sub for low-latency updates.
          </p>

          <Mermaid
            chart={`
flowchart TD
    Passenger[Passenger App] -->|WebSocket| Gateway[API Gateway]
    Driver[Driver App] -->|WebSocket| Gateway
    Gateway --> MatchingService[Matching Service]
    Gateway --> TrackingService[Tracking Service]
    Gateway --> PricingService[Pricing Service]
    Gateway --> PaymentService[Payment Service]
    MatchingService --> Redis[(Redis)]
    TrackingService --> Redis
    TrackingService --> MongoDB[(MongoDB)]
    MatchingService --> PostgreSQL[(PostgreSQL)]
    PricingService --> PostgreSQL
    PaymentService --> PaymentGateway[Payment Gateway]
    Redis -->|Pub/Sub| NotificationService[Notification Service]
            `}
          />

          <SectionDivider />

          <SubHeading>Key Components</SubHeading>
          <BulletList
            items={[
              "Matching Service: finds optimal driver-passenger pairs",
              "Tracking Service: real-time GPS location updates",
              "Pricing Service: dynamic fare calculation with surge",
              "Payment Service: secure transaction processing",
              "Notification Service: push notifications and SMS",
            ]}
          />

          <Callout type="decision" title="Geospatial Indexing">
            We use Redis with geospatial indexes (GEOADD/GEORADIUS) for driver location
            queries instead of PostgreSQL PostGIS. This reduced matching latency from
            500ms to 50ms for typical queries within a 5km radius.
          </Callout>

          <Callout type="trade-off" title="Accuracy vs Performance">
            Driver locations are updated every 5 seconds instead of continuously to
            balance battery life, network usage, and tracking accuracy. This trade-off
            provides acceptable precision while reducing mobile data usage by 70%.
          </Callout>
        </section>

        {/* Data Model Section */}
        <section id="data-model" className="scroll-mt-20">
          <SectionHeader
            title="Data Model"
            subtitle="Ride-hailing data structure"
          />

          <p className="text-black leading-relaxed mb-6">
            The system uses a hybrid database approach: PostgreSQL for transactional
            data (users, rides, payments) and MongoDB for high-volume location history.
            Redis serves as the real-time state store.
          </p>

          <SectionDivider />

          <SubHeading>Core Entities</SubHeading>
          <BulletList
            items={[
              "Users: passengers and drivers with profiles and ratings",
              "Rides: booking details, status, route, fare",
              "Locations: real-time GPS coordinates and history",
              "Payments: transactions, methods, refunds",
              "Ratings: bidirectional feedback system",
            ]}
          />

          <Callout type="decision" title="Ride State Machine">
            We implemented rides as a finite state machine (REQUESTED → MATCHED →
            ARRIVED → IN_PROGRESS → COMPLETED) with strict transition rules. This
            prevents invalid state changes and simplifies debugging.
          </Callout>

          <Callout type="trade-off" title="Location History Storage">
            Storing all GPS points in PostgreSQL caused performance issues. We moved
            to MongoDB for location history (time-series data) while keeping ride
            metadata in PostgreSQL. This hybrid approach improved write throughput
            by 10x.
          </Callout>
        </section>

        {/* APIs Section */}
        <section id="apis" className="scroll-mt-20">
          <SectionHeader
            title="API Design"
            subtitle="Real-time ride management"
          />

          <p className="text-black leading-relaxed mb-6">
            The platform exposes RESTful APIs for ride management and WebSocket
            connections for real-time updates. All endpoints implement proper
            authentication, validation, and rate limiting.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key Endpoints</h3>

          <ul className="list-disc list-inside text-black space-y-2 mb-6">
            <li><code>POST /rides</code> – request a ride</li>
            <li><code>GET /rides/:id</code> – ride details and status</li>
            <li><code>POST /rides/:id/accept</code> – driver accepts ride</li>
            <li><code>PUT /rides/:id/location</code> – update driver location</li>
            <li><code>POST /rides/:id/complete</code> – finish ride</li>
            <li><code>GET /pricing/estimate</code> – fare estimation</li>
            <li><code>POST /payments</code> – process payment</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2 mt-6">WebSocket Events</h3>

          <ul className="list-disc list-inside text-black space-y-2">
            <li><code>ride.matched</code> – driver assigned to passenger</li>
            <li><code>driver.location</code> – real-time driver position</li>
            <li><code>ride.status</code> – ride state changes</li>
            <li><code>eta.updated</code> – estimated arrival time</li>
          </ul>

          <Callout type="decision" title="WebSocket vs Polling">
            We chose WebSockets over HTTP polling for location updates to reduce
            server load and improve real-time responsiveness. This decreased backend
            requests by 95% and improved battery life on mobile devices.
          </Callout>
        </section>

        {/* Security Section */}
        <section id="security" className="scroll-mt-20">
          <SectionHeader
            title="Security"
            subtitle="Protecting users and transactions"
          />

          <p className="text-black leading-relaxed mb-6">
            Security is critical for protecting user data, location privacy, and
            financial transactions. The platform implements multiple security layers
            and follows industry best practices.
          </p>

          <SectionDivider />

          <SubHeading>Security Measures</SubHeading>
          <BulletList
            items={[
              "JWT-based authentication with short-lived tokens",
              "End-to-end TLS encryption for all communications",
              "PCI DSS compliance for payment processing",
              "Location data anonymization after ride completion",
              "Rate limiting to prevent API abuse",
              "Two-factor authentication for driver accounts",
              "Background checks and verification for drivers",
            ]}
          />

          <Callout type="decision" title="Location Privacy">
            We automatically anonymize precise GPS coordinates 24 hours after ride
            completion, retaining only approximate zones for analytics. This balances
            privacy concerns with operational needs for dispute resolution.
          </Callout>

          <Callout type="trade-off" title="Real-time vs Privacy">
            Sharing real-time driver location with passengers improves transparency
            but raises privacy concerns. We limit location sharing to active rides
            only and stop immediately upon completion.
          </Callout>
        </section>

        {/* Scaling Section */}
        <section id="scaling" className="scroll-mt-20">
          <SectionHeader
            title="Scaling Strategy"
            subtitle="Handling millions of rides"
          />

          <p className="text-black leading-relaxed mb-6">
            The platform is designed to scale horizontally across multiple regions
            with intelligent load balancing and data partitioning strategies.
          </p>

          <SectionDivider />

          <SubHeading>Scaling Approaches</SubHeading>
          <BulletList
            items={[
              "Geographic sharding by city/region",
              "Redis cluster for distributed caching",
              "Kubernetes for container orchestration",
              "Auto-scaling based on ride request volume",
              "CDN for mobile app assets",
              "Database read replicas for analytics",
              "Message queues for async processing",
            ]}
          />

          <Callout type="decision" title="Geographic Sharding">
            We shard data by geographic region (city-level) to reduce cross-region
            latency and comply with data residency laws. Each region operates
            independently with local databases and caches.
          </Callout>

          <Callout type="trade-off" title="Consistency vs Availability">
            During network partitions, we prioritize availability over consistency
            for non-critical operations (like ratings) but maintain strong consistency
            for payments. This follows the CAP theorem trade-offs.
          </Callout>
        </section>

        {/* Failures Section */}
        <section id="failures" className="scroll-mt-20">
          <SectionHeader
            title="Failures & Learnings"
            subtitle="What went wrong and lessons learned"
          />

          <p className="text-black leading-relaxed mb-6">
            During development and scaling, several critical issues emerged that
            required architectural changes and operational improvements.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Matching algorithm assigned same driver to multiple passengers</li>
            <li>WebSocket connections dropped during high load causing missed updates</li>
            <li>Surge pricing calculations caused race conditions during peak hours</li>
            <li>Payment processing timeouts led to double charges</li>
            <li>Location updates overwhelmed database causing slowdowns</li>
            <li>Redis memory exhaustion during major events</li>
          </ul>

          <p className="text-black leading-relaxed mt-6">
            These failures led to implementing distributed locks for matching,
            WebSocket connection pooling, idempotent payment APIs, moving location
            data to MongoDB, and better Redis memory management with TTLs.
          </p>
        </section>

        {/* Improvements Section */}
        <section id="improvements" className="scroll-mt-20">
          <SectionHeader
            title="Improvements & Future Work"
            subtitle="Enhancing the platform"
          />

          <p className="text-black leading-relaxed mb-6">
            Several enhancements could further improve matching efficiency,
            user experience, and operational capabilities.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Machine learning for demand prediction and driver positioning</li>
            <li>Multi-stop ride support for shared rides</li>
            <li>In-app chat and calling between drivers and passengers</li>
            <li>Integration with public transit for multi-modal routing</li>
            <li>Carbon footprint tracking and eco-friendly ride options</li>
            <li>Advanced fraud detection using behavioral analytics</li>
            <li>Driver earnings optimization and route suggestions</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  );
}
