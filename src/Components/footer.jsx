import React from 'react'
import facebook from '../Images/facebook.png';
import linkedin from '../Images/linkedin.png';
import twitter from '../Images/skill-icons_twitter.png';
import youtube from '../Images/youtube-icon.png';
import gmail from '../Images/gmail.png';
import phone from '../Images/phone.png';
import { Link } from 'react-router-dom';

export default function footer() {
    return (
        <div className='bg-Dark_Blue flex flex-col lg:flex-row p-10 justify-between'>
          
          <div className='flex flex-col w-full lg:w-1/2 lg:pr-4 mb-8 lg:mb-0'>
            <p className='font-bold text-light_Blue font-cairo mb-4'>معلومات اتصال اضافية</p>
            <div className='flex flex-col lg:flex-col justify-between'>
              <div className='flex flex-row items-center mb-4 lg:mb-0 lg:mr-4'><img src={gmail} className='w-6 h-auto mr-2'/><p className='text-my_whitee font-cairo'>kz_abbaci@esi.dz</p></div>
              <div className='flex flex-row items-center'><img src={phone} className='w-6 h-auto mr-2'/><p className='text-my_whitee font-cairo'>0793921328</p></div>
            </div>
          </div> 
      
          <div className='flex flex-col w-full lg:w-1/2 lg:pl-4'>
            <p className='font-bold text-light_Blue font-cairo mb-4'>مواقع التواصل لاجتماعي</p>
            <div className='flex flex-row justify-around'>
              <img src={facebook} className='w-8 h-auto'/>
              <img src={linkedin} className='w-8 h-auto'/>
              <img src={twitter} className='w-8 h-auto'/>
              <img src={youtube} className='w-8 h-auto'/>
            </div>
          </div> 
      
          <div className='flex flex-col w-full lg:w-1/2 lg:pr-4 mb-8 lg:mb-0'>
            <p className='font-bold text-light_Blue font-cairo mb-4'>روابط مفيدة</p>
            <p className='text-my_whitee font-cairo'>موقع الجريدة الرسمية</p>
            <p className='text-my_whitee font-cairo'>الدستور</p>
          </div>
      
          <div className='flex flex-col w-full lg:w-1/2 lg:pl-4'>
            <p className='font-bold text-light_Blue font-cairo mb-4'>روابط سريعة</p>
           <Link to="/"><p className='text-my_whitee font-cairo'>الرئيسية</p></Link> 
            <Link to="/News"><p className='text-my_whitee font-cairo'>اخر الاخبار</p></Link>
            <Link to="/Offres"><p className='text-my_whitee font-cairo'>العروض</p></Link>
            <Link to="/Aide"><p className='text-my_whitee font-cairo'>العون</p></Link>
          </div>
        </div>
      );
      
      
}
