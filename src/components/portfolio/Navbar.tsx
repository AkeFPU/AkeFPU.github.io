import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  "Home", "About", "Education", "Experience", "Projects",
  "Skills", "Certifications", "Achievements", "Contact",
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
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <button
          onClick={() => go("home")}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-white"
        >
          A. Rifath<span className="text-white/40"> — Portfolio</span>
        </button>

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

        <button
          onClick={() => go("contact")}
          className="hidden lg:inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 hover:text-white"
        >
          Get in touch →
        </button>

        <button
          className="lg:hidden font-mono text-[10px] uppercase tracking-[0.22em] text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-black"
          >
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
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
