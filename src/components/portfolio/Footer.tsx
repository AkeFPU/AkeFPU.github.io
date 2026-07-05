export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-10 md:px-12">
        <div className="col-span-12 md:col-span-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
            Designed & Built by Akif Rifath
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()}
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 text-right">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            v2026.01 — All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
