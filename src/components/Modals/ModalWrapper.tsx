'use client';
import { ReactNode, useEffect } from 'react';

type ModalWrapperProps = { onClose: () => void; children: ReactNode };

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
      className="fixed z-10 inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg relative max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 text-4xl"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
