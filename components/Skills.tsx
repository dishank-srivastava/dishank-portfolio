"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Product Management",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 hover:bg-cyan-400/20 border-cyan-400/20",
    skills: [
      "Product Strategy & Vision",
      "Roadmap Planning & Execution",
      "GTM Strategy",
      "Product Discovery",
      "Customer Interviews",
      "A/B Testing",
      "OKRs & KPIs",
      "Feature Prioritization (MoSCoW)",
      "Stakeholder Management",
      "Agile / Scrum",
      "Release Management",
      "Product Lifecycle Management",
      "Competitive Analysis",
      "Pricing Strategy",
    ],
  },
  {
    category: "Business Analysis",
    color: "text-violet-400",
    bg: "bg-violet-400/10 hover:bg-violet-400/20 border-violet-400/20",
    skills: [
      "Requirements Gathering",
      "BRD / PRD / FRD",
      "User Stories & Acceptance Criteria",
      "Process Mapping",
      "Gap Analysis",
      "UAT",
      "Wireframing",
      "UI/UX Conceptualization",
    ],
  },
  {
    category: "Technical",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 hover:bg-emerald-400/20 border-emerald-400/20",
    skills: [
      "REST APIs",
      "Microservices Architecture",
      "HLD / LLD",
      "MVP & PoC Development",
      "Cloud (AWS, Azure, GCP)",
      "OAuth / 2FA",
      "Gen AI Prototyping",
      "CI/CD Pipelines",
      "SQL",
    ],
  },
  {
    category: "Tools",
    color: "text-amber-400",
    bg: "bg-amber-400/10 hover:bg-amber-400/20 border-amber-400/20",
    skills: [
      "Jira",
      "Confluence",
      "Figma",
      "SQL",
      "Microsoft Excel",
      "Pivot Tables",
      "VLOOKUP",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Core <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-wider ${group.color} mb-4`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 + j * 0.03 }}
                    className={`px-3 py-1.5 rounded-full text-xs border ${group.bg} text-slate-300 transition-all duration-200 cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
