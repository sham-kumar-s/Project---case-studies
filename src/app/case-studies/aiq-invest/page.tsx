"use client";

import PageTransition from "@/app/components/animations/PageTransition";

export default function ChatAppOverview() {
  return (
    <PageTransition>
      <section className="max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">
          Room Booking Application
        </h1>

        <p className="text-neutral-300 leading-relaxed mb-8">
          This case study documents the design and implementation of a
          production-grade room booking system. The focus is on scalability,
          low-latency messaging, system design decisions, and real-world trade-offs.
        </p>

        <div className="grid grid-cols-2 gap-6">
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
    </PageTransition>
  );
}
