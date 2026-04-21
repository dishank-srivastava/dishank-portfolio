"use client";

import { motion } from "framer-motion";
import { Zap, BarChart2, Users, Clock, FileText } from "lucide-react";

const achievements = [
  {
    icon: <BarChart2 size={24} />,
    stat: "30%",
    label: "Faster Execution",
    desc: "Partnered with CXOs to define a multi-year product roadmap, accelerating cross-departmental execution velocity and aligning engineering, sales, and customer success around shared OKRs.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34, 211, 238, 0.15)",
  },
  {
    icon: <Zap size={24} />,
    stat: "25%",
    label: "More Sales-Qualified Leads",
    desc: "Crafted GTM strategies using TAM/SAM analysis and competitive positioning, driving a significant increase in sales-qualified leads for enterprise IoT and connected vehicle platforms.",
    color: "from-violet-400 to-indigo-500",
    glow: "rgba(139, 92, 246, 0.15)",
  },
  {
    icon: <Users size={24} />,
    stat: "15+",
    label: "Enterprise Customers",
    desc: "Enabled enterprise customers to adopt tailored SaaS solutions through collaborative PoC development, contributing to new revenue streams.",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(52, 211, 153, 0.15)",
  },
  {
    icon: <Clock size={24} />,
    stat: "20%",
    label: "Reduced Time-to-Market",
    desc: "Reduced TTM through UI/UX redesign, iterative UAT cycles, and streamlined sprint planning across 4+ agile squads.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(251, 191, 36, 0.15)",
  },
  {
    icon: <FileText size={24} />,
    stat: "100+",
    label: "HLDs Architected",
    desc: "Architected high-level solution designs for complex enterprise IoT deployments, directly supporting technical solutioning and deal closures.",
    color: "from-pink-400 to-rose-500",
    glow: "rgba(244, 114, 182, 0.15)",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Key <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 hover:border-white/15 transition-all duration-300 group relative overflow-hidden"
              style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
              whileHover={{ boxShadow: `0 8px 40px ${a.glow}` }}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${a.color}`} />

              <div className={`text-transparent bg-gradient-to-r ${a.color} bg-clip-text mb-1`}>
                {a.icon}
              </div>

              <div className={`text-4xl font-black bg-gradient-to-r ${a.color} bg-clip-text text-transparent mb-1 mt-2`}>
                {a.stat}
              </div>
              <div className="text-white font-semibold text-sm mb-3">{a.label}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
