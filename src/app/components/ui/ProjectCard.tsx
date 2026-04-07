"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ProjectCard({ children, className = "" }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
