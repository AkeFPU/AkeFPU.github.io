import { Section, Reveal } from "./Section";

const categories = [
  { title: "Programming", items: ["Python", "C", "C++"] },
  { title: "Cybersecurity", items: ["Linux", "Kali Linux", "Networking", "Wireshark", "Pen-testing Fundamentals"] },
  { title: "AI & Data", items: ["Machine Learning", "OpenCV", "Data Analysis"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "MATLAB"] },
];

export function Skills() {
  return (
    <Section id="skills" index="05 — Toolkit" title="Skills.">
      <div className="grid grid-cols-1 gap-px border border-white/10 md:grid-cols-2">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.06}>
            <div className="relative h-full bg-black p-10 outline outline-1 outline-white/10 transition-colors hover:bg-white/[0.02]">
              <div className="mb-8 flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  {cat.items.length} items
                </div>
              </div>
              <h3 className="font-display text-3xl font-medium tracking-[-0.02em] text-white">
                {cat.title}
              </h3>
              <ul className="mt-8 space-y-3">
                {cat.items.map((s) => (
                  <li
                    key={s}
                    className="flex items-center justify-between border-b border-white/5 pb-3 text-base text-white/80"
                  >
                    <span>{s}</span>
                    <span className="font-mono text-[10px] text-white/30">—</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
