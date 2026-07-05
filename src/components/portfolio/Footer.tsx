import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const linksLeft = [
  { label: "About", href: "about" },
  { label: "Education", href: "education" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
];

const linksRight = [
  { label: "Skills", href: "skills" },
  { label: "Certifications", href: "certifications" },
  { label: "Achievements", href: "achievements" },
  { label: "Contact", href: "contact" },
];

const socials = [
  { Icon: FiGithub, href: "https://github.com/AkeFPU", label: "GitHub" },
  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/akif-rifath-11a650294/", label: "LinkedIn" },
  { Icon: FiTwitter, href: "https://x.com/AkeFPU", label: "X" },
  { Icon: FiMail, href: "#contact", label: "Email" },
];

export function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-16 md:px-12">
        {/* Identity + blurb */}
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white">
            akif<span className="text-white/40">@</span>psg
          </div>
          <div className="mt-2 text-sm text-white/60">
            Electronics & Communication Engineering student — Cybersecurity, AI, Networking
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/40">
            Building toward roles in security engineering, ML systems, and embedded electronics.
          </p>
        </div>

        {/* Nav column 1 */}
        <div className="col-span-6 md:col-span-2">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
            / Site
          </div>
          <ul className="mt-4 space-y-3">
            {linksLeft.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => go(l.href)}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav column 2 */}
        <div className="col-span-6 md:col-span-2">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
            / More
          </div>
          <ul className="mt-4 space-y-3">
            {linksRight.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => go(l.href)}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="col-span-12 md:col-span-3 md:text-right">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
            / Connect
          </div>
          <ul className="mt-4 flex gap-4 md:justify-end">
            {socials.map(({ Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-white/50 hover:text-white"
                >
                  <Icon size={14} strokeWidth={1.25} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Status bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-6 py-6 md:px-12">
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
            © {new Date().getFullYear()} Akif Rifath — All rights reserved
          </div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            systems nominal
          </div>
        </div>
      </div>
    </footer>
  );
}
