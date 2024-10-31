import HeroSection from '@/components/MainPageContent/HeroSection';
import FeaturedYachts from '@/components/MainPageContent/FeaturedYachtsSection/FeaturedYachts';
import BlocksSection from '@/components/MainPageContent/BlocksSection/BlocksSection';
import ReviewsSection from '@/components/MainPageContent/ReviewSection/ReveiwSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedYachts />
      <BlocksSection />
      <ReviewsSection />
    </>
  );
}
