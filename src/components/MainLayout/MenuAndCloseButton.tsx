import { useRouter } from 'next/navigation';
import ClickableComponent from '@/components/ClickableComponent/ClickableComponent';
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
          type="button"
          onClick={closeModal}
          variant="close"
        >
          <Close />
        </ClickableComponent>
      ) : (
        <ClickableComponent
          href="?modal=mobileMenu"
          variant="menu"
        >
          <Menu />
        </ClickableComponent>
      )}
    </>
  );
};

export default MenuAndCloseButton;
