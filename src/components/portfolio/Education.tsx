import { Section, Reveal } from "./Section";

const items = [
  {
    year: "2023 — 2027",
    school: "PSG College of Technology",
    degree: "Bachelor of Engineering — Electronics & Communication Engineering",
    detail: "Signals, networking, embedded systems, and digital electronics. Independent focus on cybersecurity and machine learning.",
  },
];

export function Education() {
  return (
    <Section id="education" index="02 — Education" title="Education.">
      <div className="relative border-l border-white/15 pl-8 md:pl-16">
        {items.map((it, i) => (
          <Reveal key={i}>
            <div className="relative">
              <span className="absolute -left-[41px] top-2 h-2 w-2 rounded-full bg-white md:-left-[73px]" />
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {it.year}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-3xl font-medium tracking-[-0.02em] text-white md:text-4xl">
                    {it.school}
                  </h3>
                  <div className="mt-3 text-sm text-white/70">{it.degree}</div>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">
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
