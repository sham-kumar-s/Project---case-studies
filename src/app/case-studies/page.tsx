import Link from "next/link";
import { CASE_STUDIES } from "@/app/lib/projects";

export default function CaseStudiesHome() {
  return (
    <main className="min-h-screen px-10 py-12">
      <h1 className="text-3xl font-bold mb-4">Case Studies</h1>

      <p className="max-w-2xl text-neutral-400 leading-relaxed mb-10">
        Deep dives into real-world engineering problems, system design decisions,
        trade-offs, failures, and improvements. Each case study documents how a
        production-grade system is designed and evolved.
      </p>

      <div className="space-y-6 max-w-4xl">
        {CASE_STUDIES.map((project) => (
          <Link
            key={project.slug}
            href={`/case-studies/${project.slug}`}
            className="block rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-600 transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-400">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
