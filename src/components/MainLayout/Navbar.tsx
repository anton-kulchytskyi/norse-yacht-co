'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DynamicNavbarLinks = dynamic(() => import('./NavbarLinks'), {
  ssr: false,
});

// import NavbarLinks from './NavbarLinks';
import NavbarModals from './NavbarModals';

const Navbar = () => {
  return (
    <>
      <Suspense fallback={<p>loading ...</p>}>
        <nav className="relative z-20 grid grid-cols-[1fr_auto_1fr] gap-1 items-center pt-4 md:pt-6 xl:pt-8 px-5 md:px-12 xl:px-16 -mb-[54px] md:-mb-[62px] xl:-mb-[70px]">
          <DynamicNavbarLinks />
        </nav>
        <NavbarModals />
      </Suspense>
    </>
  );
};

export default Navbar;
