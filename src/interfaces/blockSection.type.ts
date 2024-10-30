import { StaticImageData } from 'next/image';

export type BlockSection = {
  title: string;
  subtitle: string;
  desc: string;
  img: StaticImageData;
  logoTxt: string;
  logoSubTxt: string;
  order: boolean;
};
