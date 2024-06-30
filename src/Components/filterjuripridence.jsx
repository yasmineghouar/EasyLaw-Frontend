import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";

export default function Filterjuripridence() {
    const [selectedType, setSelectedType] = useState('');
    
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
    };
  return (
    <div className='flex flex-col mt-5 mx-10'>
                
    <div className='flex flex-row gap-20 self-end'>
{/* المحكمة العليا و  مجلس الدولة */}
<div className='flex flex-row gap-2'>
    <button className='border-2 border-light_Blue px-3 py-2 shadow-sm rounded-md font-cairo text-Deep_Blue focus:text-my_yellow focus:bg-light_Blue'>مجلس الدولة</button>
    <button className='border-2 border-light_Blue px-3 py-2 shadow-sm rounded-md font-cairo text-Deep_Blue focus:text-my_yellow focus:bg-light_Blue'>المحكمة العليا</button>
</div>

<div className='flex flex-row gap-4'>
<div className='flex felx-row bg-my_yellow rounded-md shadow-sm pr-2'>
      <select id="lawType" className="font-cairo text-Deep_Blue py-2 bg-transparent  text-right"
    value={selectedType} onChange={handleTypeChange}>
    <option value="">ترتيب حسب الزمن </option>
    <option value="مرسوم"> من الاحدث الى الاقدم </option>
    <option value="قرار"> من الاقدم الى الاحدث </option>
    </select>
    {/* <IoFilter /> */}
</div>
{/* search bar  */}
<div className='px-5 py-2  flex flex-row justify-between inputStyle '> 
      <IoMdSearch className='text-Deep_Blue' />
      <input className='font-cairo bg-transparent border-0 outline-none focus:border-0' placeholder='البحث'/>
</div>

</div>
</div>
    

    {/* filter  */}
    <div className='flex flex-wrap-reverse gap-3 self-end my-5'> 
    
    
    
    <select id="lawType" className=" bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
    value={selectedType} onChange={handleTypeChange}>
    <option value=""> سنة الصدور</option>
    <option value="مرسوم">الشؤون الاجتماعية </option>
    <option value="قرار">بريد و مواصلات </option>
    <option value="امر">امن عمومي</option>
    <option value="تصريح">اشغال عمومية</option>
    <option value="تقرير">التعليم العالي</option>
    </select>

    <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
    value={selectedType} onChange={handleTypeChange}>
    <option value="">التكييف </option>
    <option value="مرسوم">الشؤون الاجتماعية </option>
    <option value="قرار">بريد و مواصلات </option>
    <option value="امر">امن عمومي</option>
    <option value="تصريح">اشغال عمومية</option>
    <option value="تقرير">التعليم العالي</option>
    </select>
    <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
    value={selectedType} onChange={handleTypeChange}>
    <option value=""> القسم</option>
    <option value="مرسوم">الشؤون الاجتماعية </option>
    <option value="قرار">بريد و مواصلات </option>
    <option value="امر">امن عمومي</option>
    <option value="تصريح">اشغال عمومية</option>
    <option value="تقرير">التعليم العالي</option>
    </select>
    <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
    value={selectedType} onChange={handleTypeChange}>
    <option value=""> الغرفة</option>
    <option value="مرسوم">الشؤون الاجتماعية </option>
    <option value="قرار">بريد و مواصلات </option>
    <option value="امر">امن عمومي</option>
    <option value="تصريح">اشغال عمومية</option>
    <option value="تقرير">التعليم العالي</option>
    </select>
    <select id="lawType" className="bg-transparent font-cairo border-2 border-light_Blue rounded-md shadow-sm text-Deep_Blue py-2 w-40 text-right"
    value={selectedType} onChange={handleTypeChange}>
    <option value="">الموضوع </option>
    <option value="مرسوم">الشؤون الاجتماعية </option>
    <option value="قرار">بريد و مواصلات </option>
    <option value="امر">امن عمومي</option>
    <option value="تصريح">اشغال عمومية</option>
    <option value="تقرير">التعليم العالي</option>
    </select>
    </div>

 <div className='flex flex-row gap-2 border-2 border-light_Blue rounded-md shadow-sm text-right p-2 self-end'>
 <input className="bg-transparent text-right self-end border-0 outline-none focus:border-0 text-Deep_Blue" placeholder='xx-xx-xxxx'/>
 <p>الى</p>
 <input className="bg-transparent text-right self-end border-0 outline-none focus:border-0 text-Deep_Blue" placeholder='xx-xx-xxxx'/>
 <p>الفترة الممتدة</p>
 </div>
   





</div>

  )
}
