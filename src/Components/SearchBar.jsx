import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ action,userType, onClick }) {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    if (userType === "ادارة المستخدمين") {
      navigate('/GestionUser');

    } else if (userType === "ادارة المشرفين") {
      navigate('/GestionModirateur');
    }
  };
  return (
    <div className='flex self-start mx-5 mt-3'>
      <div className='flex flex-row gap-5 mt-5'>
        <div className='px-5 py-2 flex flex-row justify-between inputStyle md:ml-auto'>
          <input className='w-full text-right font-cairo border-0 bg-transparent outline-none focus:border-0' placeholder='البحث' />
          <IoMdSearch className='text-Deep_Blue' />
        </div>
        <button className='btn_Bleu' onClick={onClick}>{action}</button> {/* Utilisation de onClick pour définir l'événement de clic */}
        <button className='btn_Bleu' onClick={handleButtonClick}>{userType}</button>
      </div>
    </div>
  );
}
