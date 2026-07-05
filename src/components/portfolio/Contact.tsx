import { useState } from "react";
import { motion } from "framer-motion";
import { Section, Reveal } from "./Section";
import { FiMail, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "akifrifath@example.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.length > 100) e.name = "Enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.email.length > 255) e.email = "Enter a valid email";
    if (!form.subject.trim() || form.subject.length > 150) e.subject = "Add a subject";
    if (!form.message.trim() || form.message.length > 2000) e.message = "Write a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // EmailJS wiring point — configure with your service/template/public key.
    // For now, fall back to opening the user's mail client so the form is usable.
    try {
      await new Promise((r) => setTimeout(r, 800));
      const body = `From: ${form.name} <${form.email}>%0D%0A%0D%0A${encodeURIComponent(form.message)}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const field = "glass w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#64748B] outline-none focus:border-[#00D9FF]/50 focus:ring-2 focus:ring-[#00D9FF]/20";

  return (
    <Section id="contact" eyebrow="08 — Get in touch" title="Contact Me" subtitle="Have an opportunity, project, or question? I'd love to hear from you.">
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal>
          <div className="glass border-glow rounded-2xl p-6 lg:col-span-2">
            <div className="mb-2 font-mono text-xs text-[#00D9FF]">// direct</div>
            <h3 className="font-display text-2xl font-bold text-white">Let's build something.</h3>
            <p className="mt-3 text-sm text-[#94A3B8]">
              Reach out for internships, collaborations, or a technical chat about security, AI, or embedded systems.
            </p>

            <button
              onClick={copy}
              className="mt-6 flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left transition-colors hover:border-[#00D9FF]/40"
            >
              <FiMail className="text-[#00D9FF]" />
              <span className="min-w-0 flex-1 truncate text-sm text-white">{EMAIL}</span>
              {copied ? <FiCheck className="text-[#22C55E]" /> : <FiCopy className="text-[#94A3B8]" />}
            </button>

            <div className="mt-6 flex gap-3">
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
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="glass grid h-11 w-11 place-items-center rounded-xl text-white transition-colors hover:text-[#00D9FF]"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6 lg:col-span-3" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-xs text-[#94A3B8]">Name</label>
                <input id="name" className={field} value={form.name} maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
                {errors.name && <div className="mt-1 text-xs text-red-400">{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-xs text-[#94A3B8]">Email</label>
                <input id="email" type="email" className={field} value={form.email} maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
                {errors.email && <div className="mt-1 text-xs text-red-400">{errors.email}</div>}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="mb-1 block text-xs text-[#94A3B8]">Subject</label>
              <input id="subject" className={field} value={form.subject} maxLength={150}
                onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              {errors.subject && <div className="mt-1 text-xs text-red-400">{errors.subject}</div>}
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="mb-1 block text-xs text-[#94A3B8]">Message</label>
              <textarea id="message" rows={5} className={field} value={form.message} maxLength={2000}
                onChange={(e) => setForm({ ...form, message: e.target.value })} />
              {errors.message && <div className="mt-1 text-xs text-red-400">{errors.message}</div>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#8B5CF6] px-6 py-3 font-semibold text-[#080B14] transition-all hover:scale-[1.02] disabled:opacity-60 glow-cyan"
            >
              {status === "sending" ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#080B14] border-t-transparent" />
              ) : status === "sent" ? (
                <><FiCheck /> Sent — check your mail client</>
              ) : (
                <><FiSend className="transition-transform group-hover:translate-x-0.5" /> Send Message</>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
