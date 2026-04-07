"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentProject = CASE_STUDIES.find((p) => p.slug === projectSlug);

  return (
    <div className="min-h-screen bg-white">
      {/* Project Header Section */}
      {currentProject && (
        <div className="w-full border-b border-gray-200 bg-white px-4 sm:px-10 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              {currentProject.title}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 mb-6 max-w-3xl">
              {currentProject.description}
            </p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2">
              {currentProject.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 bg-gray-100 text-neutral-700 text-xs sm:text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar and Content Section */}
      <div className="flex relative">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed md:sticky top-16 left-0 h-[calc(100vh-4rem)] z-40
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-10 py-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
