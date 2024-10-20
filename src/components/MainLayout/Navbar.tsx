import { Suspense } from 'react';

import NavbarLinks from './NavbarLinks';
import NavbarModals from './NavbarModals';

const Navbar = () => {
  return (
    <>
      <nav className="relative z-20 grid grid-cols-[1fr_auto_1fr] gap-1 items-center pt-4 md:pt-6 xl:pt-8 px-5 md:px-12 xl:px-16">
        <NavbarLinks />
      </nav>
      <Suspense fallback={<p>loading ...</p>}>
        <NavbarModals />
      </Suspense>
    </>
  );
};

export default Navbar;
