import Navbar from "@/components/kgg/Navbar";
import Hero from "@/components/kgg/Hero";
import BurnChapter from "@/components/kgg/BurnChapter";
import PlatformsFan from "@/components/kgg/PlatformsFan";
import GamesLineup from "@/components/kgg/GamesLineup";
import Pricing from "@/components/kgg/Pricing";
import Invite from "@/components/kgg/Invite";
import StoryFooter from "@/components/kgg/StoryFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <BurnChapter />
        <PlatformsFan />
        <GamesLineup />
        <Pricing />
        <Invite />
      </main>
      <StoryFooter />
    </div>
  );
}
