import React, { useContext, useEffect, useState } from "react";
import "./converter.css";
import countryList from "../../Data/currencyList.js";
import { IoMdSwap } from "react-icons/io";
import { CurrencyContext } from "../../context/CurrencyContext.jsx";
const Converter = () => {


   const { fromCurrency, toCurrency, setFromCurrency, setToCurrency,currencies, setCurrenies,getConversionRate} = useContext(CurrencyContext);
    const [amount,setAmount] = useState(1);
  const [fromCountry,setFromCountry] = useState('US');
//   const [fromCurrency,setFromCurrency] = useState('USD');
  const [toCountry,setToCountry] = useState('PK');
//   const [toCurrency,setToCurrency] = useState('PKR');
//   const [currencies, setCurrenies] = useState({});

    useEffect(() => {
      const fetchRates = async () => {
        const from = fromCurrency.toLocaleLowerCase();
        const to = toCurrency.toLocaleLowerCase();
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
       try{
           const res = await fetch(url)
           const data = await res.json();
           setCurrenies(data[from]);
       }
       catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
      };
      fetchRates();
    }, [fromCurrency,toCurrency]);

    const swap= (e)=>{
        e.preventDefault();
        const [l,m] = [fromCountry,fromCurrency]
       setFromCountry(toCountry)
       setFromCurrency(toCurrency)
       setToCountry(l)
       setToCurrency(m)        
    }
  const handleFromChange = (e) => {
    setFromCountry(countryList[e]);
    setFromCurrency(e);    
  };
  const handleToChange = (e) => {
    setToCountry(countryList[e]);
    setToCurrency(e);    
  };


  return (
    <div className="converter">
      <form>
        <label htmlFor="amount">
          <p>Amount</p>
          <div className="box">
            <input type="number" min={0} value={amount} onChange={(e)=>{setAmount(e.target.value)}} name="amount" id="amount"  defaultValue={1}/>
          </div>
        </label>

        <label htmlFor="from">
          <p>From</p>
          <div className="box">
            <img src={`https://flagsapi.com/${fromCountry}/flat/32.png`} />
            <select
              id="from-currency"
              value={fromCurrency}
              onChange={(e) => handleFromChange(e.target.value)}
            >
              {Object.entries(countryList).map(([curr, code,index]) => {
                return (
                  <option value={curr} key={index}>
                    {curr}
                  </option>
                );
              })}
            </select>
          </div>
        </label>
        <button onClick={(e)=> swap(e)}>{'Swap '} 
        <IoMdSwap className="icon" size={20}/>
        </button>

        <label htmlFor="to">
          <p>To</p>
          <div className="box">
            <img src={`https://flagsapi.com/${toCountry}/flat/32.png`} />
            <select
              id="to-currency"
              value={toCurrency}
              onChange={(e) => handleToChange(e.target.value)}
            >
              {Object.entries(countryList).map(([curr, code,index]) => {
                return <option key={index} value={curr}>{curr}</option>;
              })}
            </select>
          </div>
        </label>
      </form>

<div className="outputs">
  <h2>{amount * 1} {fromCurrency} = {(amount * getConversionRate()).toFixed(3)} {toCurrency}</h2>
  <table>
    <thead>
      <tr>
        <th>{fromCurrency}</th>
        <th>{toCurrency}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>{(getConversionRate()).toFixed(3)}</td>
      </tr>
      <tr>
        <td>10</td>
        <td>{(10 * getConversionRate()).toFixed(3)}</td>
      </tr>
      <tr>
        <td>50</td>
        <td>{(50 * getConversionRate()).toFixed(3)}</td>
      </tr>
      <tr>
        <td>100</td>
        <td>{(100 * getConversionRate()).toFixed(3)}</td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Converter;
