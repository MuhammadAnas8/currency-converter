import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [fromCurrency,setFromCurrency] = useState('USD');
  const [toCurrency,setToCurrency] = useState('PKR');
  const [currencies, setCurrenies] = useState({});

  const getConversionRate = () => {
    const to = toCurrency.toLocaleLowerCase();
    return currencies[to] || 0; 
  };
  return (
    <CurrencyContext.Provider value={{ fromCurrency, toCurrency, setFromCurrency, setToCurrency,currencies, setCurrenies,getConversionRate }}>
      {children}
    </CurrencyContext.Provider>
  );
};
