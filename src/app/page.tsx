import Navbar from "@/components/kgg/Navbar";
import Hero from "@/components/kgg/Hero";
import BurnChapter from "@/components/kgg/BurnChapter";
import PlatformsFan from "@/components/kgg/PlatformsFan";
import GamesLineup from "@/components/kgg/GamesLineup";
import Watchlist from "@/components/kgg/Watchlist";
import Pricing from "@/components/kgg/Pricing";
import SocialProof from "@/components/kgg/SocialProof";
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
        <Watchlist />
        <Pricing />
        <SocialProof />
        <Invite />
      </main>
      <StoryFooter />
    </div>
  );
}
