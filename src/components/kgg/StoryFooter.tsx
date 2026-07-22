import Image from "next/image";

export default function StoryFooter() {
  return (
    <footer id="contact" className="border-t border-rule bg-bg">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 overflow-hidden rounded-md ring-1 ring-rule">
              <Image src="/kgg-logo.jpeg" alt="" fill sizes="36px" className="object-cover" />
            </span>
            <h3 className="text-lg font-bold text-ink">Karthikeya&rsquo;s Games Galaxy</h3>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            Don&rsquo;t be bored, get on-board — a walk-in gaming lounge for console, racing, and VR sessions.
          </p>
        </div>

        <div>
          <h4 className="font-mono-label text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Navigate
          </h4>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted">
            <li><a href="#platforms" className="transition-colors hover:text-ink">Platforms</a></li>
            <li><a href="#vr" className="transition-colors hover:text-ink">VR</a></li>
            <li><a href="#racing" className="transition-colors hover:text-ink">Racing</a></li>
            <li><a href="#pricing" className="transition-colors hover:text-ink">Pricing</a></li>
            <li><a href="/booking" className="transition-colors hover:text-ink">Reserve</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono-label text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
            Visit
          </h4>
          <ul className="mt-6 space-y-3 text-sm text-ink-muted">
            <li>
              <a href="tel:+917702528817" className="transition-colors hover:text-ink">+91 77025 28817</a>
            </li>
            <li>
              <a href="mailto:connect@kgg.lounge" className="transition-colors hover:text-ink">connect@kgg.lounge</a>
            </li>
            <li>537, Bairagipatteda Rd, Tirupati - 517501</li>
            <li className="font-mono-label text-xs text-ink-muted">10:00 AM &ndash; 11:00 PM, daily</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule py-6 text-center font-mono-label text-xs text-ink-muted">
        &copy; {new Date().getFullYear()} Karthikeya&rsquo;s Games Galaxy. All rights reserved.
      </div>
    </footer>
  );
}
