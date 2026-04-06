"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TechCardProps {
  name: string;
  description: string;
  category: string;
  icon: string;
  index: number;
}

export default function TechCard({ name, description, category, icon, index }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full rounded-3xl p-6 sm:p-8 bg-transparent shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[200px] sm:min-h-[240px] flex flex-col items-center justify-between"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-pink-200/20 blur-2xl -z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full">
        {/* Icon with 3D effect */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-3xl p-3 sm:p-4 shadow-2xl mb-4 sm:mb-6"
        //   style={{
        //     backgroundColor: color,
        //     boxShadow: `0 20px 50px ${color}66, 0 0 0 1px rgba(255, 255, 255, 0.2) inset`
        //   }}
        >
          <img 
            src={icon} 
            alt={`${name} logo`}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">
          {name}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 text-center">
          {description}
        </p>
      </div>

      {/* Tag with icon */}
      <div className="relative z-10 mt-4 w-full flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm">
          {/* Code icon */}
          <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold text-blue-600">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
