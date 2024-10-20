import Link from 'next/link';
import { LinkProps } from '@/lib/interfaces/clickable.interface';

const LinkComponent = ({ text, href, variant }: LinkProps) => {
  let linkStyle = '';
  switch (variant) {
    case 'linkButton':
      linkStyle =
        'bg-primary rounded-[56px] py-2.5 px-10 text-lg font-medium hover:bg-secondary-100 transition-colors';
      break;
    case 'text':
      linkStyle =
        'text-base text-secondary-100 underline font-normal hover:text-secondary-110 transition';
      break;
    case 'nav':
      linkStyle =
        'text-black content-center hover:underline hover:text-secondary-100 transition-colors';
      break;
    case 'menu':
      linkStyle = 'text-black';
      break;
    case 'footer':
      linkStyle = 'hover:text-secondary-100 hover:underline transition';
      break;
    default:
      linkStyle = '';
  }

  return (
    <Link
      href={href}
      className={linkStyle}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
