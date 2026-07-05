import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <section
      id={id}
      ref={ref}
      className="relative mx-auto max-w-[1400px] scroll-mt-24 px-6 py-32 md:px-12 md:py-48"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mb-20 grid grid-cols-12 items-end gap-6 border-b border-white/10 pb-8"
      >
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            / {index}
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="font-display text-4xl font-medium tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
            {title}
          </h2>
        </div>
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
