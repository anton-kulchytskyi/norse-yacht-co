import { LinkProps } from '@/interfaces/clickable.interface';

interface MobileMenuLinksArray extends LinkProps {
  text: string | JSX.Element;
}

export const mobileMenuLinks: MobileMenuLinksArray[] = [
  {
    text: 'Yachts',
    href: '/catalogue',
    variant: 'menu',
  },
  {
    text: 'How it Works?',
    href: '/how-it-works',
    variant: 'menu',
  },
  {
    text: 'My account',
    href: '',
    variant: 'menu',
  },
  {
    text: 'Split currency',
    href: '',
    variant: 'menu',
  },
  {
    text: 'Contacts',
    href: '/contacts',
    variant: 'menu',
  },
  {
    text: 'Follow us',
    href: '',
    variant: 'menu',
  },
];
