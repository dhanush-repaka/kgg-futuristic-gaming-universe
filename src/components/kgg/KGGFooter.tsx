import Link from "next/link";

const links = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#vr", label: "VR" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
];

export default function KGGFooter() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="text-lg font-semibold text-white">Karthikeya&apos;s Games Galaxy</h3>
          <p className="mt-3 text-sm text-slate-300">
            Premium gaming and entertainment hub for friends, families, and casual explorers.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-cyan-200 uppercase">Navigate</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-cyan-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-cyan-200 uppercase">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Email: hello@kggaming.example</li>
            <li>Location: Tirupati, Andhra Pradesh</li>
            <li className="pt-2 text-slate-400">Social: Instagram • YouTube • WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-slate-400 md:px-8">
        © {new Date().getFullYear()} KGG — Karthikeya&apos;s Games Galaxy. All rights reserved.
      </div>
    </footer>
  );
}
