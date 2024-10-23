import { Yacht } from '@/lib/interfaces/yacht.interface';

import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import Heart from '@/components//SvgIconsComponents/Heart';
import CardImg from './CardImg';
import YachtName from './YachtName';
import YachtPrice from './YachtPrice';
import TopRightLabel from './TopRightLabel';

type CatalogueCardProps = {
  yacht: Yacht;
};

const CatalogueCard = async ({ yacht }: CatalogueCardProps) => {
  const {
    yacht_id,
    yacht_model,
    yacht_make,
    yacht_main_image_key,
    yacht_price,
    yacht_price_old,
    yacht_country,
    yacht_town,
    yacht_year,
    yacht_top,
    yacht_hot_price,
  } = yacht;

  return (
    <div className="hover:shadow-custom hover:rounded-lg hover:scale-105 transition ease duration-1000 group">
      <div className="relative block w-full h-96">
        <ClickableComponent
          text={<CardImg keyImg={yacht_main_image_key} />}
          href={`/catalogue/${yacht_id}`}
          variant="imgContainer"
        />
        <span className="absolute top-6 right-8 text-white uppercase leading-7 font-medium px-4 bg-secondary-100 rounded-[2rem] rounded-tr-sm rounded-bl-sm">
          <TopRightLabel
            yachtTop={yacht_top}
            yachtHotPrice={yacht_hot_price}
          />
        </span>
        <span className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition ease duration-1000">
          <ClickableComponent
            text="See Detail"
            href={`/catalogue/${yacht_id}?name=${yacht_make}`}
            variant="linkButtonPrimary"
          />
        </span>
      </div>
      <div className="flex justify-between mb-2">
        <ClickableComponent
          text={
            <YachtName
              yachtMake={yacht_make}
              yachtModel={yacht_model}
            />
          }
          href={`/catalogue/${yacht_id}?name=${yacht_make}`}
          variant="yachtName"
        />
        <span className="mx-4 my-4">
          <ClickableComponent
            text={<Heart />}
            href=""
            variant="icon"
          />
        </span>
      </div>
      <YachtPrice
        price={yacht_price}
        old_price={yacht_price_old}
      />
      <p className="text-grey-100 xl:text-2xl">{`${yacht_country}, ${yacht_town} | ${yacht_year}`}</p>
    </div>
  );
};

export default CatalogueCard;
