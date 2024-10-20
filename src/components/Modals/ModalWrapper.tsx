'use client';
import { ReactNode, useEffect } from 'react';

type ModalWrapperProps = {
  onClose: () => void;
  children: ReactNode;
  contentStyle?: string;
};

const ModalWrapper = ({
  onClose,
  children,
  contentStyle = '',
}: ModalWrapperProps) => {
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
      <div
        className={contentStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
