'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import CurrencyModal from '@/components/Modals/CurrencyModal';
import MobileMenuModal from '@/components/Modals/MobileMenuModal';

const NavbarModals = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const closeModal = () => {
    router.back();
  };
  return (
    <Suspense fallback={<p>loading ...</p>}>
      {modal === 'currency' && <CurrencyModal onClose={closeModal} />}
      {modal === 'mobileMenu' && <MobileMenuModal onClose={closeModal} />}
    </Suspense>
  );
};

export default NavbarModals;
