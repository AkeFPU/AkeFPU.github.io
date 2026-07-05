import { Section, Reveal } from "./Section";
import { FiBriefcase, FiBookOpen, FiUsers, FiCpu } from "react-icons/fi";

const items = [
  {
    icon: FiBookOpen,
    title: "Training Programs",
    org: "Self-directed & Online Platforms",
    period: "Ongoing",
    detail: "Hands-on training in Python, machine learning, and cybersecurity fundamentals via structured courses and labs.",
  },
  {
    icon: FiUsers,
    title: "Workshops",
    org: "Departmental & Technical Clubs",
    period: "2024 — Present",
    detail: "Participated in workshops covering embedded systems, IoT, and network security.",
  },
  {
    icon: FiCpu,
    title: "Technical Experience",
    org: "Independent Projects",
    period: "2023 — Present",
    detail: "Built end-to-end projects spanning RF sensing, computer vision, and Linux-based security tooling.",
  },
  {
    icon: FiBriefcase,
    title: "Internships",
    org: "Open to opportunities",
    period: "2025 —",
    detail: "Actively seeking internships in security engineering, AI/ML, and embedded systems.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Path" title="Experience & Training">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[#00D9FF]/40">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8B5CF6]/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="mb-3 inline-flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#8B5CF6]/20 text-xl text-[#00D9FF]">
                  <it.icon />
                </span>
                <div>
                  <h3 className="font-bold text-white">{it.title}</h3>
                  <div className="font-mono text-xs text-[#94A3B8]">{it.period}</div>
                </div>
              </div>
              <div className="text-sm text-[#00D9FF]">{it.org}</div>
              <p className="mt-3 text-sm text-[#94A3B8]">{it.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
