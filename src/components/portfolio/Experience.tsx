import { Section, Reveal } from "./Section";

const items = [
  {
    year: "06/2026 – 06/2026",
    title: "Networking and Infrastructure Intern",
    org: "White House Business Solutions Pvt Ltd",
    detail: "Gained practical exposure to TCP/IP, IP addressing, VLANs, Layer 2 and Layer 3 switching, STP, firewall concepts, and GNS3-based network simulation.",
  },
  {
    year: "12/2025 – 02/2026",
    title: "Offensive Cyber Security Intern",
    org: "InLighnX Global Pvt Ltd",
    detail: "Structured training in Python, machine learning, and cybersecurity fundamentals through labs and hands-on courses.",
  },
  {
    year: "05/03/2024 – 06/03/2024",
    title: "Workshops",
    org: "Cappriccio Securities",
    detail: "Workshop on Web Application Pen-testing and Bug Bounty.",
  },
  

];

export function Experience() {
  return (
    <Section id="experience" index="03 — Experience" title="Experience.">
      <div className="relative border-l border-white/15 pl-8 md:pl-16">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.05}>
            <div className="relative mb-16 last:mb-0">
              <span className="absolute -left-[41px] top-2 h-2 w-2 rounded-full bg-white/80 md:-left-[73px]" />
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {it.year}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-display text-2xl font-medium tracking-[-0.02em] text-white md:text-3xl">
                    {it.title}
                  </h3>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                    {it.org}
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
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
