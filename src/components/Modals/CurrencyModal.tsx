import Image from 'next/image';
import { currencyData } from '@/lib/currencyData';
import ClickableComponent from '@/components/ClickableComponennt/ClickableComponent';
import { useCurrency } from '@/utils/context/CurrencyContext';
import ModalWrapper from './ModalWrapper';

type CurrencyModalProps = {
  onClose: () => void;
};

const CurrencyModal = ({ onClose }: CurrencyModalProps) => {
  const { selectedCurrency, setCurrency } = useCurrency();

  const currencyModalHandler = (currency: string) => {
    setCurrency(currency);
    onClose();
  };

  return (
    <ModalWrapper onClose={onClose}>
      <ul
        onClick={(e) => e.stopPropagation()}
        className="absolute top-20 right-44 bg-white px-4 py-4 rounded-2xl animate-scale-up"
      >
        {currencyData.map((currency) => (
          <li
            key={currency.currencyName}
            className={`mb-4 last:mb-0 border border-transparent ${selectedCurrency === currency.currencyName && 'border-b-secondary-100 rounded-none'} hover:border-b-primary`}
          >
            <ClickableComponent
              type="button"
              variant="currency"
              onClick={() => currencyModalHandler(currency.currencyName)}
            >
              {currency.currencyName}
              <Image
                src={currency.flag}
                alt={currency.currencyName}
              />
            </ClickableComponent>
          </li>
        ))}
      </ul>
    </ModalWrapper>
  );
};

export default CurrencyModal;
