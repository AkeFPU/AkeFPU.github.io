import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 flex justify-center gap-3">
          <a href="https://github.com/AkeFPU" target="_blank" rel="noreferrer noopener" aria-label="GitHub"
            className="glass grid h-10 w-10 place-items-center rounded-xl text-white transition-colors hover:text-[#00D9FF]">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/akif-rifath-11a650294/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"
            className="glass grid h-10 w-10 place-items-center rounded-xl text-white transition-colors hover:text-[#00D9FF]">
            <FaLinkedin />
          </a>
        </div>
        <p className="font-mono text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} Akif Rifath — Designed & built with care.
        </p>
      </div>
    </footer>
  );
}
