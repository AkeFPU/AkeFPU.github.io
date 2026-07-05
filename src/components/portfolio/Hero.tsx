import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

function HeroGraphic() {
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full text-white/30" fill="none">
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "300px 300px" }}
      >
        {[280, 240, 200, 160, 120, 80].map((r) => (
          <circle key={r} cx="300" cy="300" r={r} stroke="currentColor" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={300 + Math.cos(a) * 80}
              y1={300 + Math.sin(a) * 80}
              x2={300 + Math.cos(a) * 280}
              y2={300 + Math.sin(a) * 280}
              stroke="currentColor"
              strokeWidth="0.4"
            />
          );
        })}
      </motion.g>
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "300px 300px" }}
      >
        <circle cx="300" cy="300" r="295" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 8" />
      </motion.g>
      <circle cx="300" cy="300" r="3" fill="currentColor" />
      <text x="300" y="30" textAnchor="middle" className="fill-white/40 font-mono" fontSize="9" letterSpacing="4">
        N
      </text>
      <text x="580" y="304" textAnchor="middle" className="fill-white/40 font-mono" fontSize="9" letterSpacing="4">
        E
      </text>
      <text x="300" y="580" textAnchor="middle" className="fill-white/40 font-mono" fontSize="9" letterSpacing="4">
        S
      </text>
      <text x="20" y="304" textAnchor="middle" className="fill-white/40 font-mono" fontSize="9" letterSpacing="4">
        W
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh overflow-hidden pt-32 grain">
      <div className="pointer-events-none absolute inset-0 fine-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      {/* Vertical guides */}
      <div className="pointer-events-none absolute inset-y-0 left-1/4 w-px bg-white/[0.04]" />
      <div className="pointer-events-none absolute inset-y-0 left-2/4 w-px bg-white/[0.04]" />
      <div className="pointer-events-none absolute inset-y-0 left-3/4 w-px bg-white/[0.04]" />

      {/* Particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/40"
          style={{ left: `${(i * 47) % 100}%`, top: `${(i * 73) % 100}%` }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{ duration: 6 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 py-16 md:px-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60"
          >
            <span className="h-px w-8 bg-white/40" />
            // Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-[18vw] font-bold leading-[0.85] tracking-[-0.04em] text-white lg:text-[10rem] xl:text-[12rem]"
          >
            AKIF
            <br />
            <span className="text-white">RIFATH</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 border-l border-white/20 pl-6"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
              Electronics & Communication Engineering Student
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              Cybersecurity Enthusiast &nbsp;/&nbsp; Aspiring Security Engineer
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/70"
          >
            Passionate about cybersecurity, artificial intelligence, networking, and electronics —
            building innovative solutions that bridge hardware and software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={`${import.meta.env.BASE_URL}1pageresume.pdf`}
              download
              className="group inline-flex items-center gap-3 border border-white/40 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Download Resume
              <FiArrowDown size={12} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 transition-all hover:border-white hover:text-white"
            >
              View Projects
              <FiArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="relative lg:col-span-5"
        >
          <div className="sticky top-32 aspect-square w-full max-w-[520px]">
            <HeroGraphic />
            <div className="absolute -top-4 left-0 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
               / SIGNAL_TOPOLOGY
            </div>
            <div className="absolute -bottom-4 right-0 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
              REV 2026.01
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom meta */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 mx-auto flex max-w-[1400px] items-end justify-between px-6 md:px-12">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
          Coimbatore, India &nbsp;/&nbsp; 11.02°N 76.96°E
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
          Scroll ↓
        </div>
      </div>
    </section>
  );
}
