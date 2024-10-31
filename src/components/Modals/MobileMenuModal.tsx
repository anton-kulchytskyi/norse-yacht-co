import ClickableComponent from '@/components/ClickableComponent/ClickableComponent';
import ModalWrapper from './ModalWrapper';

import { mobileMenuLinks } from '@/data/links/mobileMenuLinks';

type MobileMenuModalProps = {
  onClose: () => void;
};

const MobileMenuModal = ({ onClose }: MobileMenuModalProps) => {
  return (
    <ModalWrapper onClose={onClose}>
      <ul
        onClick={(e) => e.stopPropagation()}
        className="bg-white relative w-full h-full pt-16 xs:pt-28 animate-slide-in-left"
      >
        {mobileMenuLinks.map((link, i) => (
          <li
            key={i}
            className="text-center pb-8"
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
    </ModalWrapper>
  );
};

export default MobileMenuModal;
