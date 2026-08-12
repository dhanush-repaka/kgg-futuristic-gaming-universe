"use client";

import { ScrollBurnText } from "@/components/ui/scroll-burn-text";

const SECTIONS = [
  "Tirupati's already on-board tonight. Are you?",
  "Karthikeya's Games Galaxy is Tirupati's walk-in lounge — premium kits, zero boredom, seats that don't wait.",
  "Don't be bored. Get on-board. Reserve your session before the night fills up.",
];

export default function BurnChapter() {
  return (
    <section id="burn" className="kgg-chapter">
      <ScrollBurnText
        sections={SECTIONS}
        hint="scroll into it"
        runway="150vh"
        className="bg-background"
      />
    </section>
  );
}
