import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

const links = [
  { href: "#home", label: "Home" },
  { href: "#games", label: "Games" },
  { href: "#vr", label: "VR" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
];

export default function KGGFooter() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-base">
      <Reveal className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-md ring-1 ring-white/10">
              <Image src="/kgg-logo.jpeg" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <h3 className="font-display text-lg font-bold tracking-tight text-ink">Karthikeya&apos;s Games Galaxy</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            A premium gaming lounge built for next-gen console gaming, immersive VR, and meaningful connections.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold tracking-[0.16em] text-muted-2 uppercase">Navigate</h4>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold tracking-[0.16em] text-muted-2 uppercase">Contact</h4>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li>Phone: <a href="tel:+917702528817" className="transition hover:text-ink">+91 77025 28817</a></li>
            <li>Email: <a href="mailto:connect@kgg.lounge" className="transition hover:text-ink">connect@kgg.lounge</a></li>
            <li>537, Bairagipatteda Rd, Tirupati - 517501</li>
            <li className="font-mono text-xs text-muted-2">10:00 AM &ndash; 11:00 PM (Daily)</li>
            <li className="pt-4 text-xs font-medium text-muted">Instagram &bull; YouTube &bull; WhatsApp</li>
          </ul>
        </div>
      </Reveal>
      <div className="scanline" />
      <div className="py-8 text-center font-mono text-xs font-medium text-muted-2">
        © {new Date().getFullYear()} KGG. All rights reserved.
      </div>
    </footer>
  );
}
