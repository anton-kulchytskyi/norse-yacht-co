'use client';
import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { currencyData } from '@/data/currencyData';
import useLocalStorage from '@/hooks/useLocalStorage';

type CurrencyContextType = {
  selectedCurrency: string;
  selectedCurrencySymbol: string;
  currencyRates: { [key: string]: number };
  setCurrency: (currency: string) => void;
  updateCurrencyRates: () => Promise<void>;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

type CurrencyProviderProps = {
  children: ReactNode;
};

const currencySymbols: { [key: string]: string } = currencyData.reduce(
  (initObj, curr) => ({
    ...initObj,
    [curr.currencyName]: curr.symbol,
  }),
  {}
);

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({
  children,
}) => {
  const LOCAL_STORAGE_CURRENCY_KEY = 'selectedCurrency';
  const LOCAL_STORAGE_CURRENCY_TIME_UPDATE = 'lastUpdate';
  const LOCAL_STORAGE_RATES_KEY = 'currencyRates';

  const [selectedCurrency, setSelectedCurrency] = useLocalStorage<string>(
    LOCAL_STORAGE_CURRENCY_KEY,
    'EUR'
  );

  const [selectedCurrencySymbol, setSelectedCurrencySymbol] =
    useLocalStorage<string>(
      'selectedCurrencySymbol',
      currencySymbols[selectedCurrency]
    );
  const [currencyRates, setCurrencyRates] = useLocalStorage<{
    [key: string]: number;
  }>(LOCAL_STORAGE_RATES_KEY, {});

  const setCurrency = (currency: string) => {
    setSelectedCurrency(currency);
    setSelectedCurrencySymbol(currencySymbols[currency]);
  };

  const [lastUpdate, setLastUpdate] = useLocalStorage<string>(
    LOCAL_STORAGE_CURRENCY_TIME_UPDATE,
    ''
  );

  const updateCurrencyRates = async () => {
    try {
      const storedLastUpdateDate = lastUpdate && new Date(lastUpdate);
      const today = new Date().setHours(17, 0, 0, 0);

      if (
        !storedLastUpdateDate ||
        today - storedLastUpdateDate.getTime() >= 86400000
      ) {
        const response = await fetch(
          'https://api.frankfurter.app/latest?to=USD,GBP,NOK'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch currency rates');
        }

        const data = await response.json();
        setCurrencyRates(data.rates);

        const lastCurrencyUpdates = new Date(data.date).setHours(17, 0, 0, 0);
        setLastUpdate(new Date(lastCurrencyUpdates).toUTCString());
      }
    } catch (error) {
      // eslint-disable-next-line
      console.error('Error updating currency rates:', error);
    }
  };

  useEffect(() => {
    updateCurrencyRates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        selectedCurrencySymbol,
        currencyRates,
        setCurrency,
        updateCurrencyRates,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
