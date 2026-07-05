import { Section, Reveal } from "./Section";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiShield, FiCpu, FiTool } from "react-icons/fi";

const categories = [
  {
    icon: FiCode,
    title: "Programming",
    skills: [
      { name: "Python", level: 88 },
      { name: "C", level: 78 },
      { name: "C++", level: 75 },
    ],
  },
  {
    icon: FiShield,
    title: "Cybersecurity",
    skills: [
      { name: "Linux", level: 82 },
      { name: "Kali Linux", level: 75 },
      { name: "Networking", level: 78 },
      { name: "Wireshark", level: 72 },
      { name: "Pen-testing Fundamentals", level: 68 },
    ],
  },
  {
    icon: FiCpu,
    title: "AI & Data",
    skills: [
      { name: "Machine Learning", level: 78 },
      { name: "OpenCV", level: 80 },
      { name: "Data Analysis", level: 74 },
    ],
  },
  {
    icon: FiTool,
    title: "Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "MATLAB", level: 70 },
    ],
  },
];

function Bar({ name, level }: { name: string; level: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref}>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-white">{name}</span>
        <span className="font-mono text-[#00D9FF]">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6]"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="05 — Toolbox" title="Skills & Stack">
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-6 transition-all hover:border-[#00D9FF]/40">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#8B5CF6]/20 text-[#00D9FF]">
                  <cat.icon />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <Bar key={s.name} {...s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
