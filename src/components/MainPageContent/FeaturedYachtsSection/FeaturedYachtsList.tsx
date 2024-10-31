import Card from '@/components/Catalogue/Card/Card';
import CardSkeleton from '@/components/Skeletons/CardSkeleton';

import { apiClient } from '@/utils/api/apiClient';

import { Yacht } from '@/interfaces/yacht.interface';

const FEATURED_YACHT_COUNT = 3;

const FeaturedYachtsList = async () => {
  try {
    const yachts: Yacht[] = await apiClient.getFeaturedYachts('/yachts');
    yachts.sort(() => Math.random() - 0.5);

    const visibleYachts = yachts.slice(0, FEATURED_YACHT_COUNT);
    return (
      <>
        {visibleYachts.map((yacht) => (
          <Card
            key={yacht.yacht_id}
            yacht={yacht}
          />
        ))}
      </>
    );
  } catch (error) {
    return (
      <>
        {Array.from({ length: FEATURED_YACHT_COUNT }, (_, index) => (
          <CardSkeleton key={index} />
        ))}
      </>
    );
  }
};

export default FeaturedYachtsList;
