import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowDown, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Electronics & Communication Engineering Student",
  "Cybersecurity Enthusiast",
  "AI & Machine Learning Enthusiast",
  "Aspiring Security Engineer",
];

function useTyping() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 40 : 70;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1600);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setIdx((idx + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);
  return text;
}

export function Hero() {
  const typed = useTyping();
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-dvh overflow-hidden pt-32 pb-20"
    >
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full opacity-40 blur-3xl transition-transform duration-300"
        style={{
          left: `calc(${mouse.x * 100}% - 250px)`,
          top: `calc(${mouse.y * 100}% - 250px)`,
          background: "radial-gradient(circle, rgba(0,217,255,0.4), transparent 60%)",
        }}
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#00D9FF]/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#00D9FF]"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono text-[#00D9FF]"
        >
          <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse-glow" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 font-display text-5xl font-black tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="block text-white">Akif</span>
          <span className="block text-gradient">Rifath</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex h-8 items-center font-mono text-lg sm:text-xl"
        >
          <span className="text-[#00D9FF] mr-2">&gt;</span>
          <span className="text-white">{typed}</span>
          <span className="ml-1 h-6 w-[2px] animate-pulse-glow bg-[#00D9FF]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-6 max-w-2xl text-base text-[#94A3B8] sm:text-lg"
        >
          Passionate about cybersecurity, artificial intelligence, networking, and electronics —
          building innovative solutions that bridge hardware and software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] px-6 py-3 font-semibold text-[#080B14] transition-all hover:scale-105 glow-cyan"
          >
            <FiDownload className="transition-transform group-hover:translate-y-0.5" />
            Download Resume
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
          >
            <FiMail /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex items-center gap-4"
        >
          {[
            { Icon: FaGithub, href: "https://github.com/AkeFPU", label: "GitHub" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/akif-rifath-11a650294/", label: "LinkedIn" },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -4 }}
              className="glass grid h-12 w-12 place-items-center rounded-xl text-xl text-white transition-colors hover:text-[#00D9FF] hover:glow-cyan"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }); }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.3, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#94A3B8]"
          aria-label="Scroll down"
        >
          <FiArrowDown className="text-2xl" />
        </motion.a>
      </div>
    </section>
  );
}
