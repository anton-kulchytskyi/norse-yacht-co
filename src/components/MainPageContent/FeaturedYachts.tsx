import { FeaturedYachtsSectionData } from '@/data/mainPage/FeaturedYachtsSectionData';
import ClickableComponent from '../ClickableComponennt/ClickableComponent';
import FeaturedYachtsList from './FeaturedYachtsList';

const FeaturedYachts = () => {
  return (
    <>
      <div className="w-full px-5 md:px-16 py-4 md:py-6 xl:py-8 mb-10 xl:mb-16 2xl:mb-24">
        <div className="flex justify-center space-x-3 items-baseline xl:flex-col xl:items-center">
          <h4>{FeaturedYachtsSectionData.title}</h4>
          <h5 className="xl:translate-x-20">
            {FeaturedYachtsSectionData.subtitle}
          </h5>
        </div>
        <div className="flex justify-end mb-1 sm:mb-8 xl:mb-12">
          <ClickableComponent
            href="/catalogue"
            variant="text"
          >
            {FeaturedYachtsSectionData.button}
          </ClickableComponent>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <FeaturedYachtsList />
        </div>
      </div>
    </>
  );
};

export default FeaturedYachts;
