"use client";

import { personalInfo } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-[#0a0a0a] py-8 px-4 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
         </p>

         <button 
           onClick={scrollToTop}
           className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
         >
            Back to Top
            <span className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
               <ArrowUp size={14} />
            </span>
         </button>
      </div>
    </footer>
  );
}
