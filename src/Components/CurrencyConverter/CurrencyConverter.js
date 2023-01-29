import React , {useEffect , useState}from 'react'
import CurrencyOptions from '../CurrencyOptions/CurrencyOptions'
import Gpay from '../Gpay/Gpay'
import './CurrencyConverter.css'
import Gpaycard from './Gpaycard'

function CurrencyConverter() {
  const [currencyOptions , setCurrencyOptions] = useState([])
  const [fromAmount , setFromAmount] = useState(0)
  const [toAmount , setToAmount] = useState(0)
  const [fromCurrency , setFromCurrency] = useState('')
  const [toCurrency , setToCurrency] = useState('')
  const [currencyNames , setCurrencyNames] = useState({})
  useEffect(() =>{
      fetch(`https://api.frankfurter.app/currencies`).then(res => res.json()).then(data => {
        setCurrencyOptions(Object.keys(data))
        setFromCurrency(Object.keys(data)[0])
        setToCurrency(Object.keys(data)[0])
        setCurrencyNames(data)
      })
  },[])
  useEffect(() => {
    if(parseInt(fromAmount) === 0){
      setToAmount(0)
    } else if(fromAmount === ''){
      setToAmount('')
    } else if(fromCurrency === toCurrency){
      setToAmount(fromAmount)
    } else {
      fetch(`https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`).then(res => res.json()).then(data => setToAmount(Object.values(data.rates)[0]))
    }
  },[fromCurrency , toCurrency , fromAmount , toAmount])

  
  return (
    
    <div className="container my-4">
      <div className='row'>
        <div className='col-12 col-md-6'>
    <div className = "app currencycon">
      {/* <h1>Currency Converter</h1> */}
      <div className = "container">
        <div className = "item1">
          <div className = "opt-1">
            <h4>Transfer From : </h4>
            <CurrencyOptions prop = "From currency" fromCurrency = {fromCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setFromCurrency(e.target.value)}/>
          </div>
          <div className = "opt-2 my-4">
            <h4>Transfer To : </h4>
            <CurrencyOptions prop = "To currency" toCurrency = {toCurrency} currencyOptions = {currencyOptions} updateCurrency = {e => setToCurrency(e.target.value)}/>
          </div>
        </div>
        <div className = "item2">
          <h4>Enter Amount in {currencyNames[`${fromCurrency}`]} : </h4>
          {/* <h2>Output in {currencyNames[`${toCurrency}`]} : </h2> */}
        </div>
        <div className = "item3">
          <input type = "text" autoComplete = "off" value = {fromAmount} className = "input" onChange = {e => setFromAmount(e.target.value)}/>
          <h3>=</h3>

          <h4>Pay in {currencyNames[`${toCurrency}`]} : </h4>

          <input className = "output" disabled value = {toAmount} type="text"/>
        </div>
        <div className = "item4">
          <h4>{fromAmount} {fromCurrency} = {toAmount} {toCurrency}</h4>
        </div>
      </div>
    </div>
    <div className='my-4'>
    
    </div>
    </div>

    <div className='col-12 col-md-6 my-4'>
      <Gpaycard/>
      </div>

    </div>

    
    </div>
  )
}

export default CurrencyConverter
