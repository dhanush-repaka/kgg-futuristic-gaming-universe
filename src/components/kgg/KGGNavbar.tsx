import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#vr", label: "VR" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function KGGNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#home" className="group inline-flex items-center gap-3" aria-label="KGG Home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-sm font-bold text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition group-hover:scale-105">
            KGG
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-100 sm:block">
            Karthikeya&apos;s Games Galaxy
          </span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md px-1 py-0.5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.4)] transition hover:scale-105"
        >
          Book Now
        </Link>
      </nav>
    </header>
  );
}
