import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id={id} ref={ref} className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        {eyebrow && (
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#00D9FF]">
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-4xl font-bold sm:text-5xl">
          <span className="text-white">{title.split(" ")[0]} </span>
          <span className="text-gradient">{title.split(" ").slice(1).join(" ")}</span>
        </h2>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-[#94A3B8]">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
