'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/app/lib/projects';
import MagicBento from '@/app/components/ui/MagicBento';

interface Technology {
  name: string;
  description: string;
  color: string;
  gradient: string;
}

const technologies: Technology[] = [
  { 
    name: 'Next.js', 
    description: 'React Framework', 
    color: '#000000',
    gradient: 'from-gray-600 to-gray-900'
  },
  { 
    name: 'React', 
    description: 'UI Library', 
    color: '#61DAFB',
    gradient: 'from-blue-400 to-cyan-600'
  },
  { 
    name: 'Node.js', 
    description: 'Backend Runtime', 
    color: '#68A063',
    gradient: 'from-green-400 to-emerald-600'
  },
  { 
    name: 'MongoDB', 
    description: 'NoSQL Database', 
    color: '#13AA52',
    gradient: 'from-green-500 to-teal-700'
  },
  { 
    name: 'TypeScript', 
    description: 'Typed JavaScript', 
    color: '#3178C6',
    gradient: 'from-blue-500 to-indigo-700'
  },
  { 
    name: 'Java', 
    description: 'Enterprise Language', 
    color: '#ED8936',
    gradient: 'from-orange-400 to-red-600'
  },
  { 
    name: 'PostgreSQL', 
    description: 'SQL Database', 
    color: '#336791',
    gradient: 'from-blue-600 to-blue-900'
  }
];

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('our-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Modern Tech Stack
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Build powerful applications with cutting-edge technologies and scalable architecture
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-gray-500 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Technology cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-600 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.05}s backwards`
              }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-15 rounded-xl transition-opacity duration-300 blur-xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${tech.color}40, ${tech.color}20)`
                }}
              />

              {/* Icon/Color indicator */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.gradient} mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                {tech.name.charAt(0)}
              </div>

              {/* Content */}
              <div className="relative z-10 text-left">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </div>

              {/* Border animation */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/30 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-gray-800">
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-4">⚡</div>
            <h4 className="text-lg font-semibold text-white mb-2">Lightning Fast</h4>
            <p className="text-gray-400 text-sm md:text-base">Optimized for performance and scalability across all platforms</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-4">🔒</div>
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise Secure</h4>
            <p className="text-gray-400 text-sm md:text-base">Industry-leading security standards and best practices</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl mb-4">📈</div>
            <h4 className="text-lg font-semibold text-white mb-2">Infinitely Scalable</h4>
            <p className="text-gray-400 text-sm md:text-base">Grow from startup to enterprise without compromise</p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 md:mt-16 text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 text-sm md:text-base">Ready to build something amazing?</p>
          <a
            href="#our-projects"
            onClick={scrollToProjects}
            className="inline-block px-6 py-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 text-sm md:text-base"
          >
            Explore the Documentation →
          </a>
        </div>
      </div>

      {/* Our Projects Section */}
      <div id="our-projects" className="relative z-10 w-full max-w-6xl mx-auto mt-32 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-400 leading-relaxed">
            Deep dives into real-world engineering problems, system design decisions,
            trade-offs, failures, and improvements. Each case study documents how a
            production-grade system is designed and evolved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 max-w-4xl w-full mx-auto">
          {CASE_STUDIES.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="block w-[250px] h-[250px]"
            >
              <MagicBento
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={false}
                clickEffect
                spotlightRadius={400}
                particleCount={12}
                glowColor="132, 0, 255"
                disableAnimations={false}
                className="h-full w-full"
              >
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </MagicBento>
            </Link>
          ))}
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
