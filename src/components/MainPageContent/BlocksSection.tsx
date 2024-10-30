import Image from 'next/image';
import { BlocksSectionData } from '@/data/mainPage/BlocksSectionData';
import { BlockSection } from '@/interfaces/blockSection.type';
import ClickableComponent from '../ClickableComponennt/ClickableComponent';
import BlockSectionLogo from '../SvgIconsComponents/BlockSectionLogo';

type BlockProps = {
  data: BlockSection;
};

const Block = ({ data }: BlockProps) => {
  const { title, subtitle, desc, img, logoTxt, logoSubTxt, order } = data;
  return (
    <section
      className={`${order ? 'bg-primary xl:flex-row' : 'bg-white xl:flex-row-reverse'} relative w-full flex flex-col gap-x-8 px-5 md:px-16 py-4 md:py-6 xl:py-8 mb-10 xl:mb-16 2xl:mb-24`}
    >
      <div className="flex flex-col justify-between xl:w-1/2 2xl:w-1/3">
        <div
          className={`flex items-baseline space-x-3 justify-center xl:absolute z-10 top-16 ${order ? 'left-16' : 'right-16'}`}
        >
          {order ? (
            <>
              <h3 className="text-white">{title}</h3>
              <h6>{subtitle}</h6>
            </>
          ) : (
            <>
              <h6>{subtitle}</h6>
              <h3 className="text-primary">{title}</h3>
            </>
          )}
        </div>
        <p
          className={`text-center xl:mt-36 xl:text-left ${order ? 'text-white' : 'text-black 2xl:absolute 2xl:-ml-40 z-10'}`}
        >
          {desc}
          <br />
          <ClickableComponent
            href="/how-it-works"
            variant="text"
          >
            Read more
          </ClickableComponent>
        </p>
        <span
          className={`hidden xl:flex justify-end ${!order && 'absolute bottom-8 right-16'}`}
        >
          <BlockSectionLogo order={order} logoTxt={logoTxt} logoSubTxt={logoSubTxt} />
        </span>
      </div>
      <div className="relative w-full xl:w-1/2 2xl:w-2/3 h-44 sm:h-80 md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]">
        <Image
          src={img}
          fill
          sizes="100vw"
          className="object-cover"
          alt="section image"
        />
      </div>
    </section>
  );
};

const BlocksSection = () => {
  return (
    <div>
      {BlocksSectionData.map((block, i) => (
        <Block
          key={i}
          data={block}
        />
      ))}
    </div>
  );
};

export default BlocksSection;
