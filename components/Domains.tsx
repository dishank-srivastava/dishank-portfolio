"use client";

import { motion } from "framer-motion";
import { Cpu, Car, Radio } from "lucide-react";

const domains = [
  {
    icon: <Cpu size={28} />,
    title: "IoT Platforms",
    color: "from-cyan-400 to-teal-400",
    bg: "bg-cyan-400/8",
    border: "border-cyan-400/20",
    glow: "rgba(34,211,238,0.12)",
    items: [
      "Smart Waste Monitoring",
      "Home Automation",
      "Smart Metering",
      "Smart Parking",
      "Smart Agriculture",
      "IIoT",
      "Condition Monitoring",
      "Active & Passive Infrastructure Monitoring",
      "Radio Tower Monitoring",
    ],
  },
  {
    icon: <Car size={28} />,
    title: "Connected Vehicles",
    color: "from-violet-400 to-indigo-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
    glow: "rgba(139,92,246,0.12)",
    items: [
      "eCall / bCall",
      "V2X Communication",
      "Fleet Management",
      "Tracking & Telematics",
      "Wi-Fi Hotspot",
      "Cold-Chain Logistics",
      "Asset Tracking",
      "Battery & Vehicle Health",
      "Mobility Services",
    ],
  },
  {
    icon: <Radio size={28} />,
    title: "Connectivity Platforms",
    color: "from-emerald-400 to-cyan-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
    glow: "rgba(52,211,153,0.12)",
    items: [
      "SIM/eSIM Lifecycle Management",
      "Product Catalog",
      "Service Enablement",
      "Billing & Revenue",
      "eSIM Fleet Manager (SGP.32)",
      "Dashboards & KPI Reporting",
    ],
  },
];

export default function Domains() {
  return (
    <section id="domains" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Domain <span className="gradient-text">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {domains.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ boxShadow: `0 12px 50px ${d.glow}` }}
              className={`glass-card p-6 border ${d.border} transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${d.bg} flex items-center justify-center mb-5`}>
                <span className={`bg-gradient-to-r ${d.color} bg-clip-text text-transparent`}>
                  {d.icon}
                </span>
              </div>

              <h3 className={`text-lg font-bold bg-gradient-to-r ${d.color} bg-clip-text text-transparent mb-4`}>
                {d.title}
              </h3>

              <ul className="space-y-2">
                {d.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${d.color} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
