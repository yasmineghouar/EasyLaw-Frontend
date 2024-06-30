import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuPrincipal() {
  return (
    <div className='flex flex-wrap-reverse justify-around w-full bg-light_Blue px-4 py-2'>
      <p className='text-base font-medium font-cairo text-Deep_Blue'>اتصل بنا</p>
      <p className='text-base font-medium font-cairo text-Deep_Blue'>عن الموقع</p>
      <Link to="/Offres"><p className='text-base font-medium font-cairo text-Deep_Blue'>العروض</p> </Link> 
      <Link to="/Aide"><p className='text-base font-medium font-cairo text-Deep_Blue'>العون</p></Link>
      <Link to="/News"> <p className='text-base font-medium font-cairo text-Deep_Blue'>اخر الاخبار</p></Link>
      <Link to="/"><p className='text-lg font-bold font-cairo text-Dark_Blue'>الرئيسية</p></Link>
    </div>
  );
}
