import ModalWrapper from './ModalWrapper';

type MobileMenuModalProps = {
  onClose: () => void;
};

const MobileMenuModal = ({ onClose }: MobileMenuModalProps) => {
  return (
    <ModalWrapper onClose={onClose}>
      <h2 className="text-xl font-bold">Menu for mobile</h2>
      <p>Add style and logic </p>
    </ModalWrapper>
  );
};

export default MobileMenuModal;
