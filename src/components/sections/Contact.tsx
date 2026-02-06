"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, ArrowUpRight, Copy } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [time, setTime] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    const email = personalInfo.socials.find(s => s.label === "Email")?.href.replace("mailto:", "") || "ruturajnawale@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative z-20 bg-[#0a0a0a] min-h-screen flex flex-col justify-between py-32 px-4 md:px-12 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
             <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono uppercase tracking-wider">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               Available for work
             </span>
             <span className="text-neutral-500 text-xs font-mono uppercase tracking-wider">
               Local time: {time} (IST)
             </span>
          </div>
          
          <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9]">
            LET'S WORK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">TOGETHER</span>
          </h2>
        </motion.div>

        {/* Contact Actions */}
        <div className="grid md:grid-cols-2 gap-12 items-end">
           
           {/* Email Magnet */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="group cursor-pointer"
             onClick={handleCopy}
           >
              <div className="text-neutral-400 text-sm font-mono mb-4 uppercase tracking-wider">Drop me a line</div>
              <div className="relative inline-flex items-center gap-4">
                 <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {personalInfo.socials.find(s => s.label === "Email")?.href.replace("mailto:", "") || "email@example.com"}
                 </h3>
                 <div className="p-3 rounded-full bg-white/10 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    {copied ? <span className="text-xs font-bold text-green-400">COPIED!</span> : <Copy size={20} />}
                 </div>
              </div>
              <div className="h-[1px] w-full bg-white/10 mt-4 group-hover:bg-blue-500/50 transition-colors duration-500" />
           </motion.div>

           {/* Social Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex flex-wrap gap-4 md:justify-end"
           >
              {personalInfo.socials.map((social) => {
                 if (social.label === "Email") return null;
                 const Icon = social.icon;
                 return (
                    <a 
                       key={social.label}
                       href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group relative flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                       <Icon size={20} />
                       <span className="font-medium">{social.label}</span>
                       <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                 );
              })}
           </motion.div>
        </div>
      </div>
    </section>
  );
}
