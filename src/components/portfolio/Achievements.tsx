import { Section, Reveal } from "./Section";
import { FiStar, FiFlag, FiZap, FiUsers } from "react-icons/fi";

const items = [
  { icon: FiStar, title: "Academic Excellence", detail: "Consistent performance in core ECE coursework with focus on signals, networks, and embedded systems." },
  { icon: FiZap, title: "Independent RF Research", detail: "Designed and prototyped an ML-driven 2.4 GHz intrusion detection system integrating ESP32 + NRF24L01." },
  { icon: FiFlag, title: "Hackathons & Competitions", detail: "Participated in technical competitions focused on AI, embedded systems, and security." },
  { icon: FiUsers, title: "Workshops & Community", detail: "Active in departmental workshops covering cybersecurity, IoT, and applied machine learning." },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="07 — Highlights" title="Achievements">
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="glass group relative flex h-full items-start gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-violet">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#8B5CF6]/25 to-[#00D9FF]/25 text-xl text-[#8B5CF6] transition-transform group-hover:scale-110">
                <it.icon />
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-[#94A3B8]">{it.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
