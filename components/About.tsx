"use client";

import { motion } from "framer-motion";
import { Target, Cpu, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: <Target size={22} />,
    title: "Strategy-First PM",
    desc: "Translates ambiguous enterprise requirements into shipped products — from first customer interview through GTM launch.",
  },
  {
    icon: <Cpu size={22} />,
    title: "Deep Technical Fluency",
    desc: "Engineers-turned-PM who bridges technical teams and commercial stakeholders with 100+ HLDs architected.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Business Acumen",
    desc: "Drives GTM strategies using TAM/SAM analysis, competitive positioning, and OKR-driven execution.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional <span className="gradient-text">Summary</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Product Manager with <span className="text-cyan-400 font-semibold">10+ years</span> in B2B SaaS,
            specializing in <span className="text-white font-medium">IoT platforms</span>,{" "}
            <span className="text-white font-medium">connected vehicle ecosystems</span>, and{" "}
            <span className="text-white font-medium">eSIM/telecom connectivity</span>. Combines deep technical
            fluency with business acumen to bridge engineering and commercial teams. Currently seeking{" "}
            <span className="text-cyan-400 font-medium">PM, Senior Business Analyst, or IoT Consultant</span> roles
            where domain depth in connected devices and platform thinking drive outsized impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-cyan-400/25 hover:glow-cyan transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-400/20 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
