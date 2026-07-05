import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const sections = [
  "Home", "About", "Education", "Experience", "Projects",
  "Skills", "Certifications", "Achievements", "Contact",
];

const socials = [
  { Icon: FiGithub, href: "https://github.com/AkeFPU", label: "GitHub" },
  { Icon: FiLinkedin, href: "https://www.linkedin.com/in/akif-rifath-11a650294/", label: "LinkedIn" },
  { Icon: FiTwitter, href: "https://x.com/AkeFPU", label: "X" },
  { Icon: FiMail, href: "#contact", label: "Email" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s.toLowerCase());
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.toLowerCase());
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5 md:px-12">
        <ul className="hidden lg:flex items-center gap-8">
          {sections.map((s) => (
            <li key={s}>
              <button
                onClick={() => go(s)}
                className={`font-mono text-[10px] uppercase tracking-[0.22em] transition-colors ${
                  active === s.toLowerCase() ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {s}
              </button>
            </li>
          ))}
        </ul>

        {/* Right cluster: socials + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            {socials.map(({ Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="block text-white/50 transition-colors hover:text-white"
                >
                  <Icon size={14} strokeWidth={1.25} />
                </a>
              </li>
            ))}
          </ul>
          <span className="h-4 w-px bg-white/15" />
          <button
            onClick={() => go("contact")}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 hover:text-white"
          >
            Get in touch →
          </button>
        </div>

        <button
          className="ml-auto lg:hidden font-mono text-[10px] uppercase tracking-[0.22em] text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-black"
          >
            <ul>
              {sections.map((s) => (
                <li key={s} className="border-b border-white/5">
                  <button
                    onClick={() => go(s)}
                    className="block w-full px-6 py-4 text-left font-mono text-[11px] uppercase tracking-[0.22em] text-white/80"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 px-6 py-5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="text-white/50 transition-colors hover:text-white"
                >
                  <Icon size={16} strokeWidth={1.25} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
