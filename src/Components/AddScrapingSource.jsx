import React from 'react'
import { MdCancelPresentation } from "react-icons/md";

export default function AddScrapingSource({ onClose , description}) {
  return (
    <div className='flex flex-col items-center w-auto md:w-1/4 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
    <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
    <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>{description} </h1>
    <div className='flex flex-col'>
      <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>:اسم المصدر</label>
        <input className='inputStyle w-full px-2 py-1'/>
      </div>
      <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>:رابط المصدر </label>
        <input className='inputStyle w-full px-2 py-1'/>
      </div>
      <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>: تحميل خوارزمية التجريف</label>
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
        <div className='flex flex-col mb-3'>
        <label className='text-right text-Deep_Blue font-cairo'>:  تواتر التجريف</label>
        <select id="lawType" className="self-end  font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-full text-right"
           >
           <option value=""> </option>
           <option value="مرسوم">بداية كل يوم</option>
           <option value="قرار">بداية كل اسبوع  </option>
           <option value="امر"> بداية كل شهر</option>
           <option value="امر"> بداية كل سنة</option>

        </select>    
        </div>

      </div>
      
    </div>
    <button className='btn_Bleu w-full mt-5 mb-2'>اضافة</button>
  </div>
  )
}
