import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function SocialDock() {
  const items = [
    { Icon: FiGithub, href: "https://github.com/AkeFPU", label: "GitHub" },
    { Icon: FiLinkedin, href: "https://www.linkedin.com/in/akif-rifath-11a650294/", label: "LinkedIn" },
    { Icon: FiMail, href: "#contact", label: "Email" },
  ];
  return (
    <motion.aside
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col items-center gap-6">
        {items.map(({ Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              aria-label={label}
              className="block text-white/50 transition-colors hover:text-white"
            >
              <Icon size={16} strokeWidth={1.25} />
            </a>
          </li>
        ))}
        <li aria-hidden className="mt-2 h-16 w-px bg-white/20" />
      </ul>
    </motion.aside>
  );
}
