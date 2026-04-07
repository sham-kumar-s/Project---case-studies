"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Code, Smartphone, Headphones, Search, Palette } from "lucide-react";
import PageTransition from "@/app/components/animations/PageTransition";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Build modern, responsive, and scalable web applications tailored to your business needs. From landing pages to complex enterprise solutions.",
    features: [
      "Custom web applications",
      "E-commerce platforms",
      "Progressive Web Apps (PWA)",
      "API development & integration",
    ],
    image: "/Web Development.jpg",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Development",
    description:
      "Create native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
    features: [
      "Native iOS & Android apps",
      "Cross-platform solutions",
      "App Store optimization",
      "Backend & API integration",
    ],
    image: "/App-Development.jpg",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Development Support",
    description:
      "Ongoing maintenance, updates, and technical support to keep your applications running smoothly and securely.",
    features: [
      "24/7 technical support",
      "Bug fixes & updates",
      "Performance optimization",
      "Security patches",
    ],
    image: "/Development-Support.jpg",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description:
      "Improve your online visibility and drive organic traffic with comprehensive SEO strategies and technical optimization.",
    features: [
      "Keyword research & strategy",
      "On-page optimization",
      "Technical SEO audits",
      "Performance tracking",
    ],
    image: "/SEO-Optimization.jpg",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Logo Designing",
    description:
      "Create memorable brand identities with custom logo designs that capture your business essence and resonate with your audience.",
    features: [
      "Custom logo concepts",
      "Brand identity guidelines",
      "Multiple format delivery",
      "Unlimited revisions",
    ],
    image: "/Logo-Designing.jpg",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-32"
    >
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-12 lg:gap-16`}
      >
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? -50 : 50 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 w-full"
        >
          <div className="relative group max-w-md mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            {/* Main image card */}
            <div className={`relative aspect-square rounded-3xl overflow-hidden border border-gray-200 transition-all duration-500 shadow-lg group-hover:shadow-2xl ${service.title === "App Development" ? "bg-white" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`transform group-hover:scale-110 transition-transform duration-500 ${service.title === "App Development" ? "object-contain p-4" : "object-cover"}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? 50 : -50 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 w-full"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-lg">
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-4">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
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
                <span className="text-neutral-700 text-base">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-32">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
                  Our Services
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
                What We{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Offer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions to transform your ideas into
                reality. From concept to deployment, we&apos;ve got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help bring your vision to life with
                our expert services.
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
