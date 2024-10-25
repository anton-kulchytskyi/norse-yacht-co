import Image from 'next/image';
import { currencyData } from '@/lib/currencyData';
import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import ModalWrapper from './ModalWrapper';

type CurrencyModalProps = {
  onClose: () => void;
};

const CurrencyModal = ({ onClose }: CurrencyModalProps) => {
  return (
    <ModalWrapper
      onClose={onClose}
    >
      <ul className="absolute top-20 right-44 bg-white px-4 py-4 rounded-2xl animate-scale-up">
        {currencyData.map((currency) => (
          <li
            key={currency.currencyName}
            className="mb-4 last:mb-0"
          >
            <ClickableComponent
              type="button"
              variant="currency"
              onClick={onClose}
            >
              {currency.currencyName}
              <Image
                src={currency.flag}
                alt={currency.currencyName}
                className=""
              />
            </ClickableComponent>
          </li>
        ))}
      </ul>
    </ModalWrapper>
  );
};

export default CurrencyModal;
