// import React, { useState } from 'react'

// export default function FilterOffres() {
//     const [expiry, setExpiry] = useState('yearly');
//     const [pricing, setPricing] = useState('custom');

//   const handleExpiryChange = (event) => {
//     setExpiry(event.target.value);
//   };

//   const handlePricingChange = (event) => {
//     setPricing(event.target.value);
//   };
//   return (
//     <div className="flex flex-col justify-center items-center mt-10 ">
//     <h1  className='font-cairo text-3xl text-Deep_Blue'>تعرف على عروضنا المتنوعة والتي تناسب كافة احتياجاتك بأسعار تنافسية وجودة عالية</h1>

//     <div className="w-1/2 bg-light_Blue bg-opacity-25 rounded-md shadow-md py-4 mt-4">
//       <div className="flex flex-row">
//         <div className="flex-grow">
//           <label>:مدة الصلاحية لخدمة</label>
//           <div className='flex flex-col'>
//             <label>
//             سنويا
//               <input
//                 type="radio"
//                 value="yearly"
//                 checked={expiry === 'yearly'}
//                 onChange={handleExpiryChange}
//                 className='m-2'
//               />
              
//             </label>
//             <label>
//             شهريا
//               <input
//                 type="radio"
//                 value="monthly"
//                 checked={expiry === 'monthly'}
//                 onChange={handleExpiryChange}
//                 className='m-2'
//               />
//             </label>
//           </div>
//         </div>
//         <div className="flex-grow ml-4">
//           <label>:خطط التسعير</label>
//           <div className='flex flex-col'>
//             <label>
//             التسعير المخصص
//               <input
//                 type="radio"
//                 value="custom"
//                 checked={pricing === 'custom'}
//                 onChange={handlePricingChange}
//                 className='m-2'
//               />
            
//             </label>
//             <label>
//             التسعير المميز
//               <input
//                 type="radio"
//                 value="premium"
//                 checked={pricing === 'premium'}
//                 onChange={handlePricingChange}
//                 className='m-2'
//               />
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }
