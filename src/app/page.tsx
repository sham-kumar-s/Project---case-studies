"use client";

import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/app/lib/projects";
import ProjectCard from "@/app/components/ui/ProjectCard";
import { FlipWords } from "@/app/components/ui/FlipWords";
import TechCard from "@/app/components/ui/TechCard";

interface Technology {
  name: string;
  description: string;
  category: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    name: "Next.js",
    description: "React Framework",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    description: "UI Library",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    description: "Backend Runtime",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    description: "NoSQL Database",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "JavaScript",
    description: "Web Language",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Java",
    description: "Enterprise Language",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "PostgreSQL",
    description: "SQL Database",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
];
export default function Page() {



  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById("our-projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center min-h-screen flex flex-col justify-center">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 border border-gray-200 rounded-2xl p-8 md:p-12 bg-white/50 backdrop-blur-sm">
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
            I love creating
            <br />
            <FlipWords
              words={[
                "amazing experiences",
                "web applications",
                "stunning designs",
              ]}
              className="text-blue-600 dark:text-blue-600"
            />
          </div>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-500 mb-8 max-w-3xl mx-auto">
            A powerful and customizable text animation component with smooth
            transitions
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#our-projects"
              onClick={scrollToProjects}
              className="inline-block px-6 py-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 text-sm md:text-base"
            >
              Explore the Documentation →
            </a>
          </div>
        </div>

        {/* Technology cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16 p-4 md:p-8">
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              description={tech.description}
              category={tech.category}
              icon={tech.icon}
              index={index}
            />
          ))}
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border border-gray-200 rounded-2xl p-8 bg-white/50 backdrop-blur-sm min-h-[50vh] items-center">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-4">⚡</div>
            <h4
              className="text-lg font-semibold mb-2"
              style={{ color: "black" }}
            >
              Lightning Fast
            </h4>
            <p className="text-sm md:text-base" style={{ color: "#363636" }}>
              Optimized for performance and scalability across all platforms
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-4">🔒</div>
            <h4
              className="text-lg font-semibold mb-2"
              style={{ color: "black" }}
            >
              Enterprise Secure
            </h4>
            <p className="text-sm md:text-base" style={{ color: "#363636" }}>
              Industry-leading security standards and best practices
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-4">📈</div>
            <h4
              className="text-lg font-semibold mb-2"
              style={{ color: "black" }}
            >
              Infinitely Scalable
            </h4>
            <p className="text-sm md:text-base" style={{ color: "#363636" }}>
              Grow from startup to enterprise without compromise
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 md:mt-16 text-center pt-8 border-t border-gray-200"></div>
      </div>

      {/* Our Projects Section */}
      <div
        id="our-projects"
        className="relative z-10 w-full max-w-6xl mx-auto mt-32 scroll-mt-20 border border-gray-200 rounded-2xl p-8 md:p-12 bg-white/50 backdrop-blur-sm"
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6" style={{ color: "black" }}>
            Case Studies
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "#363636" }}>
            Deep dives into real-world engineering problems, system design
            decisions, trade-offs, failures, and improvements. Each case study
            documents how a production-grade system is designed and evolved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 max-w-4xl w-full mx-auto">
          {CASE_STUDIES.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="block w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)] aspect-[4/3]"
            >
              <ProjectCard className="h-full w-full">
                <div className="p-6 flex flex-col justify-center h-full">
                  <h2 className="text-xl font-bold mb-2 text-black transition-colors hover:text-blue-600">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed line-clamp-3 text-gray-600">
                    {project.description}
                  </p>
                </div>
              </ProjectCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
