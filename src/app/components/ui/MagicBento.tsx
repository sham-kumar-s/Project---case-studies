"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { clsx } from "clsx";

interface MagicBentoProps {
  children?: React.ReactNode;
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  glowColor?: string;
  disableAnimations?: boolean;
  className?: string;
}

export default function MagicBento({
  children,
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = true,
  spotlightRadius = 400,
  particleCount = 12,
  glowColor = "132, 0, 255",
  disableAnimations = false,
  className = "",
}: MagicBentoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (disableAnimations || !containerRef.current) return;

    const container = containerRef.current;
    const spotlight = spotlightRef.current;
    const border = borderRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update local variables for spotlight and border
      if (spotlight) {
        gsap.to(spotlight, {
          x: x - spotlightRadius / 2,
          y: y - spotlightRadius / 2,
          duration: 0.2,
          ease: "power2.out",
        });
      }

      if (border) {
        container.style.setProperty("--x", `${x}px`);
        container.style.setProperty("--y", `${y}px`);
      }
    };

    // Use window listener for the border glow to allow adjacent boxes to glow simultaneously
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enableSpotlight, enableBorderGlow, spotlightRadius, disableAnimations]);

  // Particles logic - only show when hovered
  useEffect(() => {
    if (!enableStars || !particlesRef.current || disableAnimations) return;

    const particlesContainer = particlesRef.current;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "absolute w-1 h-1 rounded-full bg-white opacity-0";
      particlesContainer.appendChild(p);
      particles.push(p);

      gsap.set(p, {
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        scale: Math.random() * 0.5 + 0.5,
      });
    }

    const animateParticles = () => {
      particles.forEach((p) => {
        gsap.to(p, {
          opacity: isHovered ? Math.random() * 0.6 + 0.3 : 0,
          x: `+=${(Math.random() - 0.5) * 30}`,
          y: `+=${(Math.random() - 0.5) * 30}`,
          duration: 1.5 + Math.random() * 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    };

    animateParticles();

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, [enableStars, particleCount, isHovered, disableAnimations]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "relative group overflow-hidden rounded-[40px] border border-gray-100 bg-white transition-all duration-500 shadow-sm",
        enableBorderGlow && "hover:border-transparent",
        className
      )}
    >
      {/* Border Glow Layer - Always active but visible via mask/gradient */}
      {enableBorderGlow && (
        <div
          ref={borderRef}
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[40px]"
          style={{
            background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(${glowColor}, 1) 0%, transparent 50%)`,
            padding: "6px", // Much thicker border
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          } as React.CSSProperties}
        />
      )}

      {/* Spotlight Layer */}
      {enableSpotlight && (
        <div
          ref={spotlightRef}
          className="absolute z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
          style={{
            width: spotlightRadius,
            height: spotlightRadius,
            background: `radial-gradient(circle, rgba(${glowColor}, 0.15) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Stars/Particles Layer */}
      <div ref={particlesRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full flex items-center justify-center text-center p-6 pointer-events-auto">
        {children}
      </div>

      {/* Subtle Inner Shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[40px] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

