import HeroSection from "./home/HeroSection";
import FeaturedSection from "./home/FeaturedSection";
import { CategoriesSection } from "./home/CategoriesSection";
import { QuatesSection } from "./home/QuatesSection";

export default function Home() {
  return (
    <main className="mx-auto  font-sans  min-h-10 flex flex-col items-center justify-center">
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <QuatesSection />
    </main>
  );
}
