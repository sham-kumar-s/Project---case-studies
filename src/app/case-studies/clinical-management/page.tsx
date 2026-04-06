import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";
import SubHeading from "@/app/components/ui/SubHeading";
import BulletList from "@/app/components/ui/BulletList";
import SectionDivider from "@/app/components/ui/SectionDivider";
import Card from "@/app/components/ui/Card";
import Callout from "@/app/components/ui/Callout";
import Mermaid from "@/app/components/ui/Mermaid";

export default function ClinicalManagementOverview() {
  return (
    <PageTransition>
      <div className="max-w-4xl space-y-24">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Clinical Management System
          </h1>

          <p className="text-lg text-black leading-relaxed mb-8">
            A comprehensive healthcare management platform designed to streamline
            patient records, appointment scheduling, and clinical workflows. The
            system prioritizes data security, HIPAA compliance, and seamless
            integration with existing healthcare infrastructure.
          </p>

          <SectionDivider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <SubHeading className="mt-0">Tech Stack</SubHeading>
              <BulletList
                items={[
                  "Frontend: React / Next.js",
                  "Backend: Node.js / Express",
                  "Database: PostgreSQL",
                  "Cache: Redis",
                ]}
              />
            </Card>

            <Card>
              <SubHeading className="mt-0">Key Focus Areas</SubHeading>
              <BulletList
                items={[
                  "HIPAA compliance",
                  "Real-time appointment management",
                  "Electronic health records (EHR)",
                  "Role-based access control",
                ]}
              />
            </Card>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="scroll-mt-20">
          <SectionHeader
            title="Problem Statement"
            subtitle="Challenges in healthcare management"
          />

          <p className="text-black leading-relaxed mb-6">
            Healthcare facilities struggle with fragmented patient data, inefficient
            appointment scheduling, and complex compliance requirements. Manual
            processes lead to errors, delays, and poor patient experience.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Fragmented patient records across systems</li>
            <li>Manual appointment scheduling causing conflicts</li>
            <li>Lack of real-time availability updates</li>
            <li>Complex HIPAA compliance requirements</li>
            <li>Poor communication between staff and patients</li>
          </ul>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="scroll-mt-20">
          <SectionHeader
            title="System Architecture"
            subtitle="Secure and scalable healthcare platform"
          />

          <p className="text-black leading-relaxed mb-6">
            The system follows a microservices architecture with separate services
            for patient management, appointments, billing, and notifications. All
            services communicate through secure APIs with end-to-end encryption.
          </p>

          <Mermaid
            chart={`
flowchart TD
    Patient[Patient Portal] -->|HTTPS| Gateway[API Gateway]
    Staff[Staff Dashboard] -->|HTTPS| Gateway
    Gateway -->|Auth| AuthService[Auth Service]
    Gateway --> PatientService[Patient Service]
    Gateway --> AppointmentService[Appointment Service]
    Gateway --> BillingService[Billing Service]
    PatientService --> DB[(PostgreSQL)]
    AppointmentService --> DB
    BillingService --> DB
    AppointmentService --> Cache[(Redis Cache)]
    AppointmentService -->|Notify| Queue[Message Queue]
    Queue --> NotificationService[Notification Service]
            `}
          />

          <SectionDivider />

          <SubHeading>Key Components</SubHeading>
          <BulletList
            items={[
              "API Gateway for request routing and rate limiting",
              "Auth Service for JWT-based authentication",
              "Patient Service for EHR management",
              "Appointment Service with real-time scheduling",
              "Notification Service for SMS/Email alerts",
            ]}
          />

          <Callout type="decision" title="Microservices vs Monolith">
            We chose microservices to allow independent scaling of high-traffic services
            like appointments while maintaining strict isolation for sensitive patient data.
            This increased initial complexity but provided better long-term flexibility.
          </Callout>

          <Callout type="trade-off" title="Real-time vs Eventual Consistency">
            Appointment availability uses Redis cache for real-time updates, accepting
            2-3 second eventual consistency with the database. This trade-off improved
            response times by 80% while maintaining acceptable data accuracy.
          </Callout>
        </section>

        {/* Data Model Section */}
        <section id="data-model" className="scroll-mt-20">
          <SectionHeader
            title="Data Model"
            subtitle="Healthcare data structure"
          />

          <p className="text-black leading-relaxed mb-6">
            The data model is designed around patients, providers, appointments,
            and medical records. All sensitive data is encrypted at rest and
            access is logged for audit compliance.
          </p>

          <SectionDivider />

          <SubHeading>Core Entities</SubHeading>
          <BulletList
            items={[
              "Patients: demographics, insurance, medical history",
              "Providers: doctors, nurses, specialists",
              "Appointments: scheduling, status, notes",
              "Medical Records: diagnoses, prescriptions, lab results",
              "Audit Logs: all data access and modifications",
            ]}
          />

          <Callout type="decision" title="Encryption Strategy">
            We implemented field-level encryption for PHI (Protected Health Information)
            using AES-256, with keys managed through AWS KMS. This adds 15ms latency
            but ensures HIPAA compliance and data protection.
          </Callout>

          <Callout type="trade-off" title="Normalization vs Performance">
            Medical records are partially denormalized to avoid complex joins during
            patient chart retrieval. This increases storage by 20% but reduces query
            time from 800ms to 120ms for typical patient views.
          </Callout>
        </section>

        {/* APIs Section */}
        <section id="apis" className="scroll-mt-20">
          <SectionHeader
            title="API Design"
            subtitle="Secure healthcare data access"
          />

          <p className="text-black leading-relaxed mb-6">
            All APIs follow RESTful principles with strict authentication,
            authorization, and audit logging. Rate limiting prevents abuse
            and ensures fair resource allocation.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key Endpoints</h3>

          <ul className="list-disc list-inside text-black space-y-2 mb-6">
            <li><code>POST /auth/login</code> – authenticate users</li>
            <li><code>GET /patients/:id</code> – retrieve patient records</li>
            <li><code>POST /appointments</code> – schedule appointment</li>
            <li><code>GET /appointments/availability</code> – check slots</li>
            <li><code>PUT /appointments/:id</code> – update appointment</li>
            <li><code>GET /medical-records/:patientId</code> – patient history</li>
          </ul>

          <Callout type="decision" title="API Versioning">
            We implemented URL-based versioning (v1, v2) to maintain backward
            compatibility while allowing gradual migration. This prevented breaking
            changes for integrated third-party systems.
          </Callout>
        </section>

        {/* Security Section */}
        <section id="security" className="scroll-mt-20">
          <SectionHeader
            title="Security"
            subtitle="HIPAA compliance and data protection"
          />

          <p className="text-black leading-relaxed mb-6">
            Security is paramount in healthcare systems. The platform implements
            multiple layers of protection including encryption, authentication,
            authorization, and comprehensive audit logging.
          </p>

          <SectionDivider />

          <SubHeading>Security Measures</SubHeading>
          <BulletList
            items={[
              "End-to-end TLS encryption for all communications",
              "Field-level encryption for PHI data",
              "Multi-factor authentication (MFA) for staff",
              "Role-based access control (RBAC) with least privilege",
              "Comprehensive audit logging of all data access",
              "Regular security audits and penetration testing",
              "Automatic session timeout and re-authentication",
            ]}
          />

          <Callout type="decision" title="Zero-Trust Architecture">
            We implemented zero-trust principles where every request is authenticated
            and authorized regardless of network location. This increased security
            posture but required careful session management.
          </Callout>

          <Callout type="trade-off" title="Security vs Usability">
            MFA and frequent re-authentication improve security but can frustrate
            users. We balanced this with risk-based authentication that only prompts
            for additional verification during sensitive operations.
          </Callout>
        </section>

        {/* Scaling Section */}
        <section id="scaling" className="scroll-mt-20">
          <SectionHeader
            title="Scaling Strategy"
            subtitle="Handling growth and peak loads"
          />

          <p className="text-black leading-relaxed mb-6">
            The system is designed to scale horizontally with containerized services
            deployed across multiple availability zones. Auto-scaling handles peak
            loads during business hours.
          </p>

          <SectionDivider />

          <SubHeading>Scaling Approaches</SubHeading>
          <BulletList
            items={[
              "Kubernetes for container orchestration",
              "Horizontal pod autoscaling based on CPU/memory",
              "Database read replicas for reporting queries",
              "Redis cluster for distributed caching",
              "CDN for static assets and patient portal",
              "Message queues for async processing",
            ]}
          />

          <Callout type="decision" title="Database Sharding Strategy">
            We shard patient data by geographic region to comply with data residency
            requirements and improve query performance. This added complexity but
            reduced cross-region latency by 60%.
          </Callout>
        </section>

        {/* Failures Section */}
        <section id="failures" className="scroll-mt-20">
          <SectionHeader
            title="Failures & Learnings"
            subtitle="What went wrong and lessons learned"
          />

          <p className="text-black leading-relaxed mb-6">
            During development and deployment, several critical issues emerged
            that required immediate attention and architectural changes.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Double-booking appointments due to race conditions in scheduling logic</li>
            <li>Database deadlocks during high-concurrency patient record updates</li>
            <li>Memory leaks in notification service causing crashes</li>
            <li>Slow patient chart loading due to N+1 query problems</li>
            <li>Session management issues causing unexpected logouts</li>
          </ul>

          <p className="text-black leading-relaxed mt-6">
            These failures led to implementing optimistic locking for appointments,
            query optimization with proper indexing, connection pooling improvements,
            and better session handling with Redis-backed storage.
          </p>
        </section>

        {/* Improvements Section */}
        <section id="improvements" className="scroll-mt-20">
          <SectionHeader
            title="Improvements & Future Work"
            subtitle="Enhancing the platform"
          />

          <p className="text-black leading-relaxed mb-6">
            Several enhancements could further improve the system&apos;s capabilities,
            user experience, and operational efficiency.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>AI-powered appointment scheduling optimization</li>
            <li>Telemedicine integration with video consultations</li>
            <li>Mobile apps for patients and providers</li>
            <li>Integration with pharmacy systems for e-prescriptions</li>
            <li>Predictive analytics for patient outcomes</li>
            <li>Voice-to-text for clinical notes</li>
            <li>Blockchain for immutable audit trails</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  );
}
