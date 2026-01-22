"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/app/components/sidebar/SideBar";
import { CASE_STUDIES } from "@/app/lib/projects";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const projectSlug = segments[1];

  const currentProject = CASE_STUDIES.find((p) => p.slug === projectSlug);

  return (
    <div className="min-h-screen bg-white">
      {/* Project Header Section */}
      {currentProject && (
        <div className="w-full border-b border-gray-200 bg-white px-10 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {currentProject.title}
            </h1>
            <p className="text-lg text-neutral-600 mb-6 max-w-3xl">
              {currentProject.description}
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {currentProject.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-gray-100 text-neutral-700 text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar and Content Section */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 px-10 py-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
