"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Cloud, Palette, Wrench, Zap } from "lucide-react";
import PageTransition from "@/app/components/animations/PageTransition";

const skillCategories = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 & CSS3", level: 98 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux & State Management", level: 85 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "Django/Flask", level: 78 },
      { name: "RESTful APIs", level: 92 },
      { name: "GraphQL", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 88 },
    ],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 85 },
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 88 },
      { name: "Nginx", level: 80 },
      { name: "Linux/Unix", level: 85 },
      { name: "Git & Version Control", level: 95 },
      { name: "Azure", level: 70 },
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Mobile Development",
    skills: [
      { name: "React Native", level: 88 },
      { name: "iOS Development", level: 75 },
      { name: "Android Development", level: 75 },
      { name: "Mobile UI/UX", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "App Store Deployment", level: 80 },
    ],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design & UI/UX",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe Photoshop", level: 78 },
      { name: "Adobe Illustrator", level: 75 },
      { name: "UI/UX Principles", level: 88 },
      { name: "Wireframing", level: 82 },
      { name: "Prototyping", level: 80 },
    ],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Tools & Others",
    skills: [
      { name: "Agile/Scrum", level: 90 },
      { name: "Jest & Testing", level: 85 },
      { name: "Webpack/Vite", level: 80 },
      { name: "SEO Optimization", level: 88 },
      { name: "Performance Optimization", level: 90 },
      { name: "Security Best Practices", level: 85 },
    ],
  },
];

function SkillBar({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
        <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </div>
    </motion.div>
  );
}

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      {/* Icon & Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          {category.icon}
        </div>
        <h3 className="text-2xl font-bold text-neutral-900">{category.title}</h3>
      </div>

      {/* Skills */}
      <div>
        {category.skills.map((skill, idx) => (
          <SkillBar key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
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
                  My Skills
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
                Technical{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive overview of my technical skills and proficiency levels across various technologies
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <SkillCategory key={index} category={category} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Continuous Learning
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                I believe in continuous improvement and staying updated with the latest technologies. 
                These skill levels represent my current proficiency, and I&apos;m always learning and 
                expanding my expertise to deliver the best solutions for every project.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
