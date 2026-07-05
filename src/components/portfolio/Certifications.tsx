import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Reveal } from "./Section";
import { FiAward, FiChevronDown, FiExternalLink } from "react-icons/fi";

const certs = [
  { title: "Cybersecurity Fundamentals", org: "Online Platform", date: "2024", detail: "Core concepts of confidentiality, integrity, availability, threat models, and defensive controls." },
  { title: "Python for Data Science", org: "Online Platform", date: "2024", detail: "Data manipulation, visualization, and applied ML workflows with the Python data stack." },
  { title: "Networking Essentials", org: "Online Platform", date: "2024", detail: "TCP/IP stack, routing, switching, and packet analysis with Wireshark." },
  { title: "Linux Fundamentals", org: "Online Platform", date: "2024", detail: "Shell, file systems, permissions, and administration on Debian-based distributions." },
  { title: "Machine Learning Basics", org: "Online Platform", date: "2024", detail: "Supervised and unsupervised learning, model evaluation, and feature engineering." },
];

export function Certifications() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="certifications" eyebrow="06 — Credentials" title="Certifications">
      <div className="mx-auto max-w-3xl space-y-3">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <div className="glass overflow-hidden rounded-2xl transition-all hover:border-[#00D9FF]/40">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#8B5CF6]/20 text-[#00D9FF]">
                  <FiAward />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold text-white">{c.title}</div>
                  <div className="truncate text-xs text-[#94A3B8]">{c.org} · {c.date}</div>
                </div>
                <FiChevronDown className={`shrink-0 text-[#94A3B8] transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm text-[#94A3B8]">
                      {c.detail}
                      <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-[#00D9FF] hover:underline">
                        View credential <FiExternalLink />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
