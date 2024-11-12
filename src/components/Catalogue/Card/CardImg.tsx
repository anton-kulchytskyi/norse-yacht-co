import Image from 'next/image';
import { fetchImgUrl } from '@/utils/aws/getImageFromAWS';

const IMAGE_600_400 = 'https://fakeimg.pl/600x400?text=Norse+Yacht+Co.';

type CardImgProps = {
  keyImg: string;
};

const CardImg = async ({ keyImg }: CardImgProps) => {
  const currImg = (await fetchImgUrl(keyImg)) || IMAGE_600_400;

  return (
    <Image
      src={currImg}
      fill
      sizes="100vw"
      className="w-full h-60 object-cover hover:rounded-lg"
      alt="main_yacht_img"
    />
  );
};

export default CardImg;
