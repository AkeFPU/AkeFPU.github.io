import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#080B14]"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="h-14 w-14 rounded-xl border-2 border-transparent"
              style={{
                borderTopColor: "#00D9FF",
                borderRightColor: "#8B5CF6",
              }}
            />
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-[#94A3B8]">
              Initializing
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
