import KGGNavbar from "./KGGNavbar";
import KGGHero from "./KGGHero";
import KGGGamesShowcase from "./KGGGamesShowcase";
import KGGOfferings from "./KGGOfferings";
import KGGHighlights from "./KGGHighlights";
import KGGPricing from "./KGGPricing";
import KGGGallery from "./KGGGallery";
import KGGVRSpotlight from "./KGGVRSpotlight";
import KGGCTA from "./KGGCTA";
import KGGFooter from "./KGGFooter";

import Minimalist3DCanvas from "./Minimalist3DCanvas";

export default function KGGLandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-base text-ink selection:bg-ember/20">
      <Minimalist3DCanvas />
      <KGGNavbar />
      <main>
        <KGGHero />
        <KGGGamesShowcase />
        <KGGOfferings />
        <KGGHighlights />
        <KGGPricing />
        <KGGGallery />
        <KGGVRSpotlight />
        <KGGCTA />
      </main>
      <KGGFooter />
    </div>
  );
}
