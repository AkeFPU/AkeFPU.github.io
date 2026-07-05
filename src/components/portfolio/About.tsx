import { Section, Reveal } from "./Section";

const interests = ["Cybersecurity", "Artificial Intelligence", "Networking", "Embedded Systems"];

export function About() {
  return (
    <Section id="about" index="01 — Profile" title="About.">
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        {/* Left: geometric mark */}
        <Reveal>
          <div className="col-span-12 md:col-span-2">
            <svg viewBox="0 0 100 200" className="h-40 w-full text-white/40" fill="none">
              <line x1="50" y1="0" x2="50" y2="200" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="30" r="8" stroke="currentColor" strokeWidth="0.5" />
              <rect x="42" y="90" width="16" height="16" stroke="currentColor" strokeWidth="0.5" />
              <path d="M 42 170 L 50 158 L 58 170 Z" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-6">
          <Reveal delay={0.1}>
            <p className="text-2xl leading-[1.5] tracking-[-0.01em] text-white/90 md:text-3xl">
              I'm an <span className="text-white">Electronics & Communication Engineering</span> student at{" "}
              <span className="text-white">PSG College of Technology</span>, exploring the seam
              between hardware and software.
            </p>
            <p className="mt-8 text-base leading-relaxed text-white/60">
              My work focuses on cybersecurity, artificial intelligence, networking, and embedded
              electronics — from ML-driven RF anomaly detection to computer-vision pipelines and
              Linux-based security tooling. I care about clean systems, rigorous thinking, and
              things that actually work in the field.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-4">
          <Reveal delay={0.2}>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              / Areas of interest
            </div>
            <ul className="mt-6 space-y-4 border-t border-white/10">
              {interests.map((i, idx) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between border-b border-white/10 pb-4 pt-4"
                >
                  <span className="font-display text-xl text-white">{i}</span>
                  <span className="font-mono text-[10px] text-white/40">
                    0{idx + 1}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
