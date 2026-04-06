"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Lightbulb, Heart, Rocket } from "lucide-react";
import PageTransition from "@/app/components/animations/PageTransition";

const stats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "100+" },
  { label: "Years Experience", value: "8+" },
  { label: "Team Members", value: "25+" },
];

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mission Driven",
    description:
      "We're committed to delivering exceptional digital solutions that drive real business results and exceed expectations.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Focused",
    description:
      "Your success is our success. We work closely with you to understand your needs and deliver tailored solutions.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality First",
    description:
      "We maintain the highest standards in everything we do, from code quality to customer service.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We stay ahead of the curve, leveraging the latest technologies and best practices to deliver cutting-edge solutions.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion",
    description:
      "We love what we do, and it shows in the quality and care we put into every project.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Growth Mindset",
    description:
      "We're constantly learning and evolving to provide you with the best possible service and solutions.",
  },
];

const team = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "👨‍💼",
    bio: "Visionary leader with 15+ years in tech",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    image: "👩‍💻",
    bio: "Tech expert specializing in scalable systems",
  },
  {
    name: "Michael Chen",
    role: "Lead Designer",
    image: "👨‍🎨",
    bio: "Award-winning UI/UX designer",
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "👩‍💼",
    bio: "Expert in agile methodologies",
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

function TeamMember({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-xl text-center">
        {/* Avatar */}
        <div className="text-7xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {member.image}
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-neutral-900 mb-1">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-blue-600 font-semibold mb-3">{member.role}</p>

        {/* Bio */}
        <p className="text-sm text-neutral-600">{member.bio}</p>
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
                  About Us
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
                Building Digital{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We&apos;re a team of passionate developers, designers, and strategists
                dedicated to creating exceptional digital experiences.
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
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed text-left">
                <p>
                  Founded in 2016, we started with a simple mission: to help
                  businesses thrive in the digital age. What began as a small team
                  of developers has grown into a full-service digital agency with
                  expertise across web development, mobile apps, design, and
                  digital marketing.
                </p>
                <p>
                  Over the years, we&apos;ve had the privilege of working with
                  startups, SMEs, and enterprise clients across various industries.
                  Each project has taught us valuable lessons and helped us refine
                  our approach to delivering exceptional results.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted partner for businesses
                  looking to innovate, scale, and succeed in an increasingly
                  digital world. Our commitment to quality, innovation, and client
                  success remains as strong as ever.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
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
                Our Values
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} value={value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Team
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                The talented people behind our success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
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
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Ready to start your next project? We&apos;d love to hear from you.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Us
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
