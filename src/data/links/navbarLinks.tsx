import { LinkProps } from '@/interfaces/clickable.interface';
import Heart from '@/components/SvgIconsComponents/Heart';
import User from '@/components/SvgIconsComponents/User';

interface NavbarLinksArrays extends LinkProps {
  text: string | JSX.Element;
}

export const navbarLeftLinks: NavbarLinksArrays[] = [
  {
    text: 'Yachts',
    href: '/catalogue',
    variant: 'nav',
  },
  {
    text: 'How it Works?',
    href: '/how-it-works',
    variant: 'nav',
  },
];

export const navbarRightLinks: NavbarLinksArrays[] = [
  {
    text: <Heart />,
    href: '/',
    variant: 'icon',
  },
  {
    text: <User />,
    href: '/',
    variant: 'icon',
  },
  {
    text: 'Split currency',
    href: '?modal=currency',
    variant: 'nav',
  },
  {
    text: 'Contacts',
    href: '/contacts',
    variant: 'nav',
  },
];
