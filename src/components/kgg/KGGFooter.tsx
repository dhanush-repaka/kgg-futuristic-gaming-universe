import Link from "next/link";
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
    <footer id="contact" className="border-t border-white/10 bg-black">
      <Reveal className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-white">Karthikeya&apos;s Games Galaxy</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            A minimalist sanctuary designed for next-gen console gaming, immersive VR, and meaningful connections.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Navigate</h4>
          <ul className="mt-6 space-y-3 text-sm text-slate-400">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Contact</h4>
          <ul className="mt-6 space-y-3 text-sm text-slate-400">
            <li>Phone: +91 99999 99999</li>
            <li>Email: connect@kgg.lounge</li>
            <li>Location: Tirupati, Andhra Pradesh</li>
            <li className="pt-4 text-xs font-medium text-slate-300">Instagram • YouTube • WhatsApp</li>
          </ul>
        </div>
      </Reveal>
      <div className="border-t border-white/5 py-8 text-center text-xs font-medium text-slate-500">
        © {new Date().getFullYear()} KGG. All rights reserved.
      </div>
    </footer>
  );
}
