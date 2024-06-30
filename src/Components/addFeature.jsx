import React from 'react'
import { MdCancelPresentation } from "react-icons/md";

export default function addFeature({ onClose }) {
  return (
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
    <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
    <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>اضافة معيار للتصنيف  </h1>
    <div className='flex flex-col'>
      
      <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>:المعيار</label>
        <input className='inputStyle w-full px-5 py-2'/>
      </div>
      <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>:قيمته </label>
        <input className='inputStyle w-full px-5 py-2'/>
      </div>
    </div>

    <button className='btn_Bleu w-full mt-5 mb-2'>اضافة</button>
  
  </div>
  )
}
