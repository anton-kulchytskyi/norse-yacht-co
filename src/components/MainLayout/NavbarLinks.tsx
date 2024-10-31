'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import ClickableComponent from '@/components/ClickableComponent/ClickableComponent';
import NavbarFooterLogo from '@/components/SvgIconsComponents/NavbarFooterLogo';

import { navbarLeftLinks, navbarRightLinks } from '@/data/links/navbarLinks';

import { useCurrency } from '@/context/CurrencyContext';
import MenuAndCloseButton from './MenuAndCloseButton';

const NavbarLinks = () => {
  const { selectedCurrency } = useCurrency();
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
            className="mr-9 last:mr-0 hidden xl:flex"
          >
            <ClickableComponent
              href={link.href}
              variant={link.variant}
            >
              {link.text}
            </ClickableComponent>
          </li>
        ))}
      </ul>
      <span className="flex justify-center">
        <ClickableComponent
          href="/"
          variant="logo"
        >
          <NavbarFooterLogo navbar />
        </ClickableComponent>
      </span>
      <ul className="flex justify-end highlight-second">
        {navbarRightLinks.map((link, i) => (
          <li
            key={i}
            className={`ml-9 first:ml-0 ${link.variant === 'nav' && 'hidden xl:flex'}`}
          >
            <ClickableComponent
              href={link.href}
              variant={link.variant}
            >
              {link.href === '?modal=currency'
                ? `${link.text} / ${selectedCurrency}`
                : link.text}
            </ClickableComponent>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarLinks;
