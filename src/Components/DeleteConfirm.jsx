import React from 'react'
import { MdCancelPresentation } from "react-icons/md";

export default function DeleteConfirm({ onClose }) {
  return (
    <div className='flex flex-col items-center w-auto md:w-1/3 px-5 py-5 bg-my_whitee rounded-md shadow-md border-2 border-Deep_Blue'>
    <MdCancelPresentation className='text-Deep_Blue self-end cursor-pointer' onClick={onClose} />
    <h1 className='text-2xl font-cairo font-bold text-Deep_Blue mb-5'>هل تريد فعلا حذف العنصر </h1>
   <div className='flex flex-row gap-4'>
   <button className='btn_Bleu w-full mt-5 mb-2'>نعم </button>
   <button className='btn_Bleu w-full mt-5 mb-2' onClick={onClose}>لا</button>
   </div>
    </div>  )
}
