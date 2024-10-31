import { BlocksSectionData } from '@/data/mainPage/BlocksSectionData';

import Block from './Block';

const BlocksSection = () => {
  return (
    <>
      {BlocksSectionData.map((block, i) => (
        <Block
          key={i}
          data={block}
        />
      ))}
    </>
  );
};

export default BlocksSection;
