"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Executive MBA",
    field: "Marketing Management",
    institution: "Delhi Technological University (DTU)",
    location: "New Delhi",
    period: "2019 – 2021",
    color: "from-amber-400 to-orange-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
  },
  {
    degree: "B.Tech",
    field: "Electronics & Communications",
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "India",
    period: "2011 – 2015",
    color: "from-cyan-400 to-blue-400",
    bg: "bg-cyan-400/8",
    border: "border-cyan-400/20",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card border ${e.border} p-7 relative overflow-hidden group hover:border-opacity-40 transition-all duration-300`}
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${e.color}`} />

              <div className={`w-12 h-12 rounded-xl ${e.bg} flex items-center justify-center mb-5`}>
                <GraduationCap
                  size={22}
                  className={`bg-gradient-to-r ${e.color} bg-clip-text text-transparent`}
                  style={{ color: "transparent", stroke: "url(#grad)" }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={i === 0 ? "#fbbf24" : "#22d3ee"} />
                      <stop offset="100%" stopColor={i === 0 ? "#f97316" : "#3b82f6"} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${e.color} bg-clip-text text-transparent mb-1`}>
                {e.degree}
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{e.field}</h3>
              <p className="text-slate-400 text-sm">{e.institution}</p>
              <p className="text-slate-500 text-xs mt-0.5">{e.location}</p>

              <div className="mt-4 pt-4 border-t border-white/6">
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/8">
                  {e.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
