import Link from "next/link";
import { CASE_STUDIES } from "@/app/lib/projects";
import MagicBento from "@/app/components/ui/MagicBento";

export default function CaseStudiesHome() {
  return (
    <main className="min-h-screen px-10 py-12 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-linear-to-r from-white to-neutral-500 bg-clip-text text-transparent">
          Case Studies
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-neutral-400 leading-relaxed">
          Deep dives into real-world engineering problems, system design decisions,
          trade-offs, failures, and improvements. Each case study documents how a
          production-grade system is designed and evolved.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl w-full">
        {CASE_STUDIES.map((project) => (
          <Link
            key={project.slug}
            href={`/case-studies/${project.slug}`}
            className="block w-[250px] h-[250px]"
          >
            <MagicBento
              textAutoHide={true}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={12}
              glowColor="132, 0, 255"
              disableAnimations={false}
              className="h-full w-full"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </MagicBento>
          </Link>
        ))}
      </div>
    </main>
  );
}
