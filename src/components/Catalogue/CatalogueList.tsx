import { Yacht } from '@/lib/interfaces/yacht.interface';
import { apiClient } from '@/utils/api/apiClient';
import CatalogueCard from './CatalogueCard';

const CatalogueList = async () => {
  const yachts: Yacht[] = await apiClient.getAllYachts('/yachts');
  

  return (
    <>
      {yachts.map((yacht, i) => (
        <CatalogueCard
          key={i}
          yacht={yacht}
        />
      ))}
    </>
  );
};

export default CatalogueList;
