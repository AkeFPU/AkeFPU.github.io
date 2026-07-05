import { Section, Reveal } from "./Section";

const items = [
  { year: "2024", title: "Academic Excellence", detail: "Consistent performance across core ECE coursework — signals, networks, embedded systems." },
  { year: "2024", title: "Independent RF Research", detail: "Prototyped an ML-driven 2.4 GHz intrusion detection system integrating ESP32 and NRF24L01." },
  { year: "2024", title: "Hackathons & Competitions", detail: "Participated in technical events focused on AI, embedded systems, and security." },
  { year: "2024", title: "Workshops & Community", detail: "Active in departmental workshops covering cybersecurity, IoT, and applied ML." },
];

export function Achievements() {
  return (
    <Section id="achievements" index="07 — Highlights" title="Achievements.">
      <div className="relative border-l border-white/15 pl-8 md:pl-16">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.05}>
            <div className="relative mb-14 last:mb-0">
              <span className="absolute -left-[37px] top-2 h-1.5 w-1.5 rounded-full bg-white/70 md:-left-[69px]" />
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {it.year}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-white">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">
                    {it.detail}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
