'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import NavbarFooterLogo from '@/components/SvgIconsComponents/NavbarFooterLogo';

import { navbarLeftLinks, navbarRightLinks } from '@/lib/links/navbarLinks';

import MenuAndCloseButton from './MenuAndCloseButton';

const NavbarLinks = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');

  return (
    <>
      <ul className="flex justify-start">
        <li className="mr-3 flex xl:hidden">
          <Suspense fallback={<p>loading ...</p>}>
            <MenuAndCloseButton modal={modal} />
          </Suspense>
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
          text={<NavbarFooterLogo navbar />}
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
