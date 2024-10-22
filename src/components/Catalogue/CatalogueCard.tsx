import Image from 'next/image';
import { Yacht } from '@/lib/interfaces/yacht.interface';
import { fetchImgUrl } from '@/utils/aws/getImageFromAWS';
import ClickableComponent from '../ClickableComponennt/ClickableComponent';
const IMAGE_600_400 = 'https://fakeimg.pl/600x400?text=Norse+Yacht+Co.';

type CardImgProps = {
  keyImg: string;
  id: number;
  name: string;
};

const CardImg = async ({ keyImg, id, name }: CardImgProps) => {
  const currImg = (await fetchImgUrl(keyImg)) || IMAGE_600_400;

  return (
    <div className="relative block w-full h-96 group">
      <Image
        src={currImg}
        fill
        sizes="100vw"
        className="w-full h-60 object-cover hover:rounded-lg"
        alt="main_yacht_img"
      />
      <span className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition ease duration-1000">
        <ClickableComponent
          text="See Detail"
          href={`/catalogue/${id}?name=${name}`}
          variant="linkButtonPrimary"
        />
      </span>
    </div>
  );
};

type CatalogueCardProps = {
  yacht: Yacht;
};

const CatalogueCard = async ({ yacht }: CatalogueCardProps) => {
  const { yacht_id, yacht_make, yacht_main_image_key } = yacht;

  return (
    <div className="hover:shadow-custom hover:rounded-lg hover:scale-105 transition ease duration-1000">
      <ClickableComponent
        text={
          <CardImg
            keyImg={yacht_main_image_key}
            id={yacht_id}
            name={yacht_make}
          />
        }
        href={`/catalogue/${yacht_id}`}
        variant="imgContainer"
      />
      <h2 className="text-lg font-semibold mt-2">{yacht.yacht_model}</h2>
      <p className="text-gray-600">{yacht_make}</p>
      <p className="text-xl font-bold mt-2">${yacht.yacht_price}</p>
    </div>
  );
};

export default CatalogueCard;
