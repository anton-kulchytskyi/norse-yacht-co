import { StaticImageData } from 'next/image';

export interface ReviewPerson {
  sliderIdx: number;
  userName: string;
  userAvatar: StaticImageData;
  date: string;
  reviewText: string;
}
