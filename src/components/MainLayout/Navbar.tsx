import { Suspense } from 'react';

import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';

import User from '@/components/SvgIconsComponents/User';
import Heart from '@/components/SvgIconsComponents/Heart';
import Menu from '@/components/SvgIconsComponents/Menu';
import Logo from '@/components/SvgIconsComponents/Logo';
import NavbarModals from './NavbarModals';

type LinkProps = {
  title: string | JSX.Element;
  path: string;
  variant?: 'button' | 'nav' | 'footer' | 'text' | 'icon';
};

const navbarLeftLinks: LinkProps[] = [
  {
    title: <Menu />,
    path: '?modal=mobileMenu',
  },

  {
    title: 'Yachts',
    path: '/catalogue',
    variant: 'nav',
  },
  {
    title: 'How it Works?',
    path: '/how-it-works',
    variant: 'nav',
  },
];
const navbarRightLinks: LinkProps[] = [
  {
    title: <Heart />,
    path: '/',
  },
  {
    title: <User />,
    path: '/',
  },
  {
    title: 'Split currency / EUR',
    path: '?modal=currency',
    variant: 'nav',
  },
  {
    title: 'Contacts',
    path: '/contacts',
    variant: 'nav',
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="relative z-10 grid grid-cols-[1fr_auto_1fr] gap-1 items-center pt-4 md:pt-6 xl:pt-8 px-5 md:px-12 xl:px-16">
        <ul className="flex justify-start">
          {navbarLeftLinks.map((link, i) => (
            <li
              key={i}
              className={`mr-3 last:mr-0 ${link.variant === 'nav' ? 'hidden xl:flex' : 'flex xl:hidden'}`}
            >
              <ClickableComponent
                text={link.title}
                href={link.path}
                variant={link.variant}
              />
            </li>
          ))}
        </ul>
        <span className="flex justify-center">
          <ClickableComponent
            text={<Logo />}
            href="/"
          />
        </span>
        <ul className="flex justify-end">
          {navbarRightLinks.map((link, i) => (
            <li
              key={i}
              className={`ml-3 first:ml-0 ${link.variant === 'nav' && 'hidden xl:flex'}`}
            >
              <ClickableComponent
                text={link.title}
                href={link.path}
                variant={link.variant}
              />
            </li>
          ))}
        </ul>
      </nav>
      <Suspense fallback={<p>loading ...</p>}>
        <NavbarModals />
      </Suspense>
    </>
  );
};

export default Navbar;
