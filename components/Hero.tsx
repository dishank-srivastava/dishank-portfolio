"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ChevronDown } from "lucide-react";

const roles = [
  "Product Manager",
  "B2B SaaS Specialist",
  "IoT Platform Expert",
  "Connected Vehicles PM",
  "eSIM & Telecom PM",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid opacity-60" />
      {/* Radial glow */}
      <div className="absolute inset-0 hero-radial" />
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/8 text-cyan-400 text-xs font-medium tracking-wider uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" />
          10+ Years in B2B SaaS & IoT
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-white">Dishank </span>
          <span className="gradient-text">Srivastava</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-2xl text-slate-300 font-light">
            {displayed}
            <span className="cursor-blink text-cyan-400">|</span>
          </span>
        </motion.div>

        {/* Contact pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: <Mail size={14} />, label: "dishank.srivastava3@gmail.com", href: "mailto:dishank.srivastava3@gmail.com" },
            { icon: <Phone size={14} />, label: "+91-9818653330", href: "tel:+919818653330" },
            { icon: <MapPin size={14} />, label: "Noida, India", href: "#contact" },
            { icon: <Linkedin size={14} />, label: "LinkedIn", href: "https://linkedin.com/in/dishank-srivastava", target: "_blank" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={(item as { target?: string }).target}
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 text-xs transition-all duration-200"
            >
              <span className="text-cyan-400">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#experience"
            className="px-7 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full glass-card text-slate-300 text-sm font-semibold hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 text-slate-500 hover:text-cyan-400 transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
