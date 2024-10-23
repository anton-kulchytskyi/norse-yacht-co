import Link from 'next/link';
import { LinkProps } from '@/lib/interfaces/clickable.interface';

const LinkComponent = ({ href, variant, children }: LinkProps) => {
  let linkStyle = '';
  switch (variant) {
    case 'linkButtonPrimary':
      linkStyle =
        'bg-primary text-white rounded-[56px] py-2.5 px-10 text-lg font-medium hover:bg-secondary-100 active:bg-secondary-110 transition-colors';
      break;
    case 'linkButtonSecondary':
      linkStyle =
        'bg-secondary-100 rounded-[56px] py-2.5 px-10 text-lg font-medium hover:bg-secondary-110 active:bg-transparent active:text-secondary-110 active:border-2 active:border-secondary-110 active:border-solid transition';
      break;
    case 'text':
      linkStyle =
        'text-base text-secondary-100 underline font-normal hover:text-secondary-110 transition';
      break;
    case 'nav':
      linkStyle =
        'content-center hover:underline hover:text-secondary-100 transition-colors';
      break;
    case 'menu':
      linkStyle = 'text-black';
      break;
    case 'footer':
      linkStyle = 'hover:text-secondary-100 hover:underline transition';
      break;
    case 'imgContainer':
      linkStyle = 'w-full';
      break;
    case 'yachtName':
      linkStyle =
        'font-baiJ text-2xl sm:text-4xl hover:text-secondary-100 hover:underline';
      break;
    case 'icon':
      linkStyle = '';
      break;
    default:
      linkStyle = '';
  }

  return (
    <Link
      href={href}
      className={linkStyle}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
