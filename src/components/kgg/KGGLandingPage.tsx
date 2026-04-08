import KGGNavbar from "./KGGNavbar";
import KGGHero from "./KGGHero";
import KGGOfferings from "./KGGOfferings";
import KGGHighlights from "./KGGHighlights";
import KGGPricing from "./KGGPricing";
import KGGGallery from "./KGGGallery";
import KGGVRSpotlight from "./KGGVRSpotlight";
import KGGCTA from "./KGGCTA";
import KGGFooter from "./KGGFooter";

export default function KGGLandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.96),rgba(2,6,23,1))]" />
      <KGGNavbar />
      <main>
        <KGGHero />
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
