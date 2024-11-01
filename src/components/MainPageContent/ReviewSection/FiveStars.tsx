import Image from 'next/image';
import StarImg from '@/public/icons/stars/star.svg';
import StarEmptyImg from '@/public/icons/stars/star_empty.svg';

const FiveStars = () => {
  const stars = Array.from({ length: 4 }, (_, i) => {
    return (
      <Image
        key={i}
        src={StarImg}
        alt="Star Image"
      />
    );
  });

  const isFilled = Math.random() < 0.8;

  stars.push(
    <>
      {isFilled ? (
        <Image
          key={4}
          src={StarImg}
          alt="Star Image"
        />
      ) : (
        <Image
          key={5}
          src={StarEmptyImg}
          alt="Star Image"
        />
      )}
    </>
  );

  return <div className="flex gap-1">{stars}</div>;
};

export default FiveStars;
