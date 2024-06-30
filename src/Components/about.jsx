import React from 'react';
import AboutImg from '../Images/AboutImg.png';

export default function About() {
  return (
    <div className="px-4 py-8">
      <h2 className="text-Deep_Blue font-bold font-cairo text-2xl text-center py-2">عن الموقع</h2>
      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="flex flex-col lg:w-1/2">
         <p className="text-Dark_Blue font-cairo text-lg my-4">
            نظامنا الذكي للبحث ومراقبة القوانين هو منصة متقدمة تهدف إلى تسهيل الوصول إلى المعلومات القانونية الجزائرية بشكل فعال وسهل. يقدم نظامنا مجموعة من الأدوات والميزات التي تساعد المستخدمين على تحديد وفهم القوانين والمقترحات القانونية بسهولة
         </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-light_Blue rounded-md shadow-md p-4">
              <p className="text-Dark_Blue font-cairo text-xl text-center">+32</p>
              <p className="text-Dark_Blue font-cairo text-xl text-center">مليون مستخدم</p>
            </div>
            <div className="border-2 border-light_Blue rounded-md shadow-md p-4">
              <p className="text-Dark_Blue font-cairo text-xl text-center">+10</p>
              <p className="text-Dark_Blue font-cairo text-xl text-center">مليون قانون </p>
            </div>
            <div className="border-2 border-light_Blue rounded-md shadow-md p-4">
              <p className="text-Dark_Blue font-cairo text-xl text-center">+320</p>
              <p className="text-Dark_Blue font-cairo text-xl text-center">تعليق ايجابي </p>
            </div>
            <div className="border-2 border-light_Blue rounded-md shadow-md p-4">
              <p className="text-Dark_Blue font-cairo text-xl text-center">+320</p>
              <p className="text-Dark_Blue font-cairo text-xl text-center">تعليق ايجابي </p>
            </div>
          </div>
        </div>
        {/* Condition pour afficher l'image uniquement sur les appareils de taille moyenne et plus grands */}
        <img src={AboutImg} className="hidden lg:block"/>
      </div>
    </div>
  );
}
