import { Yacht } from '@/interfaces/yacht.interface';
import { apiClient } from '@/utils/api/apiClient';
import Card from '../Catalogue/Card/Card';
import CardSkeleton from '../Skeletons/CardSkeleton';

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
