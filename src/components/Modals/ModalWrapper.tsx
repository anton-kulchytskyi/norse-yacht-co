'use client';
import { ReactNode, useEffect } from 'react';

type ModalWrapperProps = {
  onClose: () => void;
  children: ReactNode;
};

const ModalWrapper = ({ onClose, children }: ModalWrapperProps) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed z-10 inset-0 bg-transparent flex items-center justify-center"
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
