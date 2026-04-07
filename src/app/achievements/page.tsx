"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Target, Zap, Medal } from "lucide-react";
import PageTransition from "@/app/components/animations/PageTransition";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Best Developer Award 2023",
    organization: "Tech Innovations Inc.",
    date: "December 2023",
    description:
      "Recognized as the top performer for exceptional contributions to multiple high-impact projects and outstanding code quality.",
    highlights: [
      "Led 5 major projects to successful completion",
      "Achieved 98% client satisfaction rate",
      "Mentored 6 junior developers",
    ],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Hackathon Winner - FinTech Challenge",
    organization: "Global Tech Summit",
    date: "August 2023",
    description:
      "First place winner in a 48-hour hackathon with 200+ participants. Built an innovative payment solution using blockchain technology.",
    highlights: [
      "Competed against 50+ teams",
      "Developed working prototype in 48 hours",
      "Won $10,000 prize and mentorship opportunity",
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "June 2023",
    description:
      "Successfully passed the AWS Solutions Architect - Professional certification, demonstrating expertise in designing distributed systems on AWS.",
    highlights: [
      "Professional level certification",
      "Scored 920/1000",
      "Valid through June 2026",
    ],
  },
  {
    icon: <Medal className="w-8 h-8" />,
    title: "Open Source Contributor of the Year",
    organization: "GitHub Community",
    date: "March 2023",
    description:
      "Recognized for significant contributions to open-source projects with over 500 commits and 50+ pull requests merged.",
    highlights: [
      "Contributed to 15+ major open-source projects",
      "500+ commits across various repositories",
      "Maintained 3 popular npm packages",
    ],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Project Excellence Award",
    organization: "Digital Solutions Ltd.",
    date: "November 2022",
    description:
      "Awarded for delivering a complex e-commerce platform 2 weeks ahead of schedule while exceeding all quality metrics.",
    highlights: [
      "Delivered project 2 weeks early",
      "Zero critical bugs in production",
      "Achieved 99.9% uptime in first 6 months",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Innovation Champion",
    organization: "Tech Innovations Inc.",
    date: "July 2022",
    description:
      "Recognized for introducing innovative solutions that improved team productivity by 40% and reduced deployment time by 60%.",
    highlights: [
      "Implemented automated testing framework",
      "Reduced deployment time from 2 hours to 30 minutes",
      "Improved team productivity by 40%",
    ],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Google Cloud Professional Certification",
    organization: "Google Cloud",
    date: "April 2022",
    description:
      "Earned Google Cloud Professional Cloud Architect certification, demonstrating ability to design and manage robust cloud solutions.",
    highlights: [
      "Professional level certification",
      "Comprehensive cloud architecture knowledge",
      "Valid through April 2024",
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Client Appreciation Award",
    organization: "Multiple Clients",
    date: "December 2021",
    description:
      "Received outstanding feedback from 10+ clients for exceptional service, timely delivery, and going above and beyond expectations.",
    highlights: [
      "100% client satisfaction rate",
      "10+ five-star reviews",
      "Multiple clients became long-term partners",
    ],
  },
];

const stats = [
  { label: "Awards Won", value: "15+" },
  { label: "Certifications", value: "8+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Client Satisfaction", value: "100%" },
];

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl group"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
        {achievement.icon}
      </div>

      {/* Title & Organization */}
      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
        {achievement.title}
      </h3>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <p className="text-blue-600 font-semibold">{achievement.organization}</p>
        <span className="text-neutral-400">•</span>
        <p className="text-neutral-500 text-sm">{achievement.date}</p>
      </div>

      {/* Description */}
      <p className="text-neutral-600 leading-relaxed mb-6">
        {achievement.description}
      </p>

      {/* Highlights */}
      <div>
        <h4 className="text-sm font-semibold text-neutral-700 mb-3">Key Highlights:</h4>
        <ul className="space-y-2">
          {achievement.highlights.map((highlight, idx) => (
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
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function AchievementsPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

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
                  <Trophy className="w-4 h-4 mr-2" />
                  My Achievements
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
                Awards &{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Recognition
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Celebrating milestones, certifications, and recognition earned throughout my professional journey
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

        {/* Achievements Grid */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Let&apos;s Create Success Together
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                These achievements represent my commitment to excellence and continuous growth. 
                I&apos;m excited to bring this same dedication to your next project.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start a Project
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
