'use client';
import { useSearchParams } from 'next/navigation';

import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import Logo from '@/components/SvgIconsComponents/Logo';

import { navbarLeftLinks, navbarRightLinks } from '@/lib/links/navbarLinks';

import MenuAndCloseButton from './MenuAndCloseButton';

const NavbarLinks = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');

  return (
    <>
      <ul className="flex justify-start">
        <li className="mr-3 flex xl:hidden">
          <MenuAndCloseButton modal={modal} />
        </li>
        {navbarLeftLinks.map((link, i) => (
          <li
            key={i}
            className="mr-3 last:mr-0 hidden xl:flex"
          >
            <ClickableComponent
              text={link.text}
              href={link.href}
              variant={link.variant}
            />
          </li>
        ))}
      </ul>
      <span className="flex justify-center">
        <ClickableComponent
          text={<Logo />}
          href="/"
          variant="logo"
        />
      </span>
      <ul className="flex justify-end">
        {navbarRightLinks.map((link, i) => (
          <li
            key={i}
            className={`ml-3 first:ml-0 ${link.variant === 'nav' && 'hidden xl:flex'}`}
          >
            <ClickableComponent
              text={link.text}
              href={link.href}
              variant={link.variant}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarLinks;
