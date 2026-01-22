import PageTransition from "@/app/components/animations/PageTransition";
import SectionHeader from "@/app/components/ui/SectionHeader";

export default function AIQOverview() {
  return (
    <PageTransition>
      <div className="max-w-4xl space-y-24">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <h1 className="text-4xl font-bold mb-4 text-black">
            AIQ Invest – Investment Analytics Platform
          </h1>

          <p className="text-lg text-black leading-relaxed mb-8">
            AIQ Capital is a data-driven investment analytics platform designed to
            provide users with insights, performance metrics, and decision support
            for modern financial markets. The system focuses on data accuracy,
            visualization, and secure access to financial intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="font-semibold mb-2 text-white">Tech Stack</h3>
              <ul className="text-sm text-white space-y-1">
                <li>Frontend: React / Next.js</li>
                <li>Backend: Node.js</li>
                <li>Database: PostgreSQL</li>
                <li>Analytics: Custom data pipelines</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
              <h3 className="font-semibold mb-2 text-white">Key Focus Areas</h3>
              <ul className="text-sm text-white space-y-1">
                <li>Financial data modeling</li>
                <li>Secure access control</li>
                <li>High-performance dashboards</li>
                <li>Scalable analytics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="scroll-mt-20">
          <SectionHeader
            title="Problem Statement"
            subtitle="Challenges in financial analytics"
          />

          <p className="text-black leading-relaxed mb-6">
            Investment platforms need to process large volumes of financial data,
            provide real-time insights, and maintain high accuracy. Traditional
            solutions often struggle with data freshness, complex calculations,
            and secure multi-user access.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Real-time data processing and visualization</li>
            <li>Complex financial calculations</li>
            <li>Secure user authentication and authorization</li>
            <li>Scalable data pipelines</li>
          </ul>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="scroll-mt-20">
          <SectionHeader
            title="System Architecture"
            subtitle="Platform design and data flow"
          />

          <p className="text-black leading-relaxed mb-6">
            The platform uses a microservices architecture with separate services
            for data ingestion, analytics processing, and user-facing dashboards.
            PostgreSQL serves as the primary database for structured financial data.
          </p>

          <h3 className="text-lg font-semibold mb-2">Core Components</h3>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>React-based dashboard for data visualization</li>
            <li>Node.js API layer for business logic</li>
            <li>PostgreSQL for relational data storage</li>
            <li>Custom ETL pipelines for data processing</li>
          </ul>
        </section>

        {/* Data Model Section */}
        <section id="data-model" className="scroll-mt-20">
          <SectionHeader
            title="Data Model"
            subtitle="Financial data structure"
          />

          <p className="text-black leading-relaxed mb-6">
            The data model is designed around users, portfolios, assets, and
            transactions. PostgreSQL's relational structure ensures data integrity
            and supports complex queries for analytics.
          </p>

          <h3 className="text-lg font-semibold mb-2">Core Tables</h3>

          <ul className="list-disc list-inside text-black space-y-2">
            <li><strong>Users</strong> – authentication, profile, permissions</li>
            <li><strong>Portfolios</strong> – user investments, allocations</li>
            <li><strong>Assets</strong> – stocks, bonds, market data</li>
            <li><strong>Transactions</strong> – buy/sell history, timestamps</li>
          </ul>
        </section>

        {/* APIs Section */}
        <section id="apis" className="scroll-mt-20">
          <SectionHeader
            title="API Design"
            subtitle="How clients access financial data"
          />

          <p className="text-black leading-relaxed mb-6">
            The backend exposes RESTful APIs for portfolio management and
            analytics queries. All endpoints require authentication and
            implement rate limiting.
          </p>

          <h3 className="text-lg font-semibold mb-2">Key Endpoints</h3>

          <ul className="list-disc list-inside text-black space-y-2 mb-6">
            <li><code>GET /portfolios</code> – list user portfolios</li>
            <li><code>GET /analytics/:id</code> – portfolio performance</li>
            <li><code>POST /transactions</code> – record new transaction</li>
            <li><code>GET /market-data</code> – current market prices</li>
          </ul>

          <p className="text-black leading-relaxed">
            APIs include proper error handling, input validation, and
            comprehensive documentation.
          </p>
        </section>

        {/* Security Section */}
        <section id="security" className="scroll-mt-20">
          <SectionHeader
            title="Security"
            subtitle="Protecting sensitive financial data"
          />

          <p className="text-black leading-relaxed mb-6">
            Security is critical for financial platforms. The system implements
            multiple layers of protection including encryption, authentication,
            and audit logging.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>JWT-based authentication with refresh tokens</li>
            <li>Role-based access control (RBAC)</li>
            <li>Data encryption at rest and in transit</li>
            <li>Comprehensive audit logging</li>
            <li>Regular security audits and penetration testing</li>
          </ul>
        </section>

        {/* Scaling Section */}
        <section id="scaling" className="scroll-mt-20">
          <SectionHeader
            title="Scaling Strategy"
            subtitle="Handling growth and load"
          />

          <p className="text-black leading-relaxed mb-6">
            The platform is designed to scale horizontally with load balancers
            distributing traffic across multiple API instances. Database read
            replicas handle analytics queries.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Horizontal scaling with containerization</li>
            <li>Database read replicas for analytics</li>
            <li>Caching layer for frequently accessed data</li>
            <li>CDN for static dashboard assets</li>
          </ul>
        </section>

        {/* Failures Section */}
        <section id="failures" className="scroll-mt-20">
          <SectionHeader
            title="Failures & Learnings"
            subtitle="What went wrong and lessons learned"
          />

          <p className="text-black leading-relaxed mb-6">
            During development, several challenges emerged including data
            synchronization issues and performance bottlenecks in complex queries.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Slow dashboard loading due to unoptimized queries</li>
            <li>Data inconsistencies from race conditions</li>
            <li>Memory leaks in long-running analytics jobs</li>
          </ul>

          <p className="text-black leading-relaxed mt-6">
            These issues led to improvements in query optimization, transaction
            handling, and resource management.
          </p>
        </section>

        {/* Improvements Section */}
        <section id="improvements" className="scroll-mt-20">
          <SectionHeader
            title="Improvements & Future Work"
            subtitle="Enhancing the platform"
          />

          <p className="text-black leading-relaxed mb-6">
            Future enhancements could include real-time market data streaming,
            AI-powered investment recommendations, and mobile applications.
          </p>

          <ul className="list-disc list-inside text-black space-y-2">
            <li>Real-time WebSocket updates for market data</li>
            <li>Machine learning for portfolio optimization</li>
            <li>Mobile apps for iOS and Android</li>
            <li>Advanced charting and visualization tools</li>
          </ul>
        </section>
      </div>
    </PageTransition>
  );
}
