import React, { useEffect, useState } from 'react';
import OfferComponent from '../Components/offerComponent';

export default function OffersList({ admin, onOfferClick, tarifications  }) {
  
  const [selectedCurrency, setSelectedCurrency] = useState('DZ');
  const currencies = [
    { device: 'DZ', value: 1 },
    { device: 'EUR', value: 144.59 },
    { device: 'USD', value: 134.58 },
    // { device: 'RUB', value: 1.47 } 
  ];

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const calculatePrice = (price) => {
    const selectedCurrencyValue = currencies.find(currency => currency.device === selectedCurrency)?.value || 1;
    return (price / selectedCurrencyValue).toFixed(2);
  };
  
  return (
    <div className='flex flex-col mx-20 my-5'>
   
   {!admin &&  (<div className="flex flex-col justify-center items-center mt-10 ">
    <h1  className='font-cairo text-3xl text-Deep_Blue'>تعرف على عروضنا المتنوعة والتي تناسب كافة احتياجاتك بأسعار تنافسية وجودة عالية</h1>

    <div className="w-1/2 bg-light_Blue bg-opacity-25 rounded-md shadow-md py-4 mt-4">

       <div className='mt-5'>
        <p>:اختر العملة</p>
        {currencies.map(currency => (
          <label key={currency.device} className='ml-3'>
            <input
              type='radio'
              value={currency.device}
              checked={selectedCurrency === currency.device}
              onChange={handleCurrencyChange}
            />
            {currency.device.toUpperCase()}
          </label>
        ))}
      </div>

    </div>
  </div>) }
  
      
      
      
      
      <h1 className='text-Deep_Blue text-xl text-right'>قائمة العروض</h1>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {tarifications.map(tarification => (
          <OfferComponent
            key={tarification.id}
            onClick={() => onOfferClick(tarification)}
            active={tarification.active}
            description={tarification.description}
            duree={tarification.duree}
            serviceName={tarification.serviceName}
            tarif={calculatePrice(tarification.tarif)}
            admin={admin}
            id={tarification.id}
            device={selectedCurrency}
            
          />
        ))}
      </div>
    </div>
  );
}

