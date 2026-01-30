"use client";

import Link from "next/link";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full py-6 md:py-12 bg-muted/20 border-t border-border/40">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold tracking-tight">
                {personalInfo.name}
            </span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind.
            </p>
        </div>
        
        <div className="flex items-center gap-6">
            {personalInfo.socials.map((social) => {
                const Icon = social.icon;
                return (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={social.label}
                    >
                        <Icon size={20} />
                    </a>
                );
            })}
        </div>
      </div>
    </footer>
  );
}
