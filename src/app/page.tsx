import Hero3D from "@/components/Hero3D";
import GamingServices from "@/components/GamingServices";
import NewGamesSection from "@/components/NewGamesSection";
import VRCricketSection from "@/components/VRCricketSection";
import LocationBooking from "@/components/LocationBooking";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import InteractiveParticles from "@/components/InteractiveParticles";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionDivider from "@/components/SectionDivider";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import DiceRollPopup from "@/components/DiceRollPopup";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <DiceRollPopup />
      <AnimatedBackground />
      <ParallaxBackground />
      <InteractiveParticles />
      <Navigation />
      <Hero3D />
      <SectionDivider />
      <AnnouncementsSection />
      <SectionDivider />
      <GamingServices />
      <SectionDivider />
      <NewGamesSection />
      <SectionDivider />
      <VRCricketSection />
      <SectionDivider />
      <LocationBooking />
      <Footer />
    </div>
  );
}