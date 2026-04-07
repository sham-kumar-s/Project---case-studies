"use client";
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Instagram, Send } from "lucide-react";

const XIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-neutral-900 py-16 px-4 font-inter border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image 
              src="/Logo-sham.jpg" 
              alt="Logo"
              width={40}
              height={40}
              className="rounded-lg object-cover"
            />
            <h3 className="text-3xl font-extrabold text-neutral-900">Sham</h3>
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Innovating for a better tomorrow. We are committed to delivering
            high-quality solutions that empower businesses and individuals.
          </p>
          <div className="flex space-x-5 pt-2">
            <a
              href="https://github.com/sham-kumar-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sham-kumar-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/sham_kumar_s_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://x.com/Shamkumar2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="X (Twitter)"
            >
              <XIcon size={24} />
            </a>
            <a
              href="https://t.me/9361909512"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Telegram"
            >
              <Send size={24} />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-neutral-900">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-neutral-900">Explore</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-500 hover:text-blue-600 transition-colors duration-300"
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-neutral-400 text-sm pt-10 mt-10 border-t border-gray-200">
        <p>
          &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
        </p>
        <p className="mt-1">
          Designed with <span className="text-red-500">&hearts;</span> by Your
          Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
