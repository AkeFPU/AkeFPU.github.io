import { useEffect, useState } from "react";
import { Section, Reveal } from "./Section";

const focusAreas = ["Network Security", "SOC & Threat Detection", "Security Scripting", "Systems & Tools"];

function IdentityTerminal() {
  const [step, setStep] = useState(0);
  const totalLines = 4 + focusAreas.length + 2;

  useEffect(() => {
    if (step >= totalLines) return;
    const t = setTimeout(() => setStep((s) => s + 1), 200);
    return () => clearTimeout(t);
  }, [step, totalLines]);

  const line = (i: number) => step > i;

  return (
    <div className="w-full border border-white/15 bg-black px-5 py-5 font-mono text-[12px] leading-relaxed">
      {/* window chrome */}
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
          shell — akif@sec
        </span>
      </div>

      <div className="space-y-1.5">
        {line(0) && (
          <div>
            <span className="text-white/40">$</span> <span className="text-white/80">whoami</span>
          </div>
        )}
        {line(1) && (
          <div className="pl-4 text-white/50">› akif.rifath — network security / soc track</div>
        )}

        {line(2) && (
          <div className="pt-2">
            <span className="text-white/40">$</span>{" "}
            <span className="text-white/80">cat ./focus.txt</span>
          </div>
        )}
        {focusAreas.map((it, idx) => (
          <div key={it}>{line(3 + idx) && <div className="pl-4 text-white/50">› {it}</div>}</div>
        ))}

        {line(3 + focusAreas.length) && (
          <div className="pt-2">
            <span className="text-white/40">$</span>{" "}
            <span className="text-white/80">./status --check</span>
          </div>
        )}
        {line(4 + focusAreas.length) && (
          <div className="flex items-center pl-4 text-white/70">
            <span className="relative mr-2 flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-pulse rounded-full bg-emerald-400" />
            </span>
            ready · open to opportunities
          </div>
        )}
        {step < totalLines && (
          <span className="inline-block h-[13px] w-[6px] translate-y-[2px] animate-pulse bg-white/60" />
        )}
      </div>
    </div>
  );
}

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

        {/* Right: minimal terminal identity card */}
        <div className="col-span-12 md:col-span-4">
          <Reveal delay={0.2}>
            <IdentityTerminal />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}