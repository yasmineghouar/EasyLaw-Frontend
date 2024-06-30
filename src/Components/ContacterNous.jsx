import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import Map from '../Images/Map.png';

export default function ContacterNous() {
    return (
        <div className="px-4 py-8">
          <h2 className="text-Deep_Blue font-bold font-cairo text-2xl text-center py-2">عن الموقع</h2>
          <div className="flex flex-col lg:flex-row lg:justify-around">
            {/* Première colonne */}
            <div className="flex flex-col lg:w-1/2 lg:pr-10">
              <div className='flex flex-col items-center lg:items-end'>
                <p className="text-Dark_Blue font-cairo text-lg my-4 items-end text-center lg:text-right">
                  نظامنا الذكي للبحث ومراقبة القوانين هو منصة متقدمة تهدف إلى تسهيل الوصول إلى المعلومات القانونية الجزائرية بشكل فعال وسهل. يقدم نظامنا مجموعة من الأدوات والميزات التي تساعد المستخدمين على تحديد وفهم القوانين والمقترحات القانونية بسهولة
                </p>
                <div className="flex items-start my-4">
                  <FaLocationDot />
                  <p className="ml-2">الجزائر, واد السمار</p>
                </div>
                <img src={Map} alt="Map" className="w-full lg:max-w-md mx-auto lg:mx-0" />
              </div>
            </div>
            {/* Deuxième colonne */}
            <div className="flex flex-col lg:w-1/2 lg:pl-10">
              <div className="bg-light_Blue rounded-md shadow-md py-4 px-6 my-4">
                <div className="flex flex-col mb-4 ">
                  <label htmlFor="email1" className="text-Dark_Blue font-cairo mb-1">البريد الالكتروني</label>
                  <input id="email1" type="email" className="inputStyle bg-my_whitee py-2 px-4 rounded-md" />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="email2" className="text-Dark_Blue font-cairo mb-1">رقم الهاتف</label>
                  <input id="email2" type="email" className="inputStyle bg-my_whitee py-2 px-4 rounded-md" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email3" className="text-Dark_Blue font-cairo mb-1">الرسالة</label>
                  <input id="email3" type="email" className="inputStyle bg-my_whitee py-2 px-4 rounded-md" />
                </div>
                <button className='btn_Bleu w-full my-6'>ارسال</button>
              </div>
            </div>
          </div>
        </div>
      );
}
