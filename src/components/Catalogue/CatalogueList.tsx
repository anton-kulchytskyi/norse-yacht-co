import CardSkeleton from '@/components/Skeletons/CardSkeleton';
import { Yacht } from '@/interfaces/yacht.interface';
import { apiClient } from '@/utils/api/apiClient';
import Card from './Card/Card';

const YACHT_COUNT = 9;

const CatalogueList = async () => {
  try {
    const yachts: Yacht[] = await apiClient.getAllYachts('/yachts');

    return (
      <>
        {yachts.map((yacht) => (
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
        {Array.from({ length: YACHT_COUNT }, (_, index) => (
          <CardSkeleton key={index} />
        ))}
      </>
    );
  }
};

export default CatalogueList;
