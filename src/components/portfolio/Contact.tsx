import { useState } from "react";
import { Section, Reveal } from "./Section";
import { FiArrowUpRight, FiCopy, FiCheck } from "react-icons/fi";

const EMAIL = "akifrifath@example.com";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Section id="contact" index="08 — Get in touch" title="Contact.">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            // Currently open to opportunities
          </div>
          <h3 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
            Let's build something considered, precise, and worth shipping.
          </h3>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-3 border border-white/40 px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Send Email
              <FiArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={copy}
              className="group inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 transition-all hover:border-white hover:text-white"
            >
              {copied ? <><FiCheck size={12} /> Copied</> : <><FiCopy size={12} /> Copy Email</>}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-24 grid grid-cols-1 gap-px border border-white/10 md:grid-cols-3">
            {[
              { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { label: "LinkedIn", value: "in/akif-rifath", href: "https://www.linkedin.com/in/akif-rifath-11a650294/" },
              { label: "GitHub", value: "@AkeFPU", href: "https://github.com/AkeFPU" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="group bg-black p-8 text-left outline outline-1 outline-white/10 transition-colors hover:bg-white/[0.02]"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                  / {l.label}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="truncate text-lg text-white">{l.value}</div>
                  <FiArrowUpRight
                    size={14}
                    className="shrink-0 text-white/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
