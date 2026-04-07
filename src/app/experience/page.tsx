"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import PageTransition from "@/app/components/animations/PageTransition";

const experiences = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    type: "Full-time",
    description:
      "Leading the development of scalable web applications and mentoring junior developers. Architecting cloud-based solutions and implementing best practices across the development team.",
    achievements: [
      "Architected and deployed 5+ enterprise-level applications serving 100K+ users",
      "Reduced application load time by 60% through optimization techniques",
      "Led a team of 6 developers in agile development environment",
      "Implemented CI/CD pipelines reducing deployment time by 75%",
    ],
    technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker", "TypeScript"],
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Full-Stack Developer",
    location: "New York, NY",
    period: "Mar 2020 - Dec 2021",
    type: "Full-time",
    description:
      "Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications. Collaborated with cross-functional teams to deliver high-quality solutions.",
    achievements: [
      "Built 10+ responsive web applications from scratch",
      "Integrated payment gateways processing $2M+ in transactions",
      "Improved code quality by implementing automated testing (90% coverage)",
      "Mentored 3 junior developers and conducted code reviews",
    ],
    technologies: ["React", "Next.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
  },
  {
    company: "StartUp Ventures",
    position: "Frontend Developer",
    location: "Austin, TX",
    period: "Jun 2019 - Feb 2020",
    type: "Full-time",
    description:
      "Focused on creating intuitive user interfaces and implementing responsive designs. Worked closely with designers to bring mockups to life with pixel-perfect precision.",
    achievements: [
      "Developed responsive UI components used across 15+ projects",
      "Improved mobile user experience resulting in 40% increase in engagement",
      "Collaborated with UX team to redesign company's main product",
      "Reduced bundle size by 50% through code splitting and optimization",
    ],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Git", "Figma"],
  },
  {
    company: "Freelance",
    position: "Web Developer",
    location: "Remote",
    period: "Jan 2018 - May 2019",
    type: "Freelance",
    description:
      "Provided web development services to small businesses and startups. Managed complete project lifecycle from requirements gathering to deployment and maintenance.",
    achievements: [
      "Successfully delivered 20+ projects for clients across various industries",
      "Maintained 100% client satisfaction rate with 5-star reviews",
      "Built custom CMS solutions saving clients 30% in licensing costs",
      "Established long-term relationships with 10+ recurring clients",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "Bootstrap"],
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
      )}

      <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
        {/* Timeline dot */}
        <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block" />

        <div className="md:ml-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                {experience.position}
              </h3>
              <p className="text-lg font-semibold text-blue-600 mb-2">
                {experience.company}
              </p>
            </div>
            <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full border border-blue-200">
              {experience.type}
            </span>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-700 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-lg">
                  <Briefcase className="w-4 h-4 mr-2" />
                  My Experience
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
                Professional{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Journey
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Over 5+ years of experience building innovative solutions and delivering exceptional results
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
