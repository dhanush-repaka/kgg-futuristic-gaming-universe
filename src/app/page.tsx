import Navbar from "@/components/kgg/Navbar";
import Scene01Hook from "@/components/kgg/scenes/Scene01Hook";
import Scene02Ignition from "@/components/kgg/scenes/Scene02Ignition";
import Scene03ConsoleReveal from "@/components/kgg/scenes/Scene03ConsoleReveal";
import Scene04TheSwitch from "@/components/kgg/scenes/Scene04TheSwitch";
import Scene05GoingUnder from "@/components/kgg/scenes/Scene05GoingUnder";
import Scene06BehindTheWheel from "@/components/kgg/scenes/Scene06BehindTheWheel";
import Scene07WideShot from "@/components/kgg/scenes/Scene07WideShot";
import Scene08Invite from "@/components/kgg/scenes/Scene08Invite";
import StoryFooter from "@/components/kgg/StoryFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <Navbar />
      <main>
        <Scene01Hook />
        <Scene02Ignition />
        <Scene03ConsoleReveal />
        <Scene04TheSwitch />
        <Scene05GoingUnder />
        <Scene06BehindTheWheel />
        <Scene07WideShot />
        <Scene08Invite />
      </main>
      <StoryFooter />
    </div>
  );
}
