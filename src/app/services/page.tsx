"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import PageTransition from "@/app/components/animations/PageTransition";

interface Service {
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  technologies: string[];
  image: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "I build modern, responsive, and scalable web applications tailored to your specific business needs. Whether you need a simple landing page or a complex enterprise solution, I deliver high-quality web experiences that engage users and drive results.",
    detailedDescription:
      "From initial concept to final deployment, I handle every aspect of web development. I specialize in creating fast, SEO-friendly websites using the latest technologies. My approach focuses on clean code, optimal performance, and seamless user experiences across all devices and browsers.",
    features: [
      "Custom web applications built from scratch",
      "E-commerce platforms with payment integration",
      "Progressive Web Apps (PWA) for offline functionality",
      "RESTful API development and third-party integrations",
      "Content Management Systems (CMS) implementation",
      "Database design and optimization",
      "Responsive design for all screen sizes",
      "Performance optimization and speed enhancement",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    image: "/Web Development.jpg",
  },
  {
    title: "App Development",
    description:
      "I create native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android devices. My apps are built with performance, security, and user engagement in mind.",
    detailedDescription:
      "Mobile apps require a unique approach to design and development. I build apps that are intuitive, fast, and reliable. Whether you need a consumer-facing app or an internal business tool, I ensure your app meets the highest standards and provides real value to your users.",
    features: [
      "Native iOS development with Swift",
      "Native Android development with Kotlin",
      "Cross-platform apps using React Native",
      "App Store and Google Play deployment",
      "Push notifications and real-time updates",
      "Offline functionality and data synchronization",
      "In-app purchases and subscription management",
      "Backend API integration and cloud services",
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "Redux"],
    image: "/App-Development.jpg",
  },
  {
    title: "Development Support",
    description:
      "I provide ongoing maintenance, updates, and technical support to keep your applications running smoothly and securely. Your success doesn't end at launch - I'm here to ensure your digital products continue to perform at their best.",
    detailedDescription:
      "Technology evolves rapidly, and your applications need to keep pace. I offer comprehensive support services including bug fixes, feature enhancements, security updates, and performance monitoring. I proactively identify and resolve issues before they impact your users.",
    features: [
      "24/7 monitoring and rapid response support",
      "Regular bug fixes and issue resolution",
      "Performance optimization and speed improvements",
      "Security patches and vulnerability updates",
      "Feature enhancements and new functionality",
      "Database maintenance and optimization",
      "Server management and scaling",
      "Documentation and knowledge transfer",
    ],
    technologies: ["Git", "Docker", "AWS", "Monitoring Tools", "CI/CD"],
    image: "/Development-Support.jpg",
  },
  {
    title: "SEO Optimization",
    description:
      "I improve your online visibility and drive organic traffic with comprehensive SEO strategies and technical optimization. Get found by your target audience and increase your website's ranking on search engines.",
    detailedDescription:
      "SEO is crucial for online success. I implement proven strategies to improve your search engine rankings, increase organic traffic, and boost conversions. My approach combines technical SEO, content optimization, and performance enhancements to deliver measurable results.",
    features: [
      "Comprehensive SEO audits and analysis",
      "Keyword research and competitive analysis",
      "On-page optimization (meta tags, headings, content)",
      "Technical SEO (site speed, mobile-friendliness, schema)",
      "Link building and backlink strategy",
      "Local SEO for location-based businesses",
      "Analytics setup and performance tracking",
      "Monthly reports and ongoing optimization",
    ],
    technologies: ["Google Analytics", "Search Console", "SEO Tools", "Schema Markup"],
    image: "/SEO-Optimization.jpg",
  },
  {
    title: "Logo Designing",
    description:
      "I create memorable brand identities with custom logo designs that capture your business essence and resonate with your target audience. Your logo is the face of your brand - let's make it unforgettable.",
    detailedDescription:
      "A great logo is more than just a pretty image - it's a strategic asset that communicates your brand values and differentiates you from competitors. I work closely with you to understand your vision and create designs that are timeless, versatile, and impactful.",
    features: [
      "Multiple custom logo concepts to choose from",
      "Unlimited revisions until you're satisfied",
      "Complete brand identity guidelines",
      "Multiple file formats (PNG, SVG, PDF, AI)",
      "Color variations (full color, black & white, grayscale)",
      "Social media profile images and favicons",
      "Business card and stationery design",
      "Brand style guide and usage instructions",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Design Systems"],
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
        } items-start gap-8 lg:gap-12`}
      >
        {/* Image Side - Smaller */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? -50 : 50 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-2/5"
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

            {/* Main image card */}
            <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 transition-all duration-500 shadow-lg group-hover:shadow-xl ${service.title === "App Development" ? "bg-white" : ""}`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={`transform group-hover:scale-105 transition-transform duration-500 ${service.title === "App Development" ? "object-contain p-4" : "object-cover"}`}
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Side - More space */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: isEven ? 50 : -50 }
          }
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full lg:w-3/5"
        >
          {/* Title */}
          <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-base text-neutral-600 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Detailed Description */}
          <p className="text-sm text-neutral-500 leading-relaxed mb-6">
            {service.detailedDescription}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-neutral-700 mb-2">Technologies I Use:</h4>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full border border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-700 mb-3">What I Deliver:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                  className="flex items-start gap-2"
                >
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
                  <span className="text-neutral-600 text-sm leading-snug">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
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
                Services{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  I Offer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                These are all the services I can deliver for you. From concept to deployment, 
                I handle every aspect of your digital needs with expertise and dedication.
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
                I&apos;m ready to bring your vision to life with these expert services.
                Let&apos;s discuss your project and make it happen.
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
