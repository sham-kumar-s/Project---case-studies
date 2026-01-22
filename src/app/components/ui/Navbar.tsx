"use client";

import { cn } from "@/app/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

// ------------------------------------------------------------------
// 1. Main Navbar Container (Sticky, White Background)
// ------------------------------------------------------------------
export const Navbar = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <nav
      className={cn(
        "sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-md border-b border-gray-200", 
        className
      )}
    >
      {children}
    </nav>
  );
};

// ------------------------------------------------------------------
// 2. NavBody (Inner Container with max-width)
// ------------------------------------------------------------------
export const NavBody = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

// ------------------------------------------------------------------
// 3. NavItems (Desktop Links)
// ------------------------------------------------------------------
export const NavItems = ({ 
  items, 
  className, 
  onItemClick 
}: { 
  items: { name: string; link: string }[]; 
  className?: string; 
  onItemClick?: () => void 
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden lg:flex flex-row items-center justify-center space-x-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered-desktop"
              className="absolute inset-0 h-full w-full rounded-md bg-gray-100"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

// ------------------------------------------------------------------
// 4. MobileNav (Mobile Menu Wrapper)
// ------------------------------------------------------------------
export const MobileNav = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <div className={cn("lg:hidden", className)}>
      {children}
    </div>
  );
};

// ------------------------------------------------------------------
// 5. MobileNavToggle (Hamburger Button)
// ------------------------------------------------------------------
export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button 
      onClick={onClick}
      className="p-2 text-neutral-600 hover:bg-gray-100 rounded-md transition-colors"
      aria-label="Toggle Menu"
    >
      {isOpen ? (
        <X className="w-5 h-5" />
      ) : (
        <Menu className="w-5 h-5" />
      )}
    </button>
  );
};

// ------------------------------------------------------------------
// 6. MobileNavMenu (Dropdown Content)
// ------------------------------------------------------------------
export const MobileNavMenu = ({
  children,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={cn(
            "border-t border-gray-200 bg-white shadow-lg overflow-hidden",
            className
          )}
        >
          <div className="flex flex-col p-4 space-y-1">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ------------------------------------------------------------------
// 7. NavbarLogo
// ------------------------------------------------------------------
export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 text-neutral-900 hover:opacity-80 transition-opacity"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white font-bold">
        S
      </div>
      <span className="text-lg font-bold">SeraUI</span>
    </Link>
  );
};

// ------------------------------------------------------------------
// Main Component Export
// ------------------------------------------------------------------
export default function AppNavbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/#our-projects" },
    { name: "Services", link: "#" },
    { name: "About", link: "#" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      <NavBody>
        <div className="flex items-center gap-8">
          <NavbarLogo />
          {/* Desktop Nav Items */}
          <NavItems items={navItems} />
        </div>

        {/* Right Side: Contact Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="#contact" 
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Contact Us
          </Link>

          {/* Mobile Toggle */}
          <MobileNav>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNav>
        </div>
      </NavBody>

      {/* Mobile Menu Content (Appears below the bar) */}
      <div className="lg:hidden block absolute w-full">
         <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-neutral-600 hover:bg-gray-50 hover:text-neutral-900 rounded-lg transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 mt-2 border-t border-gray-100">
             <Link 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 text-sm font-bold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </MobileNavMenu>
      </div>
    </Navbar>
  );
}
