"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Lightbulb, Heart, Rocket } from "lucide-react";
import PageTransition from "@/app/components/animations/PageTransition";

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Technologies Mastered", value: "20+" },
  { label: "Years Experience", value: "5+" },
  { label: "Client Satisfaction", value: "100%" },
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Fast Execution",
    description:
      "I deliver projects quickly without compromising quality. Time is valuable, and I respect deadlines while maintaining high standards.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Adaptable",
    description:
      "I thrive in any environment - remote, on-site, or hybrid. I quickly adjust to new teams, workflows, and project requirements.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Real-World Experience",
    description:
      "I've worked on production applications serving real users, handling everything from development to deployment and maintenance.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Problem Solver",
    description:
      "I don't just write code - I solve problems. I analyze requirements, propose solutions, and implement them efficiently.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Clean Code",
    description:
      "I write maintainable, well-documented code following best practices. Your codebase will be easy to understand and extend.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Continuous Learner",
    description:
      "Technology evolves rapidly, and so do I. I stay updated with the latest tools, frameworks, and industry best practices.",
  },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
            {value.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-900 mb-3">
            {value.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed">{value.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
          {/* Background decorations */}
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
                  About Me
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
                Full-Stack Developer{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  & Problem Solver
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                I&apos;m a versatile developer with expertise in modern tech stacks, 
                real-world project experience, and the ability to adapt quickly to any environment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed text-left">
                <p>
                  I&apos;m a full-stack developer with a passion for building scalable, 
                  user-friendly applications. My journey in software development has equipped 
                  me with a diverse skill set spanning frontend, backend, mobile development, 
                  and cloud infrastructure.
                </p>
                <p>
                  What sets me apart is my ability to work fast without sacrificing quality. 
                  I understand that in today&apos;s fast-paced environment, speed matters. 
                  I deliver working solutions quickly, iterate based on feedback, and maintain 
                  clean, maintainable code throughout the process.
                </p>
                <p>
                  I&apos;ve worked on real-world projects across various industries - from 
                 ng thousands of transactions to healthcare 
                  applications managing sensitive data. This experience has taught me not 
                  just how to code, but how to build production-ready applications that 
                  scale and perform under real-world conditions.
                </p>
                <p>
                  I&apos;m highly adaptable and thrive in different work environments. Whether 
                  it&apos;s joining an existing team, working indeting 
                  remotely across time zones, I quickly adjust and contribute effectively from day one.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Tech Stack I Work With
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Modern technologies and frameworks I use to build robust applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Frontend</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• React.js & Next.js</li>
                  <li>• TypeScript & JavaScript</li>
                  <li>• Tailwind CSS & CSS3</li>
                  <li>• Redux & State Management</li>
                  <li>• Responsive Design</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Backend</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Node.js & Express</li>
                  <li>• Python & Django/Flask</li>
                  <li>• RESTful APIs & GraphQL</li>
                  <li>• PostgreSQL & MongoDB</li>
                  <li>• Aion & Security</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Mobile</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• React Native</li>
                  <li>• iOS & Android</li>
                  <li>• Cross-platform Development</li>
                  <li>• Mobile UI/UX</li>
                  <li>• App Store Deployment</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">DevOps & Cloud</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• AWS & Azure</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• CI/CD Pipelines</li>
                  <li>• Git & Version Control</li>
                  <li>• Cloud Architecture</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 border border-pink-200"
              >
                <h3 className="text-2xl font-bold text-neut-4">Tools & Others</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Figma & Design Tools</li>
                  <li>• Agile & Scrum</li>
                  <li>• Testing (Jest, Cypress)</li>
                  <li>• SEO & Performance</li>
                  <li>• Analytics & Monitoring</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200"
              >
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Specializations</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Full-Stack Development</li>
                  <li>• API Design & Integration</li>
                  <li>• Database Optimization</li>
                  <li>• Performance Tuning</li>
                  <li>• Code Review & Mentoring</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                What I Bring to the Table
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                The qualities that make me an effective developer and reliable partner
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} value={value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 py-24">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Build Something Great
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                I&apos;m always open to discussing new projects, creative ideas, 
                or opportunities to be part of your vision.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get in Touch
                <svg
                  className="w-5 h-5 ml-2"
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
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
