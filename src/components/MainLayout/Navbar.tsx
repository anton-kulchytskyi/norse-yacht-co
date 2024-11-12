'use client';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// import NavbarSkeleton from '../Skeletons/NavbarSkeleton';
const DynamicNavbarLinks = dynamic(() => import('./NavbarLinks'), {
  ssr: false,
});
import NavbarModals from './NavbarModals';

const Navbar = () => {
  return (
    <>
      <Suspense fallback={null}>
        {/* <Suspense
        fallback={
          <p className="text-start text-2xl text-error">Loading nav bar</p>
        }
      > */}
        <nav className="relative z-20 grid grid-cols-[1fr_auto_1fr] gap-1 items-center pt-4 md:pt-6 xl:pt-8 px-5 md:px-16">
          <DynamicNavbarLinks />
        </nav>
        <NavbarModals />
      </Suspense>
    </>
  );
};

export default Navbar;
