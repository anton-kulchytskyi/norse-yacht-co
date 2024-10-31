import Image from 'next/image';

import QuotesImg from '@/public/icons/quotes.svg';

import { ReviewPerson } from '@/interfaces/reviewPerson.interface';

import FiveStars from './FiveStars';

const ReviewCard = ({
  sliderIdx,
  userName,
  userAvatar,
  date,
  reviewText,
}: ReviewPerson) => {
  return (
    <div
      className={`max-w-80 h-[26rem] flex flex-col justify-between p-6 border-2 rounded-lg ${sliderIdx % 2 ? 'border-primary' : 'border-secondary-100'}`}
    >
      <div className="space-y-4">
        <FiveStars />
        <p className="text-base">{reviewText}</p>
        <div className="flex justify-end">
          <Image
            src={QuotesImg}
            alt="QuotesImg"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src={userAvatar}
          width={60}
          height={60}
          alt={userName}
          className="rounded-full"
        />
        <div>
          <p className="text-xl font-baiJ">{userName}</p>
          <p className="text-xs font-baiJ text-grey-30">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
