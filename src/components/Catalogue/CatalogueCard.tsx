import { Yacht } from '@/lib/interfaces/yacht.interface';
// const IMAGE_600_400 = 'https://fakeimg.pl/600x400?text=Norse+Yacht+Co.';

type CatalogueCardProps = {
  yacht: Yacht;
};

const CatalogueCard = ({ yacht }: CatalogueCardProps) => {
  // eslint-disable-next-line
  console.log(yacht);
  return <div>CatalogueCard</div>;
};

export default CatalogueCard;
