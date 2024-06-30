import React from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function indexedLawTable({onClick1}) {
  return (
    <div className='flex flex-col mt-5'>
        <div className='mr-8 px-5 py-2 flex flex-row justify-between inputStyle md:ml-auto'>
          <IoMdSearch className='text-Deep_Blue' />
          <input className='w-full text-right font-cairo border-0 bg-transparent outline-none focus:border-0' placeholder='البحث' />
        </div>
        <h1 className='mr-8 mt-5 text-xl font-cairo text-Deep_Blue text-right'>قائمة القوانين المجرفة </h1> 
<div className="mt-3 flex justify-center">  
    <table className="w-full max-w-4xl">
      <thead>
        <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
        <th className="py-2 px-4">العملية</th>
          <th className="py-2 px-4">تاريخ التجريف</th>
          <th className="py-2 px-4">الفهرسة  </th>
          <th className="py-2 px-4">المشرف</th>
          <th className="py-2 px-4">نوع المصدر </th>
          <th className="py-2 px-4">المصدر </th>
        </tr>
      </thead>
      <tbody >
      {Array.from({ length: 4 }).map((_, index) => (
    <tr key={index} className='border-2 border-light_Blue p-4 '>
      <td className='py-2 flex flex-row justify-center'>
        <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
        <Link to='/LawClassification'><MdAppRegistration  size={25} className='text-Deep_Blue'/></Link>
      </td>
      <td className='py-2'>  23-03-2024  </td>
      <td className='py-2'>غير مفهرس  </td>
      <td className='py-2'>عباسي زوليخة</td>
      <td className='py-2'>موقع ويب</td>
      <td className='py-2'>موقع الرسمي للجريدة الرسمية</td>
    </tr>
  ))}
 <tr  className='border-2 border-light_Blue p-4 '>
      <td className='py-2 flex flex-row justify-center'>
        <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
        <Link to='/JrisprudenceClassification'> <MdAppRegistration  size={25} className='text-Deep_Blue'/></Link>
      </td>
      <td className='py-2'>  23-03-2024  </td>
      <td className='py-2'>غير مفهرس  </td>
      <td className='py-2'>عباسي زوليخة</td>
      <td className='py-2'>pdf ملف</td>
      <td className='py-2'>جريدة رسمية رقم 23 سنة 2023</td>
    </tr>
     <tr  className='border-2 border-light_Blue p-4 '>
      <td className='py-2 flex flex-row justify-center'>
        <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
        <Link to='/JrisprudenceClassification'> <MdAppRegistration  size={25} className='text-Deep_Blue'/></Link>
      </td>
      <td className='py-2'>  23-03-2024  </td>
      <td className='py-2'>غير مفهرس  </td>
      <td className='py-2'>عباسي زوليخة</td>
      <td className='py-2'> صورة</td>
      <td className='py-2'>جريدة رسمية رقم 23 سنة 2023</td>
    </tr>
      </tbody>
    </table>
  </div>
    </div>
    
  )
}
