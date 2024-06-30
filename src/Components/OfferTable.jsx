import React from 'react';
import { RiDeleteBin4Line } from "react-icons/ri";
import { MdAppRegistration } from "react-icons/md";

export default function OfferTable({onClick1 ,onClick2 }) {
  return (
    <div className="mt-10 flex justify-center">
    <table className="w-full max-w-4xl">
      <thead>
        <tr className="bg-transparent border-2 border-light_Blue rounded-t-lg text-Deep_Blue font-bold">
          <th className="py-2 px-4">تعديل</th>
          <th className="py-2 px-4">خدمات</th>
          <th className="py-2 px-4">تاريخ اضافة العرض</th>
          <th className="py-2 px-4">السعر</th>
          <th className="py-2 px-4">صلاحية الخدمة</th>
          <th className="py-2 px-4">نوع العرض</th>
        </tr>
      </thead>
      <tbody >
      {Array.from({ length: 6 }).map((_, index) => (
    <tr key={index} className='border-2 border-light_Blue p-4 '>
      <td className='py-2 flex flex-row justify-center'>
        <RiDeleteBin4Line onClick={onClick1} size={25} className='text-my_Red' />
        <MdAppRegistration onClick={onClick2} size={25} className='text-Deep_Blue'/>
      </td>
      <td className='py-2'>القوانين الاساسية </td>
      <td className='py-2'>32 ديسمبر 2023</td>
      <td className='py-2'>3000DZ</td>
      <td className='py-2'>شهر</td>
      <td className='py-2'>تسعير مخصص</td>
    </tr>
  ))}

      </tbody>
    </table>
  </div>
  );
}
