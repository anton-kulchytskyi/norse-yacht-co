import Block from './Block';

import { BlocksSectionData } from '@/data/mainPage/BlocksSectionData';

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
