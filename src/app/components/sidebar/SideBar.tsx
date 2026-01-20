"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { SECTIONS } from "@/app/lib/projects";

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Extract project slug from URL
  // /case-studies/{project}/{section}
  const segments = pathname.split("/").filter(Boolean);
  const projectSlug = segments[1]; // case-studies/{project}

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
      className="w-72 border-r border-neutral-800 bg-neutral-900 px-6 py-8"
    >
      <h2 className="text-lg font-semibold mb-6 capitalize">
        {projectSlug.replace(/-/g, " ")}
      </h2>

      <nav className="space-y-3">
        {SECTIONS.map((section) => {
          const href =
            section.slug === ""
              ? basePath
              : `${basePath}/${section.slug}`;

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
