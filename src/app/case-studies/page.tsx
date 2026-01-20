export default function CaseStudiesHome() {
  return (
    <main className="min-h-screen px-10 py-12">
      <h1 className="text-3xl font-bold mb-4">
        Case Studies
      </h1>

      <p className="max-w-2xl text-neutral-400 leading-relaxed">
        Deep dives into real-world engineering problems, system design decisions,
        trade-offs, failures, and improvements. Each case study documents how a
        production-grade system is designed and evolved.
      </p>

      <div className="mt-10">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold mb-2">
            Room-Booking App
          </h2>
          <p className="text-sm text-neutral-400">
            A scalable real-time chat system built using WebSockets, Redis,
            MongoDB, and Node.js.
          </p>
        </div>
      </div>
    </main>
  );
}
