import PageTransition from "@/app/components/animations/PageTransition";

export default function AIQOverview() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">
          AIQ Capital – Investment Analytics Platform
        </h1>

        <p className="text-neutral-300 leading-relaxed mb-6">
          AIQ Capital is a data-driven investment analytics platform designed to
          provide users with insights, performance metrics, and decision support
          for modern financial markets. The system focuses on data accuracy,
          visualization, and secure access to financial intelligence.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>Frontend: React / Next.js</li>
              <li>Backend: Node.js</li>
              <li>Database: PostgreSQL</li>
              <li>Analytics: Custom data pipelines</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
            <h3 className="font-semibold mb-2">Key Focus Areas</h3>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>Financial data modeling</li>
              <li>Secure access control</li>
              <li>High-performance dashboards</li>
              <li>Scalable analytics</li>
            </ul>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
