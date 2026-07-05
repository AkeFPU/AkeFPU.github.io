import { Section, Reveal } from "./Section";
import { FiCode, FiAward, FiCpu, FiTrendingUp } from "react-icons/fi";

const stats = [
  { icon: FiCode, label: "Projects Completed", value: "6+" },
  { icon: FiAward, label: "Certifications Earned", value: "5+" },
  { icon: FiCpu, label: "Technical Skills", value: "15+" },
  { icon: FiTrendingUp, label: "Years of Learning", value: "3+" },
];

export function About() {
  return (
    <Section id="about" eyebrow="01 — Introduction" title="About Me">
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal>
          <div className="glass border-glow rounded-2xl p-8 lg:col-span-3">
            <p className="text-lg leading-relaxed text-[#E2E8F0]">
              I am an{" "}
              <span className="text-[#00D9FF] font-semibold">Electronics and Communication Engineering</span>{" "}
              student at <span className="text-white font-semibold">PSG College of Technology</span> with
              interests in cybersecurity, artificial intelligence, networking, and electronics.
            </p>
            <p className="mt-4 text-[#94A3B8] leading-relaxed">
              I enjoy solving real-world problems through technology and building projects that bridge
              hardware and software — from RF anomaly detection to computer-vision pipelines and
              secure embedded systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Cybersecurity", "AI / ML", "Networking", "Embedded Systems", "Computer Vision"].map((t) => (
                <span key={t} className="glass rounded-full px-3 py-1 text-xs font-mono text-[#00D9FF]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass group h-full rounded-2xl p-5 transition-all hover:-translate-y-1 hover:glow-cyan">
                <s.icon className="mb-3 text-2xl text-[#00D9FF] transition-transform group-hover:scale-110" />
                <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-xs text-[#94A3B8]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
