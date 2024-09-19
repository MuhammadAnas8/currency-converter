import React, { useContext } from 'react'
import './hero.css'
import { CurrencyContext } from '../../context/CurrencyContext';


const Heor = () => {
  const { fromCurrency, toCurrency,getConversionRate} = useContext(CurrencyContext);
  return (
    <div className='hero container'>
      <div className="content">
      <h1>CURRENCY CONVERTER</h1>
      <h3>{fromCurrency} to {toCurrency}</h3> 
      <h3>1 {fromCurrency} = {(getConversionRate()).toFixed(3)} {toCurrency}</h3>
      </div>
    </div>
  )
}

export default Heor
