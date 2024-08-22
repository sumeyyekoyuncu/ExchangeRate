import React, { useState } from 'react'
import '../css/Currency.css'
import { BsArrowRightCircle } from "react-icons/bs";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_HkerzEroVK3pN2H5QEk9hcv7KMd75RHSy9I5Thwl";


function Currency() {
    const [amount,setamount]=useState(1);
    const[fromcurrency,setfromcurrency]=useState('USD');
    const[tocurrency,settocurrency]=useState('TRY');
    const[result,setresult]=useState(0);

    const exchange =async()=>{
        /*console.log(amount);
        console.log(fromcurrency)
        console.log(tocurrency)*/
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromcurrency}`);

    //const result= console.log(response.data.data[tocurrency])*amount;
    setresult(response.data.data[tocurrency]*amount);

    }

  return (
    
    <div className='currency-div'>
        <div>
            <h3 style={{marginTop:'-20px',fontFamily:'arial'}}>EXCHANGE RATE APPLİCATİON</h3>
        </div>
        <div>
          <input value={amount} onChange={(e)=>setamount(e.target.value)} type="number" className='amount'/>
        <select onChange={(e)=>setfromcurrency(e.target.value)} className='from-currency-option'>
            <option >USD</option>
            <option >EUR</option>
            <option >TRY</option>
        </select>
        <BsArrowRightCircle style={{fontSize:'25px',marginRight:'10px',marginTop:'7px'}} />
        <select onChange={(e)=>settocurrency(e.target.value)} className='to-currency-option'>
            <option >TRY</option>
            <option >EUR</option>
            <option >USD</option>
        </select>
        <input value={result} onChange={(e)=>setresult(e.target.value)} type="number" className='result'/> 
         
        </div>
        <div>
            <button 
            onClick={exchange} className='exchange-button'>EXCHANGE</button>
        </div>
        

    </div>
  )
}

export default Currency