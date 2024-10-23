import { mobileMenuLinks } from '@/lib/links/mobileMenuLinks';
import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import ModalWrapper from './ModalWrapper';

type MobileMenuModalProps = {
  onClose: () => void;
};

const MobileMenuModal = ({ onClose }: MobileMenuModalProps) => {
  const contentStyle = 'bg-white relative w-full h-full pt-16 xs:pt-28';
  return (
    <ModalWrapper
      onClose={onClose}
      contentStyle={contentStyle}
    >
      <ul>
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
