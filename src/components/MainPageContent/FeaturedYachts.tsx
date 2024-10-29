import { Yacht } from '@/interfaces/yacht.interface';
import { apiClient } from '@/utils/api/apiClient';
import Card from '../Catalogue/Card/Card';
import FeaturedYachsSkeleton from '../Skeletons/FeaturedYachsSkeleton';

const FeaturedYachts = async () => {
  try {
    const yachts: Yacht[] = await apiClient.getAllYachts('/yachts');
    yachts.sort(() => Math.random() - 0.5);

    const visibleYachts = yachts.slice(0, 3);
    return (
      <>
        <div className="flex w-full justify-between items-center px-5 md:px-16 py-4 md:py-6 xl:py-8">
          <div>
            <h4>FeaturedYachts</h4>
          </div>
          <div>see all</div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-5 md:px-16">
          {visibleYachts.map((yacht) => (
            <Card
              key={yacht.yacht_id}
              yacht={yacht}
            />
          ))}
        </div>
      </>
    );
  } catch (error) {
    return <FeaturedYachsSkeleton />;
  }
};

export default FeaturedYachts;
