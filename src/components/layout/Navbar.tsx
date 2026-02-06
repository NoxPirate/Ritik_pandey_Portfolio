"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none",
          scrolled ? "pt-4" : "pt-6"
        )}
      >
        <motion.div
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           className={cn(
             "pointer-events-auto relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 mx-4",
             scrolled 
               ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-lg w-[90vw] md:w-auto md:min-w-[500px]" 
               : "bg-transparent border-transparent w-full md:w-auto max-w-7xl"
           )}
        >
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tighter text-white mr-8"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            RN.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:block ml-8">
             <a 
               href="#contact"
               onClick={(e) => handleScrollToSection(e, "#contact")}
               className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
             >
               Let's Talk
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white bg-white/10 rounded-full focus:outline-none backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-4 right-4 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
               <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors pt-4 border-t border-white/10"
                >
                  Let's Talk
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
