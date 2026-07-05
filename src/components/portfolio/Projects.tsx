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

function ProjectSVG({ n }: { n: string }) {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full text-white/25" fill="none">
      <rect x="0.5" y="0.5" width="399" height="259" stroke="currentColor" strokeWidth="0.5" />
      <line x1="0" y1="0" x2="400" y2="260" stroke="currentColor" strokeWidth="0.3" />
      <line x1="400" y1="0" x2="0" y2="260" stroke="currentColor" strokeWidth="0.3" />
      <circle cx="200" cy="130" r="60" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="200" cy="130" r="90" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" />
      <text x="16" y="24" className="fill-white/50 font-mono" fontSize="9" letterSpacing="3">
        FIG.{n}
      </text>
      <text x="384" y="248" textAnchor="end" className="fill-white/40 font-mono" fontSize="8" letterSpacing="2">
        400 × 260
      </text>
    </svg>
  );
}

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
              <div className="grid grid-cols-12 gap-6 lg:gap-12">
                <div className="col-span-12 lg:col-span-5">
                  <div className="overflow-hidden border border-white/10 transition-all group-hover:border-white/30">
                    <div className="aspect-[4/2.6] transition-transform duration-700 group-hover:scale-[1.02]">
                      <ProjectSVG n={p.n} />
                    </div>
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-7">
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
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60">
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
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
