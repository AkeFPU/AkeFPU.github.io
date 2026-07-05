import { Section, Reveal } from "./Section";
import { FiBookOpen } from "react-icons/fi";

const items = [
  {
    year: "2023 — 2027",
    school: "PSG College of Technology",
    degree: "Bachelor of Engineering — Electronics & Communication Engineering",
    detail: "Coursework in signals, networking, embedded systems, and digital electronics. Independent focus on cybersecurity and machine learning.",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="02 — Journey" title="Education">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#00D9FF] via-[#8B5CF6] to-transparent md:left-1/2" />
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative mb-10 pl-12 md:pl-0">
              <div className="absolute left-2 top-4 h-4 w-4 rounded-full bg-[#00D9FF] ring-4 ring-[#00D9FF]/20 md:left-1/2 md:-translate-x-1/2" />
              <div className={`md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10"}`}>
                <div className="glass group rounded-2xl p-6 transition-all hover:glow-violet">
                  <div className="mb-2 flex items-center gap-2 font-mono text-xs text-[#8B5CF6]">
                    <FiBookOpen /> {it.year}
                  </div>
                  <h3 className="text-lg font-bold text-white">{it.school}</h3>
                  <div className="mt-1 text-sm text-[#00D9FF]">{it.degree}</div>
                  <p className="mt-3 text-sm text-[#94A3B8]">{it.detail}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
