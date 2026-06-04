 
import HeroSection from "./home/HeroSection";
import   FeaturedSection   from "./home/FeaturedSection";
import { CategoriesSection } from "./home/CategoriesSection";

export default function Home() {
  return (
    <main className="mx-auto  font-sans  min-h-screen flex flex-col items-center justify-center">
    <HeroSection/>
    <FeaturedSection/>
    <CategoriesSection/>
    </main>
  );
}
