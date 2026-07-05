import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section, Reveal } from "./Section";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "RF Intrusion Detection System",
    description: "Machine-learning-based intrusion detection system for monitoring the 2.4 GHz spectrum and identifying anomalous RF activities.",
    tech: ["Python", "Streamlit", "Isolation Forest", "ESP32", "Arduino", "NRF24L01"],
    accent: "from-[#00D9FF] to-[#8B5CF6]",
    href: "https://github.com/AkeFPU",
  },
  {
    title: "Image Registration & Motion Estimation",
    description: "Computer vision project implementing image registration and motion estimation using feature detection and matching algorithms.",
    tech: ["Python", "OpenCV"],
    accent: "from-[#8B5CF6] to-[#22C55E]",
    href: "https://github.com/AkeFPU",
  },
  {
    title: "AI & Machine Learning Projects",
    description: "Projects involving machine learning, computer vision, and intelligent systems for real-world data problems.",
    tech: ["Python", "Machine Learning", "OpenCV"],
    accent: "from-[#22C55E] to-[#00D9FF]",
    href: "https://github.com/AkeFPU",
  },
  {
    title: "Cybersecurity Projects",
    description: "Projects involving networking, Linux, penetration testing fundamentals, and security concepts.",
    tech: ["Linux", "Kali Linux", "Networking Tools"],
    accent: "from-[#00D9FF] to-[#22C55E]",
    href: "https://github.com/AkeFPU",
  },
];

function ProjectCard({ p, i }: { p: typeof projects[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <Reveal delay={i * 0.08}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
        className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-shadow hover:glow-cyan"
      >
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`} />
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#00D9FF]/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="flex items-start justify-between">
          <div className="font-mono text-xs text-[#94A3B8]">/ project.0{i + 1}</div>
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${p.title} on GitHub`}
            className="glass grid h-9 w-9 place-items-center rounded-lg text-[#94A3B8] transition-colors hover:text-[#00D9FF]"
          >
            <FiGithub />
          </a>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold text-white">{p.title}</h3>
        <p className="mt-3 text-sm text-[#94A3B8]">{p.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-[#00D9FF]"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={p.href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-[#00D9FF]"
        >
          View on GitHub <FiExternalLink className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="04 — Work" title="Featured Projects" subtitle="Selected work spanning RF sensing, computer vision, ML, and offensive security fundamentals.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
