"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
