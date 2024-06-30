import React from 'react'
import { MdCancelPresentation } from "react-icons/md";

export default function ScrapingPDF({ onClose , description , actione }) {
  return (
    <div>
        <div className='flex flex-col items-center w-auto  px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
    <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
    <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>{description} </h1>
    <div className='flex flex-col'>
      
      <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>{actione}  </label>
        <input type='file' className='inputStyle w-full px-2 py-1'/>
      </div>
      
        <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>: محتوى المصدر </label>
        <select id="lawType" className=" self-end  font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2  w-full text-right"
            >
           <option value=""> </option>
           <option value="مرسوم">القوانين الاساسية  </option>
           <option value="قرار">الاجتهادات القضائية </option>
           <option value="امر"> الاخبار</option>
        </select>
      </div>
      <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>: تحميل خوارزمية التجريف  </label>
        <input type='file' className='inputStyle w-full px-2 py-1'/>
      </div>
    </div>
    <button className='btn_Bleu w-full mt-5 mb-2'>تجريف</button>
  </div>
    </div>
  )
}
