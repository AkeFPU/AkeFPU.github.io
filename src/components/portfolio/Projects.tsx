import { Section, Reveal } from "./Section";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    n: "01",
    category: "Signals · Machine Learning",
    title: "RF Intrusion Detection System",
    description:
      "ML-based intrusion detection for the 2.4 GHz spectrum. Streams RF telemetry from an ESP32 + NRF24L01 rig into an Isolation Forest to flag anomalous activity in near real time.",
    tech: ["Python", "Streamlit", "Isolation Forest", "ESP32", "NRF24L01"],
    href: "https://github.com/AkeFPU",
  },
  {
    n: "02",
    category: "Computer Vision",
    title: "Image Registration & Motion Estimation",
    description:
      "Feature detection, descriptor matching, and homography-based registration used to estimate motion between consecutive frames.",
    tech: ["Python", "OpenCV"],
    href: "https://github.com/AkeFPU",
  },
  {
    n: "03",
    category: "AI · Applied ML",
    title: "AI and Machine Learning Projects",
    description:
      "A working collection of ML notebooks and small systems — classification, vision, and intelligent tooling built to explore real problems.",
    tech: ["Python", "ML", "OpenCV"],
    href: "https://github.com/AkeFPU",
  },
  {
    n: "04",
    category: "Security · Networking",
    title: "Cybersecurity Projects",
    description:
      "Hands-on work in networking, Linux administration, and penetration-testing fundamentals — a running lab notebook of security experiments.",
    tech: ["Linux", "Kali Linux", "Networking Tools"],
    href: "https://github.com/AkeFPU",
  },
];

export function Projects() {
  return (
    <Section id="projects" index="04 — Selected Work" title="Projects.">
      <div className="space-y-24">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group block border-t border-white/10 pt-10 transition-colors hover:border-white/40"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  {p.category}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  /{p.n}
                </div>
              </div>
              <h3 className="mt-4 font-display text-4xl font-medium tracking-[-0.02em] text-white transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                {p.title}
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">
                {p.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                    · {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70 transition-colors group-hover:text-white">
                View repository
                <FiArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}