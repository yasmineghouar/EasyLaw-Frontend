import React from 'react'
import dahabia from '../Images/payment_Img/dahabia.png';
import { MdCancelPresentation } from "react-icons/md";

export default function dahabiaPayment({ onClose }) {
  return (
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
        <MdCancelPresentation className='text-Deep_Blue self-end' onClick={onClose} />
      <h1 className='text-2xl  font-cairo font-bold text-Deep_Blue mb-5'>يرجى إدخال بيانات بطاقة دهبية الخاصة بك لإتمام عملية الدفع</h1>
      <div className='flex flex-row gap-5'>
        <img src={dahabia} alt="Dahabia" className='w-28 self-center h-20 hover:shadow-sm hover:shadow-my_yellow' />
        <div className='flex flex-col'>
         <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>رقم البطاقة</label>
            <input className='inputStyle px-5 py-2'/>
         </div>

         <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'> :تاريخ انتهاء الصلاحية</label>
            <input className='inputStyle px-5 py-2'/>
         </div>

         <div className='flex flex-col'>
            <label className='text-right text-Deep_Blue font-cairo'>:الرمز السري</label>
            <input className='inputStyle px-5 py-2'/>
         </div>
        </div>
      </div>
      <div className="flex flex-row self-end mr-3 mt-2">
      <label className="text-Deep_Blue font-cairo">
        توافق على شروط الاستخدام وسياسة الخصوصية
      </label>
      <input type="checkbox" className="ml-2"/>
    </div>
      <button className='btn_Bleu w-full mt-5 mb-2'>واصل</button>
    </div>
  ) 
}
