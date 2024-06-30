import React from 'react'
import CIB from '../Images/payment_Img/CIB.png';
import { MdCancelPresentation } from "react-icons/md";

export default function cibPayement({ onClose }) {
  return ( 
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
    <MdCancelPresentation className='text-Deep_Blue self-end' onClick={onClose} />
  <h1 className='text-2xl  font-cairo font-bold text-Deep_Blue mb-5'> يرجى إدخال بيانات حساب سيب الخاصة بك لإتمام عملية الدفع</h1>
  <div className='flex flex-row gap-5'>
    <img src={CIB} alt="Dahabia" className='w-28 self-center h-20 hover:shadow-sm hover:shadow-my_yellow' />
    <div className='flex flex-col'>
     <div className='flex flex-col'>
        <label className='text-right text-Deep_Blue font-cairo'>رقم الحساب</label>
        <input className='inputStyle px-5 py-2'/>
     </div>

     <div className='flex flex-col'>
        <label className='text-right text-Deep_Blue font-cairo'> :رقم السري </label>
        <input className='inputStyle px-5 py-2'/>
     </div>

     <div className='flex flex-col'>
        <label className='text-right text-Deep_Blue font-cairo'> :كود الحماية </label>
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
