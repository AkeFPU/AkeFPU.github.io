import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s.id);
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-1/2 top-4 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2 rounded-2xl transition-all ${
        scrolled ? "glass-strong shadow-2xl" : "glass"
      }`}
    >
      <nav className="flex items-center justify-between px-5 py-3">
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2 font-display text-lg font-bold"
          aria-label="Akif Rifath — Home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#8B5CF6] text-[#080B14] font-black">
            AR
          </span>
          <span className="hidden sm:inline text-white">Akif<span className="text-gradient">.</span></span>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => go(s.id)}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === s.id ? "text-white" : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/10 ring-1 ring-[#00D9FF]/40"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden lg:inline-flex items-center rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] px-4 py-1.5 text-sm font-semibold text-[#080B14] transition-transform hover:scale-105"
        >
          Hire Me
        </button>

        <button
          className="lg:hidden text-white text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10 px-3 py-2"
          >
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                    active === s.id ? "bg-white/10 text-white" : "text-[#94A3B8]"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
