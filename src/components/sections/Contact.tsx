"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming Textarea component exists, otherwise use textarea

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Connect to email service (e.g., EmailJS or API route)
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! This is a demo layout.");
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border/20">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                        <a href={`mailto:${personalInfo.socials.find(s => s.label === 'Email')?.href.replace('mailto:', '')}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="w-6 h-6" />
                            <span>{personalInfo.socials.find(s => s.label === 'Email')?.href.replace('mailto:', '') || 'email@example.com'}</span>
                        </a>
                        <div className="flex gap-4 mt-6">
                            {personalInfo.socials.map((social) => {
                                if (social.label === "Email") return null;
                                const Icon = social.icon;
                                return (
                                    <a 
                                        key={social.label} 
                                        href={social.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                                        aria-label={social.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input 
                            id="name" 
                            name="name" 
                            placeholder="John Doe" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={4} 
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your message..." 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
