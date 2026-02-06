"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Research from "@/components/sections/Research";
import dynamic from "next/dynamic";

// Disable SSR for Skills component because it uses React Three Fiber
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
       <Research /> 
      {/* <Insights /> */}
      <Contact />
      <Footer />
    </main>
  );
}
