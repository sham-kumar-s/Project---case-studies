"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Calendar, Users, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  year?: string;
  teamSize?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  slug,
  description,
  techStack,
  liveUrl,
  githubUrl,
  year = "2024",
  teamSize = "Solo",
  className = "",
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative ${className}`}
    >
      <Link href={`/case-studies/${slug}`}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
        >
          {/* Live Preview Section with iframe */}
          <div className="relative w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {liveUrl && !imageError ? (
              <div className="relative w-full h-full">
                {/* Iframe container with scale effect */}
                <div className="absolute inset-0 transform scale-[0.5] origin-top-left w-[200%] h-[200%]">
                  <iframe
                    src={liveUrl}
                    title={`${title} Preview`}
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                    sandbox="allow-same-origin"
                    onError={() => setImageError(true)}
                  />
                </div>
                
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ) : (
              // Fallback gradient background
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <Code className="w-16 h-16 text-gray-400" />
              </div>
            )}

            {/* Hover overlay with links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="relative z-10 p-6 flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-2xl font-bold text-neutral-900 mb-2 transition-colors duration-300">
              {title}
            </h3>

            {/* Meta info */}
            <div className="flex items-center gap-4 mb-3 text-xs text-neutral-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{teamSize}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-neutral-600 leading-relaxed mb-4 flex-1">
              {description}
            </p>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-neutral-700 uppercase tracking-wide">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 5).map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
                {techStack.length > 5 && (
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                    +{techStack.length - 5} more
                  </span>
                )}
              </div>
            </div>

            {/* View Details Link */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-gray-900 transition-colors">
                  View Case Study
                </span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-5 h-5 text-gray-900 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
