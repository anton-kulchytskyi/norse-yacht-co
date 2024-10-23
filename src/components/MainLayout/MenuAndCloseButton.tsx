import { useRouter } from 'next/navigation';
import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import Menu from '@/components/SvgIconsComponents/Menu';
import Close from '@/components/SvgIconsComponents/Close';

type MenuAndCloseButtonProps = {
  modal: string | null;
};

const MenuAndCloseButton = ({ modal }: MenuAndCloseButtonProps) => {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return (
    <>
      {modal === 'mobileMenu' ? (
        <ClickableComponent
          text={<Close />}
          type="button"
          onClick={closeModal}
          variant="close"
        />
      ) : (
        <ClickableComponent
          text={<Menu />}
          href="?modal=mobileMenu"
          variant="menu"
        />
      )}
    </>
  );
};

export default MenuAndCloseButton;
