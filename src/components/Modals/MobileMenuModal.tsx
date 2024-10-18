import ClickableComponent from '../ClickableComponennt/ClickableComponent';
import ModalWrapper from './ModalWrapper';

type MobileMenuModalProps = {
  onClose: () => void;
};

type LinkProps = {
  title: string | JSX.Element;
  path: string;
  variant?: 'button' | 'nav' | 'footer' | 'text' | 'icon' | 'menu';
};

const mobileMenuLinks: LinkProps[] = [
  {
    title: 'Yachts',
    path: '/catalogue',
    variant: 'menu',
  },
  {
    title: 'How it Works?',
    path: '/how-it-works',
    variant: 'menu',
  },
  {
    title: 'Split currency / EUR',
    path: '',
    variant: 'menu',
  },
  {
    title: 'Contacts',
    path: '/contacts',
    variant: 'menu',
  },
  {
    title: 'Follow us',
    path: '',
    variant: 'menu',
  },
];

const MobileMenuModal = ({ onClose }: MobileMenuModalProps) => {
  const wrapperStyle = 'bg-white relative w-full h-full';
  return (
    <ModalWrapper
      onClose={onClose}
      styling={wrapperStyle}
    >
      <ul className="pt-16">
        {mobileMenuLinks.map((link, i) => (
          <li
            key={i}
            className="text-center"
          >
            <ClickableComponent
              text={link.title}
              href={link.path}
              variant={link.variant}
            />
          </li>
        ))}
      </ul>
    </ModalWrapper>
  );
};

export default MobileMenuModal;
