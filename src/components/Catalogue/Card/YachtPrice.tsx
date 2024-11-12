'use client';
import { useCurrency } from '@/context/CurrencyContext';

type YachtPriceProps = {
  price: string;
  old_price: string;
};

const priceToRender = (price: number, currRate = 1): string => {
  return Math.round(price * currRate).toLocaleString('en-US');
};

const YachtPrice = ({ price, old_price }: YachtPriceProps) => {
  const { selectedCurrency, currencyRates } = useCurrency();
  const showOldPrice = +old_price > +price;
  const updatePrice = priceToRender(
    +price,
    currencyRates[selectedCurrency.name]
  );
  const updatePriceOld = priceToRender(
    +old_price,
    currencyRates[selectedCurrency.name]
  );
  return (
    <span className="text-secondary-100 text-xl font-medium md:text-3xl">
      {`${selectedCurrency.symbol} ${updatePrice}`}
      {showOldPrice && (
        <span className="ml-4 text-2xl line-through text-grey-80">{`${selectedCurrency.symbol} ${updatePriceOld}`}</span>
      )}
    </span>
  );
};

export default YachtPrice;
