import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section, Reveal } from "./Section";

const interests = ["Cybersecurity", "Artificial Intelligence", "Networking", "Embedded Systems"];

function RadarBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <svg viewBox="0 0 400 400" className="h-full w-full text-white/20" fill="none">
        {[150, 112, 74, 36].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} stroke="currentColor" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * 36}
              y1={200 + Math.sin(a) * 36}
              x2={200 + Math.cos(a) * 150}
              y2={200 + Math.sin(a) * 150}
              stroke="currentColor"
              strokeWidth="0.4"
            />
          );
        })}
        <circle cx="200" cy="200" r="188" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 7" />
      </svg>

      {/* rotating sweep */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.14) 18deg, transparent 55deg)",
          maskImage: "radial-gradient(circle at center, black 60%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 78%)",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50" />
    </div>
  );
}

function IdentityScanCard() {
  const [step, setStep] = useState(0);
  const totalLines = 4 + interests.length + 2;

  useEffect(() => {
    if (step >= totalLines) return;
    const t = setTimeout(() => setStep((s) => s + 1), 220);
    return () => clearTimeout(t);
  }, [step, totalLines]);

  const line = (i: number) => step > i;

  return (
    <div className="relative aspect-square w-full overflow-hidden border border-white/15 bg-black">
      <RadarBackdrop />

      {/* corner labels, echoing the Hero graphic's annotation style */}
      <div className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
         / IDENTITY_SCAN
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/70" />
        </span>
        scanning
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.3em] text-white/35">
        REV 2026.01
      </div>

      {/* terminal readout, floating over the radar */}
      <div className="absolute inset-x-4 bottom-12 top-16 flex flex-col justify-center border border-white/10 bg-black/75 px-5 py-5 font-mono text-[12px] leading-relaxed backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
            root@akif :: ~/profile
          </span>
        </div>

        <div className="space-y-1.5 overflow-hidden">
          {line(0) && (
            <div>
              <span className="text-white/40">$</span> <span className="text-white/80">whoami</span>
            </div>
          )}
          {line(1) && (
            <div className="pl-4 text-white/50">› akif.rifath — ece / cybersecurity track</div>
          )}

          {line(2) && (
            <div className="pt-2">
              <span className="text-white/40">$</span>{" "}
              <span className="text-white/80">cat ./interests.txt</span>
            </div>
          )}
          {interests.map((it, idx) => (
            <div key={it}>{line(3 + idx) && <div className="pl-4 text-white/50">› {it}</div>}</div>
          ))}

          {line(3 + interests.length) && (
            <div className="pt-2">
              <span className="text-white/40">$</span>{" "}
              <span className="text-white/80">./status --check</span>
            </div>
          )}
          {line(4 + interests.length) && (
            <div className="pl-4 text-white/70">
              <span className="relative mr-2 inline-flex h-1.5 w-1.5 align-middle">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              ready · open to opportunities
            </div>
          )}
          {step < totalLines && (
            <span className="inline-block h-[13px] w-[6px] translate-y-[2px] animate-pulse bg-white/60" />
          )}
        </div>
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

        {/* Right: radar-scan + terminal hybrid, replaces the plain interest list */}
        <div className="col-span-12 md:col-span-4">
          <Reveal delay={0.2}>
            <IdentityScanCard />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
