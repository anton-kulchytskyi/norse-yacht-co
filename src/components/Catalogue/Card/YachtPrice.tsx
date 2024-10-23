// 'use client';
// import { useCurrency } from '@/context/CurrencyContext';

type YachtPriceProps = {
  price: string;
  old_price: string;
};

const priceToRender = (price: number, curr = 1): string => {
  return Math.round(price * curr).toLocaleString('en-US');
};

const YachtPrice = ({ price, old_price }: YachtPriceProps) => {
  // const { selectedCurrency, selectedCurrencySymbol, currencyRates } =
  //   useCurrency();
  const selectedCurrencySymbol = '$';
  const showOldPrice = +old_price > +price;
  const updatePrice = priceToRender(+price);
  const updatePriceOld = priceToRender(+old_price);
  return (
    <span className="text-secondary-100 text-xl font-medium md:text-3xl">
      {`${selectedCurrencySymbol} ${updatePrice}`}
      {showOldPrice && (
        <span className="ml-4 text-2xl line-through text-grey-80">{`${selectedCurrencySymbol} ${updatePriceOld}`}</span>
      )}
    </span>
  );
};

export default YachtPrice;
