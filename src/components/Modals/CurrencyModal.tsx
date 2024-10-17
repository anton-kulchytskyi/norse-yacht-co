import ModalWrapper from './ModalWrapper';

type CurrencyModalProps = {
  onClose: () => void;
};

const CurrencyModal = ({ onClose }: CurrencyModalProps) => {
  return (
    <ModalWrapper onClose={onClose}>
      <h2 className="text-xl font-bold">Currency modal</h2>
      <p>Add style and logic </p>
    </ModalWrapper>
  );
};

export default CurrencyModal;
