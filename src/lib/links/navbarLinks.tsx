import { LinkProps } from '@/lib/interfaces/clickable.interface';
import Heart from '@/components/SvgIconsComponents/Heart';
import User from '@/components/SvgIconsComponents/User';

export const navbarLeftLinks: LinkProps[] = [
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

export const navbarRightLinks: LinkProps[] = [
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
    text: 'Split currency / EUR',
    href: '?modal=currency',
    variant: 'nav',
  },
  {
    text: 'Contacts',
    href: '/contacts',
    variant: 'nav',
  },
];
