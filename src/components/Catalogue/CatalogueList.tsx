import { Yacht } from '@/interfaces/yacht.interface';
import { apiClient } from '@/utils/api/apiClient';
import Card from './Card/Card';

const CatalogueList = async () => {
  const yachts = await apiClient.getAllYachts('/yachts');

  return (
    <div className="w-full max-w-screen-3xl mx-auto">
      <div className="flex w-full justify-between items-center max-w-screen-3xl px-5 md:px-16 py-4 md:py-6 xl:py-8">
        <div>
          <h4>Catalogue</h4>
        </div>
        <div>Filter & Sorting</div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-5 md:px-16">
        {yachts.map((yacht: Yacht) => (
          <Card
            key={yacht.yacht_id}
            yacht={yacht}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogueList;
