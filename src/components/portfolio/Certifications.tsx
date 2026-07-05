import { Section, Reveal } from "./Section";

const certs = [
  { title: "Cybersecurity Fundamentals", org: "Online Platform", year: "2024" },
  { title: "Python for Data Science", org: "Online Platform", year: "2024" },
  { title: "Networking Essentials", org: "Online Platform", year: "2024" },
  { title: "Linux Fundamentals", org: "Online Platform", year: "2024" },
  { title: "Machine Learning Basics", org: "Online Platform", year: "2024" },
];

export function Certifications() {
  return (
    <Section id="certifications" index="06 — Credentials" title="Certifications.">
      <div className="border-t border-white/10">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.04}>
            <div className="group grid grid-cols-12 items-center gap-4 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02]">
              <div className="col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 md:col-span-1">
                /{String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-10 md:col-span-7">
                <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-white md:text-2xl">
                  {c.title}
                </h3>
              </div>
              <div className="col-span-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 md:col-span-3">
                {c.org}
              </div>
              <div className="col-span-4 text-right font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 md:col-span-1">
                {c.year}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
