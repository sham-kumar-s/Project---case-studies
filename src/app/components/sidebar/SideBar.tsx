"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const sections = [
  { label: "Overview", href: "/case-studies/room-booking" },
  { label: "Problem", href: "/case-studies/room-booking/problem" },
  { label: "Architecture", href: "/case-studies/room-booking/architecture" },
  { label: "Data Model", href: "/case-studies/room-booking/data-model" },
  { label: "APIs", href: "/case-studies/room-booking/apis" },
  { label: "Scaling", href: "/case-studies/room-booking/scaling" },
  { label: "Security", href: "/case-studies/room-booking/security" },
  { label: "Failures", href: "/case-studies/room-booking/failures" },
  { label: "Improvements", href: "/case-studies/room-booking/improvements" },
];

export default function Sidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="w-72 border-r border-neutral-800 bg-neutral-900 px-6 py-8"
    >
      <h2 className="text-lg font-semibold mb-6">
        Room Booking Case Study
      </h2>

      <nav className="space-y-3">
        {sections.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block text-sm text-neutral-400 hover:text-white transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
