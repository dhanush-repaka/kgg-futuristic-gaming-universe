import Hero3D from "@/components/Hero3D";
import GamingServices from "@/components/GamingServices";
import NewGamesSection from "@/components/NewGamesSection";
import VRCricketSection from "@/components/VRCricketSection";
import LocationBooking from "@/components/LocationBooking";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero3D />
      <GamingServices />
      <NewGamesSection />
      <VRCricketSection />
      <LocationBooking />
      <Footer />
    </div>
  );
}