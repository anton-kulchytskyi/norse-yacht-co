import Image from 'next/image';
import hero from '@/public/images/hero-img.jpg';
import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';

const HeroSection = () => {
  return (
    <div className="relative h-screen -mt-32">
      <Image
        src={hero}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2>Select Your Dream</h2>
        <h1>Yacht Now</h1>
        <ClickableComponent
          text="View Gallery"
          href="/catalogue"
          variant="linkButton"
        />
      </div>
    </div>
  );
};

export default HeroSection;
