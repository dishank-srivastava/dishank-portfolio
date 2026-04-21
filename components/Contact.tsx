"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "dishank.srivastava3@gmail.com",
    href: "mailto:dishank.srivastava3@gmail.com",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91-9818653330",
    href: "tel:+919818653330",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Noida, India",
    href: "https://maps.google.com/?q=Noida,India",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/dishanks/",
    target: "_blank",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Bottom glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3 block">
            Let&apos;s Talk
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Open to PM, Senior Business Analyst, and IoT Consultant roles. Let&apos;s connect and explore how
            domain depth in connected devices can drive outsized impact at your company.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={(item as { target?: string }).target}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 flex items-center gap-4 hover:border-cyan-400/30 hover:glow-cyan transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                <div className="text-slate-200 text-sm font-medium group-hover:text-cyan-400 transition-colors">
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="mailto:dishank.srivastava3@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            <Send size={16} />
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
