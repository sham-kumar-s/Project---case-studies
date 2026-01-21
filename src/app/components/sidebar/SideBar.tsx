"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { SECTIONS } from "@/app/lib/projects";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extract project slug from URL
  // /case-studies/{project}/{section}
  const segments = pathname.split("/").filter(Boolean);
  const projectSlug = segments[1]; // case-studies/{project}

  const PROJECTS = [
    { name: "AIQ Invest", slug: "aiq-invest" },
    { name: "Room Booking", slug: "room-booking" },
    { name: "Summon.fun", slug: "summon-fun" },
    { name: "Image Search", slug: "image-search" },
  ];

  const currentProject = PROJECTS.find((p) => p.slug === projectSlug);
  const displayName = currentProject
    ? currentProject.name
    : projectSlug?.replace(/-/g, " ");

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );
  }, [projectSlug]);

  // Safety check
  if (!projectSlug) return null;

  const basePath = `/case-studies/${projectSlug}`;

  return (
    <aside
      ref={sidebarRef}
      className="w-72 border-r border-neutral-800 bg-neutral-900 px-6 py-8 flex flex-col"
    >
      <div className="relative mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left group"
        >
          <span className="text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors">
            {displayName}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 py-1 bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl z-50 overflow-hidden">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  project.slug === projectSlug
                    ? "bg-neutral-700/50 text-white font-medium"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-700"
                }`}
              >
                {project.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="h-px bg-neutral-800 mb-6" />

      <nav className="space-y-3">
        {SECTIONS.map((section) => {
          const href =
            section.slug === "" ? basePath : `${basePath}/${section.slug}`;

          const isActive = pathname === href;

          return (
            <Link
              key={section.title}
              href={href}
              className={`block text-sm transition ${
                isActive
                  ? "text-white font-medium"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {section.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
