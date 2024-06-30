import React from 'react';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

export default function Headerlogin() {
  return (
    <div className='bg-Dark_Blue w-full flex flex-col md:flex-row justify-between items-center py-4 px-8'>
      <div className='flex flex-col md:flex-row items-center md:items-start mt-4'>
      </div>
      <div className='text-center md:text-right mb-4 md:mb-0'>
        <p className='text-my_yellow font-cairo text-base md:text-3xl'>
          مرحبًا بك في نظامنا الذكي للبحث ومراقبة القوانين!
        </p>
      </div> 
      <div className='flex justify-center md:justify-end'>
        <img src={Logo} alt='Logo' className='w-12 h-auto md:w-20' />
      </div>
    </div>
  );
}

