import Image from 'next/image';
import hero from '@/public/images/hero-img.jpg';
import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';

const HeroSection = () => {
  return (
    <div className="relative h-screen -mt-[54px] md:-mt-[62px] xl:-mt-[70px]">
      <Image
        src={hero}
        alt="Background Image"
        className="object-cover w-full h-full"
        quality={100}
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2>Select Your Dream</h2>
        <h1>Yacht Now</h1>
        <ClickableComponent
          href="/catalogue"
          variant="linkButtonPrimary"
        >
          View Gallery
        </ClickableComponent>
      </div>
    </div>
  );
};

export default HeroSection;
