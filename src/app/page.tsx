import HeroSection from '@/components/MainPageContent/HeroSection';
import FeaturedYachts from '@/components/MainPageContent/FeaturedYachtsSection/FeaturedYachts';
import BlocksSection from '@/components/MainPageContent/BlocksSection/BlocksSection';
import ContactSection from '@/components/MainPageContent/ContactSection/ContactSection';
import ReviewsSection from '@/components/MainPageContent/ReviewSection/ReveiwSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedYachts />
      <BlocksSection />
      <ContactSection />
      <ReviewsSection />
    </>
  );
}
