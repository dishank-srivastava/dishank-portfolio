"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Product Manager",
    company: "Airlinq Technology Pvt. Ltd.",
    location: "Jaipur, India",
    period: "Feb 2020 – Present",
    badge: "Current",
    summary:
      "Promoted to lead product strategy for the company's flagship IoT and connected vehicle SaaS platforms serving enterprise telecom operators globally.",
    bullets: [
      "Defined and maintained the product roadmap in partnership with CXOs, translating business objectives into quarterly OKRs and sprint-level epics, improving cross-departmental execution by 30%.",
      "Led a cross-functional team of 20+ (engineering, design, QA) through agile ceremonies, optimizing backlog grooming, sprint velocity, and on-time feature delivery to 95%+.",
      "Designed and executed GTM strategies using TAM/SAM sizing, competitive analysis, and buyer persona mapping, resulting in a 25% increase in sales-qualified leads.",
      "Conducted product discovery through customer interviews, usage analytics, and A/B testing insights to drive data-backed feature prioritization.",
      "Created 100+ HLDs, PRDs, and user stories for complex enterprise features including eSIM lifecycle management, fleet telematics, and IoT connectivity platforms.",
      "Defined product KPIs (adoption, retention, NPS, feature usage) and built dashboards to monitor product health.",
    ],
  },
  {
    role: "Associate Product Manager",
    company: "Airlinq Technology Pvt. Ltd.",
    location: "Jaipur, India",
    period: "May 2016 – Feb 2020",
    badge: null,
    summary:
      "Owned end-to-end feature delivery for SaaS products, managing the full product lifecycle from discovery to launch across multiple IoT verticals.",
    bullets: [
      "Managed product backlog and authored 300+ user stories with clear acceptance criteria, enabling streamlined sprint execution and reducing rework by 20%.",
      "Led end-to-end feature delivery across cross-functional teams, consistently hitting 95% on-time delivery while mentoring 3 junior product team members.",
      "Enabled 15+ enterprise customers to adopt tailored SaaS solutions through hands-on PoC development and feedback-driven iteration.",
      "Improved product usability and adoption by conducting UAT sessions, synthesizing user feedback, and implementing UI/UX enhancements that reduced TTM by 20%.",
      "Collaborated with sales and customer success teams to identify upsell opportunities and translate customer pain points into product requirements.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Airlinq Technology Pvt. Ltd.",
    location: "Jaipur, India",
    period: "Jun 2015 – May 2016",
    badge: null,
    summary:
      "Started as an engineer and transitioned into a client-facing role, bridging the gap between technical capabilities and customer requirements.",
    bullets: [
      "Facilitated client requirement workshops and prepared response documentation for 100+ RFPs/RFIs, directly supporting the sales pipeline with technically accurate proposals.",
      "Conducted market and competitive analysis, identifying 10 new market opportunities that informed product development priorities and strategic initiatives.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Career
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden md:flex w-12 h-12 rounded-full bg-[#050b18] border-2 border-cyan-400/50 items-center justify-center text-cyan-400 glow-cyan">
                  <Briefcase size={18} />
                </div>

                <div className="glass-card p-6 hover:border-cyan-400/20 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        {exp.badge && (
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-cyan-400/15 text-cyan-400 border border-cyan-400/30">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-xs text-slate-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/8">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm italic mb-4 leading-relaxed border-l-2 border-cyan-400/30 pl-3">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                        <ChevronRight size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
